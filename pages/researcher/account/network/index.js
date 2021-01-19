import React from 'react'
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkInProgress from '../../../../components/WorkInProgress/WorkInProgress'
export default function index() {
    return (
        <ResearcherAccountLayout>
            <WorkInProgress menu="شبكتي"/>
        </ResearcherAccountLayout>
    )
}
