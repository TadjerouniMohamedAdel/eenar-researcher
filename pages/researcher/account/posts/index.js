import { useState } from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import {datagroups,dataarticles } from '../../../../utils/fixtures/DevData';
import MyHead from '../../../../components/MyHead/MyHead'
import classes from '../../../../styles/MyPosts.module.css'
import LearnNow from "../../../../components/LearnNow/LearnNow";
import LastArticles from "../../../../components/LastArticles/LastArticles";
import MyGroups from "../../../../components/MyGroups/MyGroups";
import SearchIcon from '@material-ui/icons/Search';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from '../../../../components/Modal/Modal';
import MultiStepsAddElement from '../../../../components/CrudModal/MultiStepsAddElement';
import { postStep1,postStep2 } from '../.././../../utils/form/Fields'
import { postSchemaStep1,postSchemaStep2 } from '../.././../../utils/Validation/ValidationObjects'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteElement from '../../../../components/CrudModal/DeleteElement';
import MultiStepsEditElement from '../../../../components/CrudModal/MultiStepsEditElement';

export default function index() {
    const [articles,setArticles] = useState(dataarticles)
    const [groups,setGroups] = useState(datagroups)
    const [addVisible,setAddVisible] = useState(false)
    const [editVisible,setEditVisible] = useState(false)
    const [deleteVisible,setDeleteVisible] = useState(false)
    const [selectedItem,setSelectedItem] = useState(null)
    const rows = [
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
        {publishedDate:'12/07/2020',arabicTitle: "عنوان طويل قليلا خاص يشير إلى وجود بحث مهم",primaryAuthor: "معاذ محساس",secondaryAuthors:"adel moh aymen",link:"www,fileuploader.com/fjjjgbrehfdg$3dsf",englishTitle:"District Mobility Analyst",keywords:"post myPost linkedin researcher invistisor sponsoring",publishedBy:"Adel Mohamed Tadjerouni",arabicDescription:"Et id quos voluptatem accusamus a voluptates autem nisi. Assumenda est nihil et nesciunt adipisci est dolore et impedit. Delectus quos et et assumenda. Ex quia doloribus nulla.",englishDescription:"Non esse quia. Sit accusamus ipsa ut vel. Provident voluptatem aut molestiae voluptates sint consequatur quaerat qui.",keywords:["keyword1","keyword2","keyword3"],secondaryAuthors:["author 1","author 2","author 3"]},
       
  
    ]

    const handleDeleteItem = (item)=>{

    }
    const handleAddItem = (item)=>{

    }
    const handleEditItem = (item)=>{

    }
    return (
        <ResearcherAccountLayout>
            <MyHead title="الملف الشخصي  - منشوراتي" />
            <div className={classes.myPostsContainer}>
                <Modal visible={addVisible} setVisible={setAddVisible}>
                        <MultiStepsAddElement
                            title="منشور"
                            handleSubmit={handleAddItem}
                            steps={[{fields:postStep1,validationSchema:postSchemaStep1},{fields:postStep2,validationSchema:postSchemaStep2}]}
                        />
                </Modal>
                <Modal visible={editVisible} setVisible={setEditVisible}>
                        <MultiStepsEditElement
                            item={selectedItem}
                            handleSubmit={handleEditItem}
                            title="منشور"
                            steps={[{fields:postStep1,validationSchema:postSchemaStep1},{fields:postStep2,validationSchema:postSchemaStep2}]}
                        />
                </Modal>
                <Modal visible={deleteVisible} setVisible={setDeleteVisible}>
                        <DeleteElement
                            item={selectedItem} 
                            title="منشور" 
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
                                <InputLabel id="demo-simple-select-outlined-label">نوع المنشور</InputLabel>
                                <Select
                                    label="نوع المنشور"
                                >   
                                </Select>
                            </FormControl>
                            <Button className={classes.searchButton}>
                                <SearchIcon className={`${classes.searchIcon} ${classes.right}`} />
                            </Button>

                        </div>
                        <Button className={classes.addButton} onClick={()=> setAddVisible(true)}>
                            <span className={classes.text}>أضف منشور</span>  
                            <AddIcon  className={classes.addIcon}/>
                        </Button>
                    
                    </div>
                    <div className={classes.tableContainer}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell className={classes.cellHeader} align="center">تاريخ النشر</TableCell>
                                <TableCell className={classes.cellHeader} align="left">العنوان</TableCell>
                                <TableCell className={classes.cellHeader} align="center">المؤلف</TableCell>
                                <TableCell className={classes.cellHeader} align="center">إجراأت</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                            {rows.map((row,index) => (
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
