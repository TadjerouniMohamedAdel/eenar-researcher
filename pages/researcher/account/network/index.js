import React from 'react'
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkInProgress from '../../../../components/WorkInProgress/WorkInProgress'
import MyHead from '../../../../components/MyHead/MyHead'
export default function index() {
    return (
        <ResearcherAccountLayout>
            <MyHead title="الملف الشخصي  - شبكتي" />
            <WorkInProgress menu="شبكتي"/>
        </ResearcherAccountLayout>
    )
}
