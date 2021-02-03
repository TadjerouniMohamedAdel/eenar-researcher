import { useState,useEffect } from 'react'
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
import axios from 'axios'


export default function ResumeMainCollection({researcherId,setCollections,collectionName,validationSchema,fields,children,collections,label,icon}){
    const [addVisible,setAddVisible] = useState(false)
    const [editVisible,setEditVisible] = useState(false)
    const [deleteVisible,setDeleteVisible] = useState(false)
    const [selectedItem,setSelectedItem] = useState(null)
    const [viewMore,setViewMore] = useState(false)
    let user =''
    moment.locale('ar-dz')



    useEffect(()=>{
        user = JSON.parse(localStorage.getItem('user'))
    },[])



    const handleAddItem = (item)=>{
        const user = JSON.parse(localStorage.getItem('user'))        
        item.researcherId = user.researchers.id
        axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/${collectionName}/add`,
            data: item
          })
            .then(response=>{
                console.log("response add",response.data)
                setCollections([...collections,response.data]);
                setAddVisible(false)
            })
            .catch(error=>console.log(error))
          ;
        
    }

    const handleEditItem = (item)=>{
        const user = JSON.parse(localStorage.getItem('user'))
        item.researcherId = user.researchers.id
        
        axios({
            method: 'put',
            url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/${collectionName}/edit`,
            data: item
          })
            .then(response=>{
                console.log(response)
                let lastItems = [...collections]
                const index = lastItems.findIndex((el)=>el.id === item.id)
                lastItems[index] = item
                setCollections(lastItems)
                setEditVisible(false)
                setSelectedItem(null)
            })
            .catch(error=>console.log(error))
          ;
    }
    
    const handleDeleteItem = (item)=>{
        const user = JSON.parse(localStorage.getItem('user'))
        item.researcherId = user.researchers.id
        
        axios({
            method: 'delete',
            url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/${collectionName}/delete?id=${item.id}`,
            data: item
          })
            .then(response=>{
                console.log(response)
                setCollections(collections.filter((el)=>el.id!==item.id))
                setDeleteVisible(false)
            })
            .catch(error=>console.log(error))
          ;
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
