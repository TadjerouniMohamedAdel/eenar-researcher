import { useState, useEffect } from "react";
import { datagroups, dataarticles } from "../../../../utils/fixtures/DevData";
import MyHead from "../../../../components/MyHead/MyHead";
import classes from "../../../../styles/MyPosts.module.css";
import LearnNow from "../../../../components/LearnNow/LearnNow";
import LastArticles from "../../../../components/LastArticles/LastArticles";
import MyGroups from "../../../../components/MyGroups/MyGroups";
import Modal from "../../../../components/Modal/Modal";
import MultiStepsAddElement from "../../../../components/CrudModal/MultiStepsAddElement";
import { postStep1, postStep2 } from "../.././../../utils/form/Fields";
import {
  postSchemaStep1,
  postSchemaStep2,
} from "../.././../../utils/Validation/ValidationObjects";

import DeleteElement from "../../../../components/CrudModal/DeleteElement";
import MultiStepsEditElement from "../../../../components/CrudModal/MultiStepsEditElement";
import axios from "axios";
import moment from "moment";
import ResearcherLayout from "../../../../layouts/ResearcherLayout/ResearcherLayout";
import ResearchView from "../../../../components/ResearchView/ResearchView";

export default function post() {
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
    <ResearcherLayout>
      <MyHead title="الملف الشخصي  - منشوراتي" />
      <div className={classes.myPostsContainer}>
        <div className={classes.mainSection}>
            <ResearchView />
        </div>
        <div className={classes.sideSection}>
          <LearnNow />
          <LastArticles articles={articles} />
          <MyGroups groups={groups} />
        </div>
      </div>
    </ResearcherLayout>
  );
}
