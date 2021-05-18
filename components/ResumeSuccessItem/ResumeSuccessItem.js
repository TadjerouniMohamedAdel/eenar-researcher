import { IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import classes from './ResumeSuccessItem.module.css'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { AnimatePresence, motion } from 'framer-motion'
import Modal from '../Modal/Modal'
import AddElement from '../CrudModal/AddElement'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditElement from '../CrudModal/EditElement'
import DeleteElement from '../CrudModal/DeleteElement'
import moment from 'moment'
import { Skeleton } from '@material-ui/lab'
import useAddElement from '../../utils/hooks/useAddElement'
import useEditElement from '../../utils/hooks/useEditElement'
import useGetList from '../../utils/hooks/useGetList';
import useDeleteElement from '../../utils/hooks/useDeleteElement'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import ErrorUnreachable from '../ErrorUnreachable/ErrorUnreachable'
import Error500 from '../Error500/Error500'

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

export default function ResumeSuccessItem({ collectionName, label, last, fields, validationSchema }) {
    const user = useSelector((state) => state.user)
    const [isExpanded, setIsExpanded] = useState(false)
    const [addVisible, setAddVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const { isLoading, data,isError,error } = useGetList(collectionName, `/researcher/${collectionName}`, null, null, null, user.researchers.id)
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
        <AnimatePresence exitBeforeEnter>

            <div className={classes.successSection}>
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
                <h3>
                    <span>
                        {label}
                        <IconButton onClick={() => { setAddVisible(true) }}>
                            <AddCircleOutlineOutlinedIcon className={classes.addIcon} />
                        </IconButton>
                    </span>
                    <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                        {
                            isExpanded ? <ExpandLessIcon style={{ fontSize: 28, color: "#3e3f5e" }} /> : <ExpandMoreIcon style={{ fontSize: 28, color: "#3e3f5e" }} />
                        }
                    </IconButton>
                </h3>
                {
                    isLoading ? (
                        <div className={classes.successSectionItem}>
                            <h3>
                                <Skeleton variant="text" width="47%" />
                            </h3>
                            <h4 style={{ display: "flex" }}><Skeleton variant="text" width="20%" style={{ margin: 5 }} /> <Skeleton style={{ margin: 5 }} variant="text" width="20%" /></h4>
                            <h4><Skeleton variant="text" width="20%" /></h4>
                        </div>
                    ) :
                    isError ?(
                        error.response && error.response.status===500?(
                            <Error500 />
                        ):(
                            
                                <ErrorUnreachable />
                            

                        )

                    
                )
                        :
                        isExpanded ? (
                            <motion.ul
                                variants={backdropVariants}
                                animate="visible"
                                initial="hidden"
                                exit="hidden"
                                className={classes.successSectionNotExpanded}
                            >
                                {
                                    data.map((item, index) => (
                                        <li key={`item=${label}-${index}`}>{item.title ?? item.name}</li>
                                    ))
                                }
                            </motion.ul>
                        ) : (
                            <motion.div
                                variants={backdropVariants}
                                animate="visible"
                                initial="hidden"
                                exit="hidden"
                                className={classes.successSectionItems}
                            >
                                {
                                    data.map((item, index) => (
                                        <div key={`item=${label}-${index}`} className={classes.successSectionItem}>
                                            <h3>
                                                {item.name ?? item.title}
                                                <div className={classes.actionItem}>
                                                    <IconButton className={classes.actionItemButton} onClick={() => { setSelectedItem(item); setEditVisible(true) }}>
                                                        <EditOutlinedIcon className={`${classes.actionItemIcon} ${classes.edit}`} />
                                                    </IconButton>
                                                    <IconButton className={classes.actionItemButton} onClick={() => { setSelectedItem(item); setDeleteVisible(true) }}>
                                                        <DeleteOutlineOutlinedIcon className={`${classes.actionItemIcon} ${classes.delete}`} />
                                                    </IconButton>
                                                </div>
                                            </h3>
                                            {item.startDate && <h4>{`${moment(item.startDate).format('DD MMM YYYY')} - ${item.endDate !== "" ? moment(item.endDate).format('DD MMM YYYY') : "مستمر"}`} {item.role} {item.status}</h4>}
                                            {item.level && <h4>{item.level}</h4>}
                                            {item.date && <h4>{moment(item.date).format('DD MMM YYYY')}</h4>}
                                            {item.center && <h4>{item.center} {item.location ?? item.code}</h4>}
                                            {item.description && <span>{item.description}</span>}
                                        </div>

                                    ))
                                }
                            </motion.div>

                        )
                }
                {!last && <div className={classes.seccessSectionDevider}></div>}
            </div>
        </AnimatePresence>
    )
}

ResumeSuccessItem.propTypes = {
    collectionName : PropTypes.string.isRequired,
    label:PropTypes.string, 
    last:PropTypes.bool, 
    fields:PropTypes.array, 
    validationSchema:PropTypes.object
}