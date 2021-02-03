import { IconButton } from '@material-ui/core'
import React,{useState} from 'react'
import classes from './ResumeSuccessItem.module.css'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {AnimatePresence , motion} from 'framer-motion'
import Modal from '../Modal/Modal'
import AddElement from '../CrudModal/AddElement'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditElement from '../CrudModal/EditElement'
import DeleteElement from '../CrudModal/DeleteElement'
import moment from 'moment'
import axios from 'axios'

const backdropVariants = {
    visible:{opacity:1},
    hidden:{opacity:0},
}

export default function ResumeSuccessItem({setItems,collectionName,label,items,last,fields,validationSchema}) {
    const [isExpanded,setIsExpanded] =useState(false)
    const [addVisible,setAddVisible] = useState(false)
    const [editVisible,setEditVisible] = useState(false)
    const [deleteVisible,setDeleteVisible] = useState(false)
    const [selectedItem,setSelectedItem] = useState(null)
    moment.locale('ar-dz')


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
                setItems([...items,item])
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
                let lastItems = [...items]
                const index = lastItems.findIndex((el)=>el.id === item.id)
                lastItems[index] = item
                setItems(lastItems)
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
            setItems(items.filter((el)=>el.id!==item.id))
            setDeleteVisible(false)
              
            })
            .catch(error=>console.log(error))
          ;
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
                                <IconButton onClick={()=>{setAddVisible(true)}}>
                                    <AddCircleOutlineOutlinedIcon className={classes.addIcon}/>
                                </IconButton>
                            </span>
                            <IconButton onClick={()=>setIsExpanded(!isExpanded)}>
                                {
                                    isExpanded ?  <ExpandLessIcon style={{fontSize:28,color:"#3e3f5e"}} />: <ExpandMoreIcon style={{fontSize:28,color:"#3e3f5e"}} /> 
                                }
                            </IconButton>
                        </h3>
                        {
                            isExpanded ? (
                                <motion.ul 
                                    variants={backdropVariants}
                                    animate="visible"
                                    initial="hidden"
                                    exit="hidden"
                                    className={classes.successSectionNotExpanded}
                                >
                                    {
                                        items.map((item,index)=>(
                                            <li key={`item=${label}-${index}`}>{item.title ?? item.name}</li>
                                        ))
                                    }
                                </motion.ul>
                            ):(
                                <motion.div 
                                    variants={backdropVariants}
                                    animate="visible"
                                    initial="hidden"
                                    exit="hidden"
                                    className={classes.successSectionItems}
                                >
                                    {
                                        items.map((item,index)=>(
                                            <div key={`item=${label}-${index}`} className={classes.successSectionItem}>
                                                <h3>
                                                    {item.name ?? item.title}
                                                    <div className={classes.actionItem}>
                                                        <IconButton className={classes.actionItemButton} onClick={()=>{setSelectedItem(item),setEditVisible(true)}}>
                                                            <EditOutlinedIcon className={`${classes.actionItemIcon} ${classes.edit}`}/>
                                                        </IconButton>
                                                        <IconButton className={classes.actionItemButton}  onClick={()=>{setSelectedItem(item),setDeleteVisible(true)}}>
                                                            <DeleteOutlineOutlinedIcon className={`${classes.actionItemIcon} ${classes.delete}`}/>
                                                        </IconButton>
                                                    </div>
                                                </h3>
                                                {item.startDate && <h4>{`${moment(item.startDate).format('DD MMM YYYY')} - ${item.endDate!==""?moment(item.endDate).format('DD MMM YYYY') :"مستمر"}`} {item.role} {item.status}</h4>}
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
