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
import {useRouter} from 'next/router'

export default function post() {
  const [articles, setArticles] = useState(dataarticles);
  const [groups, setGroups] = useState(datagroups);
  const [isLoading,setIsLoading] = useState(true)
  const [research,setResearch] = useState(null)
  const researchId = useRouter().query.id
  moment.locale("ar-dz");

  useEffect(() => {
    researchId && axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/postByid?id=${researchId}`,
    })
      .then((response) => {
        setResearch(response.data)
        setIsLoading(false)
        console.log("response add", response.data);
      })
      .catch((error) => console.log(error));
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
                <ResearchView  research={research}/>
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
