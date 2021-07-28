import React,{ useState, useEffect } from 'react'
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkInProgress from '../../../../components/WorkInProgress/WorkInProgress'
import MyHead from '../../../../components/MyHead/MyHead'
import { dataarticles, datagroups } from '../../../../utils/fixtures/DevData'
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Hidden } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import EditIcon from '@material-ui/icons/Edit';
import LearnNow from "../../../../components/LearnNow/LearnNow";
import LastArticles from "../../../../components/LastArticles/LastArticles";
import MyGroups from "../../../../components/MyGroups/MyGroups";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Modal from '../../../../components/Modal/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteElement from '../../../../components/CrudModal/DeleteElement';
import MultiStepsEditElement from '../../../../components/CrudModal/MultiStepsEditElement';
import MultiStepsAddElement from '../../../../components/CrudModal/MultiStepsAddElement';
import classes from '../../../../styles/MyProjects.module.css'
import { projectSchemaStep1, projectSchemaStep2, projectSchemaStep3, projectSchemaStep4 } from '../../../../utils/Validation/ValidationObjects'
import { projectStep1, projectStep2, projectStep3, projectStep4 } from '../../../../utils/form/Fields'
import axios from 'axios'
import Pagination from '../../../../components/Pagination/Pagination'
import Link from 'next/link'
import { Skeleton } from "@material-ui/lab";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useSelector } from 'react-redux'
import useGetList from "../../../../utils/hooks/useGetList";
import useAddElement from "../../../../utils/hooks/useAddElement";
import useEditElement from "../../../../utils/hooks/useEditElement";
import useDeleteElement from "../../../../utils/hooks/useDeleteElement";
import MultiSectionLayout from '../../../../layouts/MultiSectionLayout/MultiSectionLayout'
import EmptyList from '../../../../components/EmptyList/EmptyList'
import ErrorUnreachable from '../../../../components/ErrorUnreachable/ErrorUnreachable'
import Error500 from '../../../../components/Error500/Error500'
import { format} from 'date-fns'
import arLocale  from 'date-fns/locale/ar-DZ'
import { GetStaticProps } from 'next'
import { RootState } from '../../../../redux/store2'
import { NotDefineYet, ResearchProject } from '../../../../utils/types/types'

