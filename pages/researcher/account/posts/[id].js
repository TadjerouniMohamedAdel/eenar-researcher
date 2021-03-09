import { useState, useEffect } from "react";
import { datagroups, dataarticles } from "../../../../utils/fixtures/DevData";
import MyHead from "../../../../components/MyHead/MyHead";
import classes from "../../../../styles/MyPosts.module.css";
import LearnNow from "../../../../components/LearnNow/LearnNow";
import LastArticles from "../../../../components/LastArticles/LastArticles";
import MyGroups from "../../../../components/MyGroups/MyGroups";
import axios from "axios";
import moment from "moment";
import ResearcherLayout from "../../../../layouts/ResearcherLayout/ResearcherLayout";
import ResearchView from "../../../../components/ResearchView/ResearchView";
import ResearchViewSkeleton from "../../../../components/ResearchView/ResearchViewSkeleton";

export default function post() {
  const [articles, setArticles] = useState(dataarticles);
  const [groups, setGroups] = useState(datagroups);
  const [isLoading,setIsLoading] = useState(true)
  moment.locale("ar-dz");

  useEffect(() => {
  },[])

  return (
    <ResearcherLayout>
      <MyHead title="الملف الشخصي  - منشوراتي" />
      <div className={classes.myPostsContainer}>
        <div className={classes.mainSection}>
              {
                isLoading
                ?
                <ResearchViewSkeleton />
                :
                <ResearchView />
              }
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
