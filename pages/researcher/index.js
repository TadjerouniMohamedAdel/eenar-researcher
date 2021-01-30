import React from 'react'
import MyHead from '../../components/MyHead/MyHead'
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../layouts/ResearcherLayout/ResearcherLayout'

export default function ReseacherDashboard() {
    return (
        <ResearcherLayout>
            <MyHead title="الواجهة الرئيسية" />
            <WorkInProgress menu="الواجهة الرئيسية"/>
        </ResearcherLayout>
    )
}
