import React from 'react'
import MyHead from '../../components/MyHead/MyHead'
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../layouts/ResearcherLayout/ResearcherLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ["sidebar"]),
    },
  })

export default function ReseacherDashboard() {
    return (
        <ResearcherLayout>
            <MyHead title="الواجهة الرئيسية" />
            <WorkInProgress menu="الواجهة الرئيسية"/>
        </ResearcherLayout>
    )
}
