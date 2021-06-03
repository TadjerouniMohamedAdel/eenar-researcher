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
import { Skeleton } from '@material-ui/lab'
import useAddElement from '../../utils/hooks/useAddElement'
import useEditElement from '../../utils/hooks/useEditElement'
import useGetList from '../../utils/hooks/useGetList';
import useDeleteElement from '../../utils/hooks/useDeleteElement'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import ErrorUnreachable from '../ErrorUnreachable/ErrorUnreachable'
import Error500 from '../Error500/Error500'
import { format } from 'date-fns'
import arLocale from 'date-fns/locale/ar-DZ'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ISO6391 from 'iso-639-1';
import { faEdit, faTrashAlt as faTrashAlt2 } from '@fortawesome/free-regular-svg-icons';
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
    const { isLoading, data, isError, error } = useGetList(collectionName, `/researcher/${collectionName}`, null, null, null, user.researchers.id)
    const { mutate: addElement, status: addElementStatus } = useAddElement(collectionName, `/researcher/${collectionName}/add`, null, null, null, user.researchers.id)
    const { mutate: editElement, status: editElementStatus } = useEditElement(collectionName, `/researcher/${collectionName}/edit`, null, null, null, user.researchers.id)
    const { mutate: deleteElement, status: deleteElementStatus } = useDeleteElement(collectionName, `/researcher/${collectionName}/delete?id=${selectedItem?.id}`, null, null, null, user.researchers.id)

    const levels = {
        "beginner":"مبتدئ" ,
        "intermediate":"متوسط",
        "advanced":"متقدم",
        "native":"اللغة الأم"

    }
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
                        isError ? (
                            error.response && error.response.status === 500 ? (
                                <Error500 />
                            ) : (

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
                                            <li key={`item=${label}-${index}`}>{collectionName === "language" ? ISO6391.getNativeName(item.name) :item.title ?? item.name}</li>
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
                                                    {collectionName === "language" ? ISO6391.getNativeName(item.name) : item.name ?? item.title}
                                                </h3>
                                                {item.startDate && <h4>{`${format(new Date(item.startDate), "dd MMMM yyyy", { locale: arLocale })} - ${item.endDate !== "" && item.endDate !== null ? format(new Date(item.endDate), "dd MMMM yyyy", { locale: arLocale }) : "مستمر"}`} {item.role} {item.status}</h4>}
                                                {item.level && <h4>{levels[item.level]}</h4>}
                                                {item.date && <h4>{format(new Date(item.date), "dd MMMM yyyy", { locale: arLocale })}</h4>}
                                                {item.center && <h4>{item.center} &nbsp; {item.location ?? item.code}</h4>}
                                                {item.description && <span>{item.description}</span>}
                                                <div className={classes.actionItem}>
                                                    <IconButton onClick={() => { setSelectedItem(item); setEditVisible(true) }} className={classes.actionItemButton}>
                                                        <FontAwesomeIcon icon={faEdit} className={`${classes.actionItemIcon} ${classes.edit}`} />
                                                    </IconButton>
                                                    <IconButton onClick={() => { setSelectedItem(item); setDeleteVisible(true) }} className={classes.actionItemButton}>
                                                        <FontAwesomeIcon icon={faTrashAlt2} className={`${classes.actionItemIcon} ${classes.delete}`} />
                                                    </IconButton>
                                                </div>
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
    collectionName: PropTypes.string.isRequired,
    label: PropTypes.string,
    last: PropTypes.bool,
    fields: PropTypes.array,
    validationSchema: PropTypes.object
}