export const getStaticProps:GetStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale||"ar", ["sidebar"]),
    },
})
const  ResearcherAccountProjectsPage:React.FC = ()=> {
    const user = useSelector((state:RootState) => state.user)
    const [addVisible, setAddVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [articles, setArticles] = useState(dataarticles)
    const [groups, setGroups] = useState(datagroups)
    const [selectedItem, setSelectedItem] = useState<ResearchProject|null>(null)
    const [projects, setProjects] = useState([])
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const [pages, setPages] = useState(0)
    const [page, setPage] = useState(1)
    const [research, setResearch] = useState("")
    const { isLoading, data ,error } = useGetList<{projects:ResearchProject[],maxPages:number}>("researchproject", "/researcher/researchproject/research", limit, offset, research, user.researchers.id)
    const { mutate: addProject, status: addProjectStatus } = useAddElement<ResearchProject>("researchproject", "/researcher/researchproject/add", limit, offset, research, user.researchers.id)
    const { mutate: editProject, status: editProjectStatus } = useEditElement<ResearchProject>("researchproject", "/researcher/researchproject/edit", limit, offset, research, user.researchers.id)
    const { mutate: deleteProject, status: deleteProjectStatus } = useDeleteElement("researchproject", `/researcher/researchproject/delete?id=${selectedItem?.id}`, limit, offset, research, user.researchers.id)


    useEffect(() => {
        setPage(offset / limit + 1)
    }, [offset]);
    

    useEffect(()=>{
            console.log(selectedItem)
    },[selectedItem])

    useEffect(() => {
        if (addProjectStatus === "success") {
            setAddVisible(false)
        }
    }, [addProjectStatus])

    useEffect(() => {
        if (editProjectStatus === "success") {
            setEditVisible(false)
        }
    }, [editProjectStatus])

    useEffect(() => {
        if (deleteProjectStatus === "success") {
            setDeleteVisible(false)
        }
    }, [deleteProjectStatus])

    const handleResearch = () => {
        setOffset(0)
    }

    const handleDeleteItem = (item:NotDefineYet) => {
        item.researcherId = user.researchers.id
        deleteProject(item)
    }
    const handleAddItem = (item:NotDefineYet) => {
        item.researcherId = user.researchers.id
        if (item.startDate == "") item.startDate = null
        if (item.endDate == "") item.endDate = null
        addProject(item)
    }
    const handleEditItem = (item:NotDefineYet) => {
        item.researcherId = user.researchers.id
        if (item.startDate == "") item.startDate = null
        if (item.endDate == "") item.endDate = null
        editProject(item)
    }
    const getStatus = (item:NotDefineYet) => {
        if (item.supervisor == null || item.supervisor == "") return "بحث عن مشرف"
        if (item.startDate == null || item.startDate == "") return "قيد التحضير"
        if (item.endDate == null || item.endDate == "") return "معلق"
        return "تم الانتهاء منه"
    }
    return (
        <ResearcherAccountLayout>
            <MyHead title="الملف الشخصي  - مشاريعي" />
            <Modal visible={addVisible} setVisible={setAddVisible}>
                <MultiStepsAddElement
                    title="مشروع"
                    handleSubmit={handleAddItem}
                    steps={[{ fields: projectStep1, validationSchema: projectSchemaStep1 }, { fields: projectStep2, validationSchema: projectSchemaStep2 }, { fields: projectStep3, validationSchema: projectSchemaStep3 }, { fields: projectStep4, validationSchema: projectSchemaStep4 }]}
                />
            </Modal>
            <Modal visible={editVisible} setVisible={setEditVisible}>
                <MultiStepsEditElement
                    item={selectedItem}
                    handleSubmit={handleEditItem}
                    title="مشروع"
                    steps={[{ fields: projectStep1, validationSchema: projectSchemaStep1 }, { fields: projectStep2, validationSchema: projectSchemaStep2 }, { fields: projectStep3, validationSchema: projectSchemaStep3 }, { fields: projectStep4, validationSchema: projectSchemaStep4 }]}
                />
            </Modal>
            <Modal visible={deleteVisible} setVisible={setDeleteVisible}>
                <DeleteElement
                    item={selectedItem}
                    title="مشروع"
                    handleSubmit={handleDeleteItem}
                />
            </Modal>
            <MultiSectionLayout
                
                hasSection={false}
            >
                   
                <div className={classes.filterSection} id="scroll">
                    <div className={classes.groupedActions}>
                        <TextField
                            variant="outlined"
                            label="العنوان"
                            className={classes.input}
                            onChange={(e) => setResearch(e.target.value)}
                        />
                        {/* <FormControl  variant="outlined" className={classes.select}>
                                <InputLabel id="demo-simple-select-outlined-label">نوع المشروع</InputLabel>
                                <Select
                                    label="نوع المشروع"
                                >   
                                </Select>
                            </FormControl> */}
                        {/* <Button className={classes.searchButton} onClick={() => handleResearch()}>
                                <SearchIcon className={`${classes.searchIcon} ${classes.right}`} />
                            </Button> */}
                    </div>
                    <div className={classes.buttonSection}>
                        <Button className={classes.addButton} onClick={() => setAddVisible(true)}>
                            <span className={classes.text}>أضف مشروع</span>
                            <AddIcon className={classes.addIcon} />
                        </Button>
                    </div>

                </div>
                {
                    error ?(
                        error.response && error.response.status===500?(
                            <Error500 />
                        ):(
                            
                                <ErrorUnreachable />
                            

                        )

                    
                ):
                    isLoading === false && data?.projects.length == 0 ? (
                        <EmptyList />
                    ) : (
                        <div className={classes.tableContainer}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.cellHeader} align="center">تاريخ البدأ</TableCell>
                                        <TableCell className={classes.cellHeader} align="left">المشروع</TableCell>
                                        <Hidden only="xs"><TableCell className={classes.cellHeader} align="center">المؤسسة</TableCell></Hidden>
                                        <TableCell className={classes.cellHeader} align="center">الحالة </TableCell>
                                        <TableCell className={classes.cellHeader} align="center">إجراأت</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className={classes.tableBody}>

                                    {isLoading ? (
                                        <>
                                            {

                                                new Array(limit).fill("").map((el, index) => (
                                                    <TableRow key={index} style={{ height: 80 }}>
                                                        <TableCell className={classes.cellBody} align="center">
                                                            <Skeleton animation="wave" variant="rect" />
                                                        </TableCell>
                                                        <TableCell
                                                            className={`${classes.cellBody} ${classes.title}`}
                                                            align="left"
                                                        >
                                                            <Skeleton animation="wave" variant="rect" />
                                                        </TableCell>
                                                        <Hidden only="xs">
                                                            <TableCell className={classes.cellBody} align="center">
                                                                <Skeleton animation="wave" variant="rect" />
                                                            </TableCell>
                                                        </Hidden>
                                                        <TableCell className={classes.cellBody} align="center">
                                                            <Skeleton animation="wave" variant="rect" />
                                                        </TableCell>
                                                        <TableCell className={classes.cellBody} align="center">
                                                            <Skeleton animation="wave" variant="rect" />
                                                        </TableCell>
                                                    </TableRow>

                                                ))
                                            }
                                        </>
                                    ) : (
                                        <>
                                            {data?.projects.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className={classes.cellBody} align="center">
                                                        {row.startDate ? format(new Date(row.startDate),"dd MMMM yyyy",{locale:arLocale }) : ""}</TableCell>
                                                    <TableCell className={`${classes.cellBody} ${classes.title}`} align="left"><Link href={`/researcher/account/projects/${row.id}`}>{row.arabicTitle}</Link></TableCell>
                                                    <Hidden only="xs"><TableCell className={classes.cellBody} align="center">{row.center}</TableCell></Hidden>
                                                    <TableCell className={classes.cellBody} align="center">{getStatus(row)}</TableCell>
                                                    <TableCell className={classes.cellBody} align="center">

                                                        <IconButton onClick={() => { setSelectedItem(row); setEditVisible(true) }}>
                                                            <EditIcon className={classes.downloadIcon} />
                                                        </IconButton>
                                                        <IconButton onClick={() => { setSelectedItem(row); setDeleteVisible(true) }}>
                                                            <DeleteIcon className={classes.downloadIcon} />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </>
                                    )}
                                </TableBody>
                            </Table>

                            {data && data.maxPages > 1 && (
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <Pagination
                                        active={page}
                                        limit={limit}
                                        pages={data.maxPages}
                                        onNext={() => { setOffset(offset + 10) }}
                                        onPrev={() => { setOffset(offset - 10) }}
                                        onNum={setOffset}
                                    />
                                </div>
                            )}
                        </div>

                    )
                }
            </MultiSectionLayout>

        </ResearcherAccountLayout>
    )
}
export default ResearcherAccountProjectsPage;