import React from 'react'
import { useSelector } from 'react-redux'
import AccountBanner from '../../components/AcconutBanner/AccountBanner'
import AccountTab from '../../components/AccountTab/AccountTab'
import ResearcherLayout from '../ResearcherLayout/ResearcherLayout'

export default function ResearcherAccountLayout(props) {
    const user = useSelector((state) => state.user)
    return (
        <ResearcherLayout>
                <AccountBanner user={user} />
                <AccountTab />
                {props.children}
            </ResearcherLayout>
    )
}
