import React,{ useState, useEffect } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import ResearcherAccountLayout from "../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout";
import MyHead from "../../../../components/MyHead/MyHead";
import classes from "../../../../styles/MyPosts.module.css";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Hidden,
  Chip,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "../../../../components/Modal/Modal";
import MultiStepsAddElement from "../../../../components/CrudModal/MultiStepsAddElement";
import { postStep1, postStep2 } from "../.././../../utils/form/Fields";
import {
  postSchemaStep1,
  postSchemaStep2,
} from "../.././../../utils/Validation/ValidationObjects";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteElement from "../../../../components/CrudModal/DeleteElement";
import MultiStepsEditElement from "../../../../components/CrudModal/MultiStepsEditElement";
import Pagination from "../../../../components/Pagination/Pagination";
import Link from "next/link";
import { format} from 'date-fns'
import arLocale  from 'date-fns/locale/ar-DZ'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Alert from '@material-ui/lab/Alert';

import { useSelector } from 'react-redux'
import useGetList from "../../../../utils/hooks/useGetList";
import useAddElement from "../../../../utils/hooks/useAddElement";
import useEditElement from "../../../../utils/hooks/useEditElement";
import useDeleteElement from "../../../../utils/hooks/useDeleteElement";
import MultiSectionLayout from "../../../../layouts/MultiSectionLayout/MultiSectionLayout";
import EmptyList from "../../../../components/EmptyList/EmptyList";
import ErrorUnreachable from "../../../../components/ErrorUnreachable/ErrorUnreachable";
import Error500 from "../../../../components/Error500/Error500";
import { GetServerSideProps, GetStaticProps } from "next";
import { RootState } from "../../../../redux/store2";
import { NotDefineYet, ResearchPost } from "../../../../utils/types/types";
import axios from  'axios'

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
      await axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_API_URL}/user/user`,
          withCredentials: true,
          headers: { Cookie: context.req.headers.cookie }
      })
      return {
          
          props: {
              ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
          }
      }
  } catch (error) {
      return {
          redirect: {
              destination: "/login",
              permanent: false
          },
          props: {
              ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
          }
      }
  }

}
const ResearcherAccountPostPage:React.FC = () => {
  const user = useSelector((state:RootState) => state.user)
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ResearchPost|null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [research, setResearch] = useState("")
  const [showAddAlert, setShowAddAlert] = useState(false)
  const { isLoading, data,error } = useGetList<{posts:ResearchPost[],maxPages:number}>("posts", "/researcher/post/research", limit, offset, research, user.researchers.id)
  const { mutate: addPost, status: addPostStatus } = useAddElement<ResearchPost>("posts", "/researcher/post/add", limit, offset, research, user.researchers.id)
  const { mutate: editPost, status: editPostStatus } = useEditElement<ResearchPost>("posts", "/researcher/post/edit", limit, offset, research, user.researchers.id)
  const { mutate: deletePost, status: deletePostStatus } = useDeleteElement("posts", `/researcher/post/delete?id=${selectedItem?.id}`, limit, offset, research, user.researchers.id)

  useEffect(() => {
    setOffset(0)
  }, [research])



  useEffect(() => {
    setPage(offset / limit + 1)
  }, [offset]);



  useEffect(() => {
    if (addPostStatus === "success") {
      setAddVisible(false)
    }
  }, [addPostStatus])

  useEffect(() => {
    if (editPostStatus === "success") {
      setEditVisible(false)
    }
  }, [editPostStatus])

  useEffect(() => {
    if (deletePostStatus === "success") {
      setDeleteVisible(false)
    }
  }, [deletePostStatus])



  const handleDeleteItem = (item:NotDefineYet) => {
    item.researcherId = user.researchers.id;
    deletePost(item)
  };


  const handleAddItem = (item:NotDefineYet) => {
    item.researcherId = user.researchers.id;
    let data = new FormData();
    for (const key in item) {
      data.append(key, item[key]);
    }
    addPost(data)
  };



  const handleEditItem = (item:NotDefineYet) => {
    
    item.researcherId = user.researchers.id;
    console.log("edit post", item);
    let data = new FormData();
    for (const key in item) {
      data.append(key, item[key]);
    }
    editPost(data)
  };


  const renderStatusBadge = (postStatus:NotDefineYet) => {
    if (!postStatus) return (<Chip className={classes.pendingBadge} variant="outlined" label="قيد الإنتظار" />)
    switch (postStatus.status) {
      case "assigned":
        return (<Chip className={classes.assignedBadge} variant="outlined" label="قيد المراجعة" />)
        break;
      case "rejected":
        return (<Chip className={classes.rejectedBadge} variant="outlined" label="مرفوض" />)
        break;
      case "validated":
        return (<Chip className={classes.validatedBadge} variant="outlined" label="مقبول" />)
        break;

      default:
        break;
    }
  }

  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - منشوراتي" />
      <Modal visible={addVisible} setVisible={setAddVisible}>
        <MultiStepsAddElement
          title="منشور"
          handleSubmit={handleAddItem}
          steps={[
            { fields: postStep1, validationSchema: postSchemaStep1 },
            { fields: postStep2, validationSchema: postSchemaStep2 },
          ]}
        />
      </Modal>
      <Modal visible={editVisible} setVisible={setEditVisible}>
        <MultiStepsEditElement
          item={selectedItem}
          handleSubmit={handleEditItem}
          title="منشور"
          steps={[
            { fields: postStep1, validationSchema: postSchemaStep1 },
            { fields: postStep2, validationSchema: postSchemaStep2 },
          ]}
        />
      </Modal>
      <Modal visible={deleteVisible} setVisible={setDeleteVisible}>
        <DeleteElement
          item={selectedItem}
          title="منشور"
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
              onChange={(e) => setResearch(e.target.value)}
              className={classes.input}
            />
            {/* <FormControl  variant="outlined" className={classes.select}>
                                <InputLabel id="demo-simple-select-outlined-label">نوع المنشور</InputLabel>
                                <Select
                                    label="نوع المنشور"
                                >   
                                </Select>
                            </FormControl> */}
            {/* <Button className={classes.searchButton} onClick={() => handleResearch()}>
                <SearchIcon
                  className={`${classes.searchIcon} ${classes.right}`}
                />
              </Button> */}
          </div>
          <div className={classes.buttonSection}>
            <Button
              className={classes.addButton}
              onClick={() => setAddVisible(true)}
            >
              <span className={classes.text}>أضف منشور</span>
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

        
    )
          : 
        isLoading === false && data?.posts.length == 0 ? (
          <EmptyList />
        ) : (
          <div className={classes.tableContainer}>
            {
              showAddAlert && (
                <Alert variant="filled" severity="info"  onClose={() => setShowAddAlert(false)}>
                  تم إضافة المنشور، سيتم دراسته لتحقق من صحته
                </Alert>

              )
            }
            <Table className={classes.table} aria-label="simple table" >
              <TableHead>
                <TableRow>
                  <TableCell className={classes.cellHeader} align="center">
                    تاريخ النشر
                    </TableCell>
                  <TableCell className={classes.cellHeader} align="left">
                    العنوان
                    </TableCell>
                  <Hidden only="xs">
                    <TableCell className={classes.cellHeader} align="center">
                      المؤلف
                      </TableCell>
                  </Hidden>
                  <Hidden only="xs">
                    <TableCell className={classes.cellHeader} align="center">
                      الحالة
                      </TableCell>
                  </Hidden>
                  <TableCell className={classes.cellHeader} align="center">
                    إجراأت
                    </TableCell>
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
                          <Hidden only="xs">
                            <TableCell className={classes.cellBody} align="center">
                              <Skeleton animation="wave" variant="rect" />
                            </TableCell>
                          </Hidden>
                          <TableCell className={classes.cellBody} align="center">
                            <Skeleton animation="wave" variant="rect" />
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </>
                ) : (
                  <>
                    {data?.posts.map((row, index) => (
                      <TableRow  style={{ height: 20 }} key={`row-${index}`}>
                        <TableCell
                          className={classes.cellBody}
                          align="center"
                        >
                          {format(new Date(row.publishedDate),"dd MMMM yyyy",{locale:arLocale })}
                        </TableCell>
                        <TableCell
                          className={`${classes.cellBody} ${classes.title}`}
                          align="left"
                        >
                          <Link href={`/researcher/account/posts/${row.id}`}>
                            {row.arabicTitle}
                          </Link>
                        </TableCell>
                        <Hidden only="xs">
                          <TableCell
                            className={classes.cellBody}
                            align="center"
                          >
                            {row.primaryAuthor}
                          </TableCell>
                        </Hidden>
                        <Hidden only="xs">
                          <TableCell
                            className={classes.cellBody}
                            align="center"
                          >
                            {renderStatusBadge(row.postStatus)}
                          </TableCell>
                        </Hidden>
                        <TableCell
                          className={classes.cellBody}
                          align="center"
                        >
                          <a href={row.file} target="_blank">
                            <IconButton>
                              <GetAppIcon className={classes.downloadIcon} />
                            </IconButton>
                          </a>
                          <IconButton
                            onClick={() => {
                              setSelectedItem(row);
                              setEditVisible(true);
                            }}
                          >
                            <EditIcon className={classes.downloadIcon} />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              setSelectedItem(row);
                              setDeleteVisible(true);
                            }}
                          >
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
        )}
      </MultiSectionLayout>


    </ResearcherAccountLayout>
  );
}
export default ResearcherAccountPostPage