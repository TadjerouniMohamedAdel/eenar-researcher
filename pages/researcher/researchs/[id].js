import { useState } from "react";
import classes from "../../../styles/MyPosts.module.css";
import axios from "axios";
import { dataarticles, datagroups } from "../../../utils/fixtures/DevData";
import ResearcherLayout from "../../../layouts/ResearcherLayout/ResearcherLayout";
import MyHead from "../../../components/MyHead/MyHead";
import LearnNow from "../../../components/LearnNow/LearnNow";
import LastArticles from "../../../components/LastArticles/LastArticles";
import MyGroups from "../../../components/MyGroups/MyGroups";
import ResearchView from "../../../components/ResearchView/ResearchView";



export async function getStaticPaths() {
  let paths = []
  await  axios({
              method: "get",
              url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/post/all`,
      })
      .then((response) => {
         paths = response.data.map((item)=>{
              return {
                  params:{id:item.id.toString()}
              }
          })
      })
      .catch((error) => console.log(error));
  
  
    return {
      paths,
      fallback: 'blocking' // See the "fallback" section below
    };
}


export async function getStaticProps(context) {
  let research =null
  console.log(context)
  await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/postByid?id=${context.params.id}`,
      })
        .then((response) => {
            research = response.data
        })
        .catch((error) => console.log(error));
  return {
    props: {
      research,
    }, 
  }
}

export default function research({research}) {
  const [articles, setArticles] = useState(dataarticles);
  const [groups, setGroups] = useState(datagroups);
  return (
    <ResearcherLayout>
      <div className={classes.myPostsContainer}>
        <div className={classes.mainSection}>

              {research ?   (

                  <>
                      <MyHead title={`${research.arabicTitle}  - بحث`} />
                      <ResearchView  research={research}/> :
                  </>
              ):
              (
                <div className={classes.notFound}>
                  <MyHead title="بحث  - 404" />
                  <img src="/images/404.png" alt="" />
                  <h1>هذا البحث غير موجود</h1>
                </div>
              )}
              
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
