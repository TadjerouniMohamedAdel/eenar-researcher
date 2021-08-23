import MyHead from "../../../../components/MyHead/MyHead";
import classes from "../../../../styles/MyPosts.module.css";
import axios from "axios";
import ResearcherLayout from "../../../../layouts/ResearcherLayout/ResearcherLayout";
import ResearchView from "../../../../components/ResearchView/ResearchView";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MultiSectionLayout from "../../../../layouts/MultiSectionLayout/MultiSectionLayout";
import { GetServerSideProps } from "next";
import { ResearchPost } from "../../../../utils/types/types";


export const getServerSideProps:GetServerSideProps = async (context)=> {
  let research =null
  await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/postByid?id=${context.params?.id}`,
        withCredentials:true,
        headers:{
          Cookie: context.req.headers.cookie
        } 
      })
        .then((response) => {
            research = response.data
        })
        .catch((error) => console.log(error));
  return {
    props: {
      research,
      ...await serverSideTranslations(context.locale||"ar", ["sidebar"]),
    },
  }
}

const ResearcherAccountPostItemPage:React.FC<{research:ResearchPost}> = ({research})=> {
  console.log("research",research)
  return (
    <ResearcherLayout>
      <MyHead title={`${research.arabicTitle}   - منشوراتي`} />

          <MultiSectionLayout
            
            >
              {research ?   <ResearchView  research={research}/> :
                  (
                    <div className={classes.notFound}>
                      <img src="/images/404.png" alt="" />
                      <h1>هذا المنشور غير موجود</h1>
                    </div>
              )}
          </MultiSectionLayout>
              
        
    </ResearcherLayout>
  );
}

export default ResearcherAccountPostItemPage;