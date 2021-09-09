import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import { useSelector } from 'react-redux';
import AccountBanner from '../../../../components/AcconutBanner/AccountBanner';
import MyHead from '../../../../components/MyHead/MyHead';
import ResearcherLayout from '../../../../layouts/ResearcherLayout/ResearcherLayout';
import { RootState } from '../../../../redux/store2';
import axios from 'axios'

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        await axios({
            method: "get",
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/user`,
            withCredentials: true,
            headers: { Cookie: context.req.headers.cookie }
        })
        return {
            
            props: {
                ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            },
            props: {
                ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
            }
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