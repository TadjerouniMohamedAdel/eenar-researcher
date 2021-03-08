import { useState, useEffect } from "react";
import { datagroups, dataarticles } from "../../../../utils/fixtures/DevData";
import MyHead from "../../../../components/MyHead/MyHead";
import classes from "../../../../styles/MyProjects.module.css";
import LearnNow from "../../../../components/LearnNow/LearnNow";
import LastArticles from "../../../../components/LastArticles/LastArticles";
import MyGroups from "../../../../components/MyGroups/MyGroups";
import axios from "axios";
import moment from "moment";
import ResearcherLayout from "../../../../layouts/ResearcherLayout/ResearcherLayout";
import ResearchView from "../../../../components/ResearchView/ResearchView";

export default function post() {
  const [articles, setArticles] = useState(dataarticles);
  const [groups, setGroups] = useState(datagroups);
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
  return (
    <ResearcherLayout>
      <MyHead title="الملف الشخصي  - منشوراتي" />
      <div className={classes.myProjectsContainer}>
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
