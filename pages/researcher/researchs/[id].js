import classes from "../../../styles/MyPosts.module.css";
import axios from "axios";
import ResearcherLayout from "../../../layouts/ResearcherLayout/ResearcherLayout";
import MyHead from "../../../components/MyHead/MyHead";
import ResearchView from "../../../components/ResearchView/ResearchView";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MultiSectionLayout from "../../../layouts/MultiSectionLayout/MultiSectionLayout";




export async function getServerSideProps(context) {
  let research =null
  console.log(context)
  await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/postByid?id=${context.params.id}`,
        withCredentials:true
      })
        .then((response) => {
            research = response.data
        })
        .catch((error) => console.log(error));
  return {
    props: {
      research,
      ...await serverSideTranslations(context.locale, ["sidebar"]),
    },
  }
}

export default function research({research}) {
  return (
    <ResearcherLayout>
      
        <MultiSectionLayout
          
        >

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
        </MultiSectionLayout>
              
    </ResearcherLayout>
  );
}
