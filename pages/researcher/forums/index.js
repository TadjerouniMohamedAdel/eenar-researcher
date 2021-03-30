import React from 'react'
import MyHead from '../../../components/MyHead/MyHead'
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ["sidebar"]),
    },
  })
export default function index() {
    return (
        <ResearcherLayout>
            <MyHead title="منتدى النقاشات" />
            <WorkInProgress menu="منتدى النقاشات"/>
        </ResearcherLayout>
    )
}
