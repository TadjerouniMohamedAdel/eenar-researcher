import React from 'react'
import AccountBanner from '../../components/AcconutBanner/AccountBanner'
import AccountTab from '../../components/AccountTab/AccountTab'
import ResearcherLayout from '../ResearcherLayout/ResearcherLayout'

export default function ResearcherAccountLayout(props) {
    return (
        <ResearcherLayout>
                <AccountBanner />
                <AccountTab />
                {props.children}
            </ResearcherLayout>
    )
}
