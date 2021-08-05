import { useState, useEffect } from 'react'
import classes from './ResumeMainCollection.module.css'
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { IconButton } from '@material-ui/core'
import Modal from '../Modal/Modal'
import AddElement from '../CrudModal/AddElement'
import EditElement from '../CrudModal/EditElement';
import DeleteElement from '../CrudModal/DeleteElement';
import { Skeleton } from '@material-ui/lab';
import useGetList from '../../utils/hooks/useGetList';
import { useSelector } from 'react-redux'
import useAddElement from '../../utils/hooks/useAddElement';
import useEditElement from '../../utils/hooks/useEditElement';
import useDeleteElement from '../../utils/hooks/useDeleteElement';
import ErrorUnreachable from '../ErrorUnreachable/ErrorUnreachable';
import Error500 from '../Error500/Error500';
import { format} from 'date-fns'
import arLocale  from 'date-fns/locale/ar-DZ'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt as faTrashAlt2} from '@fortawesome/free-regular-svg-icons';
export default function ResumeMainCollection({ collectionName, validationSchema, fields, children, label, icon }) {
    const user = useSelector((state) => state.user)
    const [addVisible, setAddVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [viewMore, setViewMore] = useState(false)
    const { isLoading, data,isError,error } = useGetList(collectionName, collectionName? `/researcher/${collectionName}`:null, null, null, null, user.researchers.id)
    const { mutate: addElement, status: addElementStatus } = useAddElement(collectionName, `/researcher/${collectionName}/add`, null, null, null, user.researchers.id)
    const { mutate: editElement, status: editElementStatus } = useEditElement(collectionName, `/researcher/${collectionName}/edit`, null, null, null, user.researchers.id)
    const { mutate: deleteElement, status: deleteElementStatus } = useDeleteElement(collectionName, `/researcher/${collectionName}/delete?id=${selectedItem?.id}`, null, null, null, user.researchers.id)

    useEffect(() => {
        if (addElementStatus === "success") {
            setAddVisible(false)
        }
    }, [addElementStatus])

    useEffect(() => {
        if (deleteElementStatus === "success") {
            setDeleteVisible(false)
        }
    }, [deleteElementStatus])


    useEffect(() => {
        if (editElementStatus === "success") {
            setEditVisible(false)
        }
    }, [editElementStatus])


    const handleAddItem = (item) => {
        item.researcherId = user.researchers.id
        addElement(item)
    }

    const handleEditItem = (item) => {
        item.researcherId = user.researchers.id
        editElement(item)
            ;
    }

    const handleDeleteItem = (item) => {
        item.researcherId = user.researchers.id
        deleteElement(item)
    }

    return (
        <div className={classes.collectionContainer}>

            <h2>
                <span>
                    <i className={classes.collectionTitleIcon}>{icon} </i>
                    {label}
                </span>
                {
                    !children && (
                        <IconButton className={classes.iconButtonHeader} onClick={() => setAddVisible(true)}>
                            <AddIcon className={classes.actionSectionIcon} />
                        </IconButton>
                    )
                }
            </h2>
            {
                children ? (
                    <>
                        {children}
                    </>
                ) : (
                    <div className={classes.collectionItems}>
                        <Modal visible={addVisible} setVisible={setAddVisible}>
                            <AddElement
                                title={label}
                                validationSchema={validationSchema}
                                fields={fields}
                                handleSubmit={handleAddItem}
                            />
                        </Modal>
                        <Modal visible={editVisible} setVisible={setEditVisible}>
                            <EditElement
                                item={selectedItem}
                                title={label}
                                validationSchema={validationSchema}
                                fields={fields}
                                handleSubmit={handleEditItem}
                            />
                        </Modal>
                        <Modal visible={deleteVisible} setVisible={setDeleteVisible}>
                            <DeleteElement
                                item={selectedItem}
                                title={label}
                                handleSubmit={handleDeleteItem}
                            />
                        </Modal>
                        {
                            isLoading ?
                                (
                                    <div className={classes.collectionItem}>
                                        <Skeleton variant="rect" className={classes.collectionRectangle} />
                                        <div className={classes.collectionContent}>
                                            <h2><Skeleton variant="text" /></h2>
                                            <h3><Skeleton variant="text" /></h3>
                                            <h3><Skeleton variant="text" /></h3>
                                            <div className={classes.line}></div>
                                        </div>
                                    </div>
                                )
                                :isError ?(
                                    error.response && error.response.status===500?(
                                        <Error500 />
                                    ):(
                                        
                                            <ErrorUnreachable />
                                        
            
                                    )
    
                                
                            )

                                :data.map((collection, index) => {
                                    if (!viewMore && index > 2) return;
                                    return (
                                        <div className={classes.collectionItem} key={`collection-item-${label}-${index}`}>
                                            <div className={classes.collectionRectangle}>
                                                <img src={`/images/${collectionName}-placeholder.png`} alt="" />
                                            </div>
                                            <div className={classes.collectionContent}>
                                                <h2>
                                                    {collection.title ?? collection.name ?? collection.role}
                                                </h2>
                                                <h3>{collection.university ?? collection.company ?? collection.organization}</h3>
                                                <h3>{collection.provider}</h3>
                                                <h3>{`${format(new Date(collection.startDate),"dd MMMM yyyy",{locale:arLocale })} - ${collection.endDate !== ""  && collection.endDate!==null ? format(new Date(collection.endDate),"dd MMMM yyyy",{locale:arLocale }) : "حالي"}`}</h3>
                                                <span>{collection.link && collection.link.label}</span>
                                                <span>{collection.description}
                                                </span>
                                                <span>{collection.location}</span>
                                                <div className={classes.line}></div>
                                            </div>
                                                    <div className={classes.actionItem}>
                                                        <IconButton  onClick={() => { setSelectedItem(collection); setEditVisible(true) }}>
                                                            <FontAwesomeIcon icon={faEdit} className={`${classes.actionItemIcon} ${classes.edit}`} />
                                                        </IconButton>
                                                        <IconButton  onClick={() => { setSelectedItem(collection); setDeleteVisible(true) }}>
                                                            <FontAwesomeIcon icon={faTrashAlt2} className={`${classes.actionItemIcon} ${classes.delete}`}/>
                                                        </IconButton>
                                                    </div>
                                        </div>

                                    )

                                })}
                        {data && data.length > 3 && (
                            <div className={classes.moreCollections}>
                                <IconButton onClick={() => setViewMore(!viewMore)} className={classes.moreCollectionButton}>
                                    {viewMore ? <KeyboardArrowUpIcon className={classes.moreCollectionIcon} /> : <KeyboardArrowDownIcon className={classes.moreCollectionIcon} />}
                                </IconButton>
                                <span className={classes.moreText}>إطلع على المزيد</span>
                            </div>

                        )}
                    </div>

                )
            }
        </div>
    )
}
