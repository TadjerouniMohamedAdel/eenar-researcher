import React from 'react'
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'

export default function index() {
    return (
        <ResearcherLayout>
            <WorkInProgress menu="الرسائل"/>
        </ResearcherLayout>
    )
}
