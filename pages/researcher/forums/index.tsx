import React from 'react'
import MyHead from '../../../components/MyHead/MyHead'
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps} from 'next'


export const getStaticProps:GetStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale||"ar", ["sidebar"]),
    },
  })
const ResearcherAccountForums:React.FC=()=> {
    return (
        <ResearcherLayout>
            <MyHead title="منتدى النقاشات" />
            <WorkInProgress menu="منتدى النقاشات"/>
        </ResearcherLayout>
    )
}

export default ResearcherAccountForums;


