import { useState, useEffect } from 'react'
import classes from './ResumeMainCollection.module.css'
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { IconButton } from '@material-ui/core'
import Modal from '../Modal/Modal'
import AddElement from '../CrudModal/AddElement'
import EditElement from '../CrudModal/EditElement';
import DeleteElement from '../CrudModal/DeleteElement';
import moment from 'moment'
import { Skeleton } from '@material-ui/lab';
import useGetList from '../../utils/hooks/useGetList';
import { useSelector } from 'react-redux'
import useAddElement from '../../utils/hooks/useAddElement';
import useEditElement from '../../utils/hooks/useEditElement';
import useDeleteElement from '../../utils/hooks/useDeleteElement';
import PropTypes from 'prop-types'
import ErrorUnreachable from '../ErrorUnreachable/ErrorUnreachable';
import Error500 from '../Error500/Error500';

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

    moment.locale('ar-dz')



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
                                            <div className={classes.collectionRectangle}></div>
                                            <div className={classes.collectionContent}>
                                                <h2>
                                                    {collection.title ?? collection.name ?? collection.role}
                                                    <div className={classes.actionItem}>
                                                        <IconButton className={classes.actionItemButton} onClick={() => { setSelectedItem(collection); setEditVisible(true) }}>
                                                            <EditOutlinedIcon className={`${classes.actionItemIcon} ${classes.edit}`} />
                                                        </IconButton>
                                                        <IconButton className={classes.actionItemButton} onClick={() => { setSelectedItem(collection); setDeleteVisible(true) }}>
                                                            <DeleteOutlineOutlinedIcon className={`${classes.actionItemIcon} ${classes.delete}`} />
                                                        </IconButton>
                                                    </div>
                                                </h2>
                                                <h3>{collection.university ?? collection.company ?? collection.organization}</h3>
                                                <h3>{collection.provider}</h3>
                                                <h3>{`${moment(collection.startDate).format('DD MMM YYYY')} - ${collection.endDate !== "" ? moment(collection.endDate).format('DD MMM YYYY') : "لا تاريخ انتهاء الصلاحية"}`}</h3>
                                                <span>{collection.link && collection.link.label}</span>
                                                <span>{collection.description}
                                                </span>
                                                <span>{collection.location}</span>
                                                <div className={classes.line}></div>
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

ResumeMainCollection.propTypes = {
    collectionName:PropTypes.string,
    validationSchema:PropTypes.object,
    fields:PropTypes.array,
    children:PropTypes.node,
    label:PropTypes.string,
    icon:PropTypes.node

}
