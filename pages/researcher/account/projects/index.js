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

export default function index() {
    const [addVisible,setAddVisible] = useState(false)
    const [editVisible,setEditVisible] = useState(false)
    const [deleteVisible,setDeleteVisible] = useState(false)
    const [articles,setArticles] = useState(dataarticles)
    const [groups,setGroups] = useState(datagroups)
    const [projects,setProjects] = useState([])

    return (
        <ResearcherAccountLayout>
            <MyHead title="الملف الشخصي  - مشاريعي" />
           <div className={classes.myProjectsContainer}>
           <Modal visible={addVisible} setVisible={setAddVisible}>
                        {/* <MultiStepsAddElement
                            title="مشروع"
                            handleSubmit={handleAddItem}
                            steps={[{fields:postStep1,validationSchema:postSchemaStep1},{fields:postStep2,validationSchema:postSchemaStep2}]}
                        /> */}
                </Modal>
                <Modal visible={editVisible} setVisible={setEditVisible}>
                        {/* <MultiStepsEditElement
                            item={selectedItem}
                            handleSubmit={handleEditItem}
                            title="مشروع"
                            steps={[{fields:postStep1,validationSchema:postSchemaStep1},{fields:postStep2,validationSchema:postSchemaStep2}]}
                        /> */}
                </Modal>
                <Modal visible={deleteVisible} setVisible={setDeleteVisible}>
                        {/* <DeleteElement
                            item={selectedItem} 
                            title="مشروع" 
                            handleSubmit={handleDeleteItem}
                        /> */}
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
                                    <IconButton>
                                        <GetAppIcon  className={classes.downloadIcon} />
                                    </IconButton>
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
