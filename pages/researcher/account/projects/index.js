import { useState , useEffect} from 'react'
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkInProgress from '../../../../components/WorkInProgress/WorkInProgress'
import MyHead from '../../../../components/MyHead/MyHead'
import { dataarticles, datagroups } from '../../../../utils/fixtures/DevData'
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import EditIcon from '@material-ui/icons/Edit';
import LearnNow from "../../../../components/LearnNow/LearnNow";
import LastArticles from "../../../../components/LastArticles/LastArticles";
import MyGroups from "../../../../components/MyGroups/MyGroups";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Modal from '../../../../components/Modal/Modal';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteElement from '../../../../components/CrudModal/DeleteElement';
import MultiStepsEditElement from '../../../../components/CrudModal/MultiStepsEditElement';
import MultiStepsAddElement from '../../../../components/CrudModal/MultiStepsAddElement';
import classes from '../../../../styles/MyProjects.module.css'
import { projectSchemaStep1, projectSchemaStep2, projectSchemaStep3, projectSchemaStep4 } from '../../../../utils/Validation/ValidationObjects'
import { projectStep1, projectStep2, projectStep3, projectStep4 } from '../../../../utils/form/Fields'
import axios from 'axios'


export default function index() {
    const [addVisible,setAddVisible] = useState(false)
    const [editVisible,setEditVisible] = useState(false)
    const [deleteVisible,setDeleteVisible] = useState(false)
    const [articles,setArticles] = useState(dataarticles)
    const [groups,setGroups] = useState(datagroups)
    const [projects,setProjects] = useState([])
    const [selectedItem,setSelectedItem] = useState(null)

    useEffect(() => {
        const user = JSON.parse(JSON.parse(localStorage.getItem('persist:primary')).user)
        axios({
            method:"GET",
            url:`${process.env.NEXT_PUBLIC_API_URL}/researcher/researchproject?researcherId=${user.researchers.id}`
        }).then(response=>{
            setProjects(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

    const handleDeleteItem = (item)=>{
        const user = JSON.parse(JSON.parse(localStorage.getItem('persist:primary')).user)
        item.researcherId = user.researchers.id
        console.log("delete post",item)
        axios({
            method: 'delete',
            url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/researchproject/delete?id=${item.id}`,
            data: item
          })
            .then(response=>{
                console.log(response)
                setPosts(posts.filter((el)=>el.id!==item.id))
                setDeleteVisible(false)
            })
            .catch(error=>console.log(error))
          ;
        
    }
    const handleAddItem = (item)=>{
        const user = JSON.parse(JSON.parse(localStorage.getItem('persist:primary')).user)
        item.researcherId = user.researchers.id
        console.log("add post",item)
        axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/researchproject/add`,
            data: item
          })
            .then(response=>{
                console.log("response add",response.data)
                setPosts([...posts,response.data])
                setAddVisible(false)
            })
            .catch(error=>console.log(error))
          ;
    }
    const handleEditItem = (item)=>{
        const user = JSON.parse(JSON.parse(localStorage.getItem('persist:primary')).user)
        item.researcherId = user.researchers.id
        console.log("edit post",item)
        axios({
            method: 'put',
            url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/researchproject/edit`,
            data: item
          })
            .then(response=>{
                console.log(response)
                let lastItems = [...posts]
                const index = lastItems.findIndex((el)=>el.id === item.id)
                lastItems[index] = item
                setPosts(lastItems)
                setEditVisible(false)
                setSelectedItem(null)
            })
            .catch(error=>console.log(error))
          ;
    }
    return (
        <ResearcherAccountLayout>
            <MyHead title="الملف الشخصي  - مشاريعي" />
           <div className={classes.myProjectsContainer}>
           <Modal visible={addVisible} setVisible={setAddVisible}>
                        <MultiStepsAddElement
                            title="مشروع"
                            handleSubmit={handleAddItem}
                            steps={[{fields:projectStep1,validationSchema:projectSchemaStep1},{fields:projectStep2,validationSchema:projectSchemaStep2},{fields:projectStep3,validationSchema:projectSchemaStep3},{fields:projectStep4,validationSchema:projectSchemaStep4}]}
                        />
                </Modal>
                <Modal visible={editVisible} setVisible={setEditVisible}>
                        <MultiStepsEditElement
                            item={selectedItem}
                            handleSubmit={handleEditItem}
                            title="مشروع"
                            steps={[{fields:projectStep1,validationSchema:projectSchemaStep1},{fields:projectStep2,validationSchema:projectSchemaStep2},{fields:projectStep3,validationSchema:projectSchemaStep3},{fields:projectStep4,validationSchema:projectSchemaStep4}]}
                        />
                </Modal>
                <Modal visible={deleteVisible} setVisible={setDeleteVisible}>
                        <DeleteElement
                            item={selectedItem} 
                            title="مشروع" 
                            handleSubmit={handleDeleteItem}
                        />
                </Modal>
                <div className={classes.mainSection}>
                    <div className={classes.filterSection}>
                        <div className={classes.groupedActions}>
                            <TextField
                                variant="outlined"
                                label="العنوان"
                                className={classes.input}  
                            />
                            <FormControl  variant="outlined" className={classes.select}>
                                <InputLabel id="demo-simple-select-outlined-label">نوع المشروع</InputLabel>
                                <Select
                                    label="نوع المشروع"
                                >   
                                </Select>
                            </FormControl>
                            <Button className={classes.searchButton}>
                                <SearchIcon className={`${classes.searchIcon} ${classes.right}`} />
                            </Button>

                        </div>
                        <Button className={classes.addButton} onClick={()=> setAddVisible(true)}>
                            <span className={classes.text}>أضف مشروع</span>  
                            <AddIcon  className={classes.addIcon}/>
                        </Button>
                    
                    </div>
                    <div className={classes.tableContainer}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell className={classes.cellHeader} align="center">تاريخ النشر</TableCell>
                                <TableCell className={classes.cellHeader} align="left">المشروع</TableCell>
                                <TableCell className={classes.cellHeader} align="center">المؤسسة</TableCell>
                                <TableCell className={classes.cellHeader} align="center">الحالة </TableCell>
                                <TableCell className={classes.cellHeader} align="center">إجراأت</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                            {projects.map((row,index) => (
                                <TableRow key={index}>
                                <TableCell className={classes.cellBody} align="center">
                                    {row.publishedDate}
                                </TableCell>
                                <TableCell className={`${classes.cellBody} ${classes.title}`} align="left">{row.arabicTitle}</TableCell>
                                <TableCell className={classes.cellBody} align="center">{row.primaryAuthor}</TableCell>
                                <TableCell className={classes.cellBody} align="center">
                                    
                                    <IconButton onClick={()=>{setSelectedItem(row);setEditVisible(true)}}>
                                        <EditIcon  className={classes.downloadIcon} />
                                    </IconButton>
                                    <IconButton onClick={()=>{setSelectedItem(row);setDeleteVisible(true)}}>
                                        <DeleteIcon  className={classes.downloadIcon} />
                                    </IconButton>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        {
                            projects.length == 0&& (
                                    <div className={classes.empty}>
                                        <img src="/images/empty.png" alt="empty-list"/>
                                        <h3>لا تحتوي هذه القائمة على بيانات</h3>
                                    </div>
                            )
                        }
                        {  projects.length > 10 && (
                        <div className={classes.paginationContainer}>
                                <div className={classes.paginationCustom}>
                                    <div className={classes.paginationButton}><NavigateNextIcon className={classes.disableButton} /></div>
                                    <div className={classes.dividerPagination}></div>
                                    <div className={`${classes.paginationButton} ${classes.activeButton}`}>01</div>
                                    <div className={classes.dividerPagination}></div>
                                    <div className={classes.paginationButton}>02</div>
                                    <div className={classes.dividerPagination}></div>
                                    <div className={classes.paginationButton}>03</div>
                                    <div className={classes.dividerPagination}></div>
                                    <div className={classes.paginationButton}>04</div>
                                    <div className={classes.dividerPagination}></div>
                                    <div className={classes.paginationButton}>05</div>
                                    <div className={classes.dividerPagination}></div>
                                    <div className={classes.paginationButton}>06</div>
                                    <div className={classes.dividerPagination}></div>
                                    <div className={classes.paginationButton}><NavigateBeforeIcon /></div>
                                </div>
                        </div>
                        )
                        }
                    </div>
                </div>
                <div className={classes.sideSection}>
                    <LearnNow />
                    <LastArticles articles={articles} />
                    <MyGroups groups={groups} />
                </div>

           </div>
        </ResearcherAccountLayout>
    )
}
