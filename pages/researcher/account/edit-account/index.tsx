import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import { useSelector } from 'react-redux';
import AccountBanner from '../../../../components/AcconutBanner/AccountBanner';
import MyHead from '../../../../components/MyHead/MyHead';
import ResearcherLayout from '../../../../layouts/ResearcherLayout/ResearcherLayout';
import { RootState } from '../../../../redux/store2';

export const getServerSideProps: GetServerSideProps = async (context) => {
        return {
            props: {
                ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
            }
        }

}
const ResearcherAccountEditAccountPage:NextPage = ()=> {
    const user = useSelector((state: RootState) => state.user)
    return (
        <ResearcherLayout>
            <MyHead title="الملف الشخصي  - تعديل الملف الشخصي" />
            <AccountBanner user={user} editable={true}/>
        </ResearcherLayout>
    )
}

export default ResearcherAccountEditAccountPage;