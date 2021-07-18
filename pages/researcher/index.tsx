import React from 'react'
import MyHead from '../../components/MyHead/MyHead'
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../layouts/ResearcherLayout/ResearcherLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'
export const getStaticProps:GetStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale||"ar", ["sidebar"]),
    },
  })

const ReseacherMainPage:React.FC=()=> {
    return (
        <ResearcherLayout>
            <MyHead title="الواجهة الرئيسية" />
            <WorkInProgress menu="الواجهة الرئيسية"/>
        </ResearcherLayout>
    )
}
export default ReseacherMainPage