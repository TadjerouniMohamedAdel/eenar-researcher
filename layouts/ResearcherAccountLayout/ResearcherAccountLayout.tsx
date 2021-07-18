import React from 'react'
import { useSelector } from 'react-redux'
import AccountBanner from '../../components/AcconutBanner/AccountBanner'
import AccountTab from '../../components/AccountTab/AccountTab'
import { RootState } from '../../redux/store2'
import { LayoutProps } from '../../utils/types/types'
import ResearcherLayout from '../ResearcherLayout/ResearcherLayout'

const  ResearcherAccountLayout:React.FC<LayoutProps> = ({children})=> {
    const user = useSelector((state:RootState) => state.user)
    return (
        <ResearcherLayout>
                <AccountBanner user={user} />
                <AccountTab />
                {children}
            </ResearcherLayout>
    )
}

export default ResearcherAccountLayout;