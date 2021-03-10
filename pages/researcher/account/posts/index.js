import { useState, useEffect } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import ResearcherAccountLayout from "../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout";
import { datagroups, dataarticles } from "../../../../utils/fixtures/DevData";
import MyHead from "../../../../components/MyHead/MyHead";
import classes from "../../../../styles/MyPosts.module.css";
import LearnNow from "../../../../components/LearnNow/LearnNow";
import LastArticles from "../../../../components/LastArticles/LastArticles";
import MyGroups from "../../../../components/MyGroups/MyGroups";
import SearchIcon from "@material-ui/icons/Search";
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
import axios from "axios";
import Pagination from "../../../../components/Pagination/Pagination";
import Link from "next/link";
import moment from "moment";

export default function index() {
  const [articles, setArticles] = useState(dataarticles);
  const [groups, setGroups] = useState(datagroups);
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  moment.locale("ar-dz");

  useEffect(() => {
    const user = JSON.parse(
      JSON.parse(localStorage.getItem("persist:primary")).user
    );
    axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/post?researcherId=${user.researchers.id}`,
    })
      .then((response) => {
        setIsLoading(false)
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteItem = (item) => {
    const user = JSON.parse(
      JSON.parse(localStorage.getItem("persist:primary")).user
    );
    item.researcherId = user.researchers.id;
    console.log("delete post", item);
    axios({
      method: "delete",
      url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/post/delete?id=${item.id}`,
      data: item,
    })
      .then((response) => {
        console.log(response);
        setPosts(posts.filter((el) => el.id !== item.id));
        setDeleteVisible(false);
      })
      .catch((error) => console.log(error));
  };
  const handleAddItem = (item) => {
    const user = JSON.parse(
      JSON.parse(localStorage.getItem("persist:primary")).user
    );
    item.researcherId = user.researchers.id;
    let data = new FormData();
    for (const key in item) {
      data.append([key], item[key]);
    }
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/post/add`,
      data,
    })
      .then((response) => {
        console.log("response add", response.data);
        setPosts([...posts, response.data]);
        setAddVisible(false);
      })
      .catch((error) => console.log(error));
  };
  const handleEditItem = (item) => {
    const user = JSON.parse(
      JSON.parse(localStorage.getItem("persist:primary")).user
    );
    item.researcherId = user.researchers.id;
    console.log("edit post", item);
    let data = new FormData();
    for (const key in item) {
      data.append([key], item[key]);
    }
    axios({
      method: "put",
      url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/post/edit`,
      data,
    })
      .then((response) => {
        console.log(response);
        let lastItems = [...posts];
        const index = lastItems.findIndex((el) => el.id === item.id);
        lastItems[index] = item;
        setPosts(lastItems);
        setEditVisible(false);
        setSelectedItem(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - منشوراتي" />
      <div className={classes.myPostsContainer}>
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
        <div className={classes.mainSection}>
          <div className={classes.filterSection}>
            <div className={classes.groupedActions}>
              <TextField
                variant="outlined"
                label="العنوان"
                className={classes.input}
              />
              {/* <FormControl  variant="outlined" className={classes.select}>
                                <InputLabel id="demo-simple-select-outlined-label">نوع المنشور</InputLabel>
                                <Select
                                    label="نوع المنشور"
                                >   
                                </Select>
                            </FormControl> */}
              <Button className={classes.searchButton}>
                <SearchIcon
                  className={`${classes.searchIcon} ${classes.right}`}
                />
              </Button>
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
          {isLoading === false && posts.length == 0 ? (
            <div className={classes.empty}>
              <img src="/images/empty.png" alt="empty-list" />
              <h3>لا تحتوي هذه القائمة على بيانات</h3>
            </div>
          ) : (
            <div className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
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
                    <TableCell className={classes.cellHeader} align="center">
                      إجراأت
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                  {isLoading ? (
                    <>
                    <TableRow>
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
                    </TableRow>
                    <TableRow>
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
                  </TableRow>
                  </>
                  ) : (
                    <>
                      {posts.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            className={classes.cellBody}
                            align="center"
                          >
                            {moment(row.publishedDate).format("DD MMM YYYY")}
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
              {posts.length > 10 && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Pagination />
                </div>
              )}
            </div>
          )}
        </div>
        <div className={classes.sideSection}>
          <LearnNow />
          <LastArticles articles={articles} />
          <MyGroups groups={groups} />
        </div>
      </div>
    </ResearcherAccountLayout>
  );
}
