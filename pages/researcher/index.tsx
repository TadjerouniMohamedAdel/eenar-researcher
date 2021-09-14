import React from 'react'
import MyHead from '../../components/MyHead/MyHead'
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../layouts/ResearcherLayout/ResearcherLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetServerSideProps, GetStaticProps } from 'next'
import axios  from 'axios'
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
const ReseacherMainPage:React.FC=()=> {
    return (
        <ResearcherLayout>
            <MyHead title="الواجهة الرئيسية" />
            <WorkInProgress menu="الواجهة الرئيسية"/>
        </ResearcherLayout>
    )
}
export default ReseacherMainPage