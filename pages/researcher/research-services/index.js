import React from 'react'
import MyHead from '../../../components/MyHead/MyHead'
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'

export default function index() {
    return (
        <ResearcherLayout>
            <MyHead title="الخدمات البحثية" />
            <WorkInProgress menu="الخدمات البحثية"/>
        </ResearcherLayout>
    )
}
