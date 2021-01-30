import { useState } from 'react'
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


export default function ResumeMainCollection({setCollections,validationSchema,fields,children,collections,label,icon}){
    const [addVisible,setAddVisible] = useState(false)
    const [editVisible,setEditVisible] = useState(false)
    const [deleteVisible,setDeleteVisible] = useState(false)
    const [selectedItem,setSelectedItem] = useState(null)
    const [viewMore,setViewMore] = useState(false)
    moment.locale('ar-dz')
    const handleAddItem = (item)=>{
        console.log("submit add element")
        setCollections([...collections,item])
        setAddVisible(false)
    }

    const handleEditItem = (item)=>{
        console.log("submit edit element")
        let lastItems = [...collections]
        const index = lastItems.findIndex((el)=>el.id === item.id)
        lastItems[index] = item
        setCollections(lastItems)
        setEditVisible(false)
        setSelectedItem(null)
    }
    
    const handleDeleteItem = (item)=>{
        setCollections(collections.filter((el)=>el.id!==item.id))
        setDeleteVisible(false)
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
                        <IconButton className={classes.iconButtonHeader} onClick={()=>setAddVisible(true)}>
                            <AddIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    )
                }
            </h2>
            {
                children ? (
                    <>
                    {children}
                    </>
                ):(
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
                    {collections.map((collection,index)=>{
                        if(!viewMore && index >2) return;
                        return(
                        <div className={classes.collectionItem} key={`collection-item-${label}-${index}`}>
                            <div className={classes.collectionRectangle}></div>
                            <div className={classes.collectionContent}>
                                <h2>
                                    {collection.title ??collection.name??collection.role }
                                    <div className={classes.actionItem}>
                                        <IconButton className={classes.actionItemButton} onClick={()=>{setSelectedItem(collection),setEditVisible(true)}}>
                                            <EditOutlinedIcon className={`${classes.actionItemIcon} ${classes.edit}`}/>
                                        </IconButton>
                                        <IconButton className={classes.actionItemButton} onClick={()=>{setSelectedItem(collection),setDeleteVisible(true)}}>
                                            <DeleteOutlineOutlinedIcon className={`${classes.actionItemIcon} ${classes.delete}`}/>
                                        </IconButton>
                                    </div>
                                </h2>
                                <h3>{collection.university ?? collection.company??collection.organization}</h3>
                                <h3>{collection.provider}</h3>
                                <h3>{`${moment(collection.startDate).format('DD MMM YYYY')} - ${collection.endDate !=="" ?moment(collection.endDate).format('DD MMM YYYY') :"لا تاريخ انتهاء الصلاحية"}`}</h3>
                                <span>{collection.link && collection.link.label}</span>
                                <span>{collection.description}
                                </span>
                                <span>{collection.location}</span>
                                <div className={classes.line}></div>
                            </div>
                        </div>

                    )
                    
                })}
                    {collections.length > 3 && (
                        <div className={classes.moreCollections}>
                            <IconButton onClick={()=>setViewMore(!viewMore)} className={classes.moreCollectionButton}>
                                {viewMore  ?  <KeyboardArrowUpIcon className={classes.moreCollectionIcon}/>  :  <KeyboardArrowDownIcon className={classes.moreCollectionIcon}/>}
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
