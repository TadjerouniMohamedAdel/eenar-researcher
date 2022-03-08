import React from "react";
import ResearcherAccountLayout from "../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout";
import MyHead from "../../../../components/MyHead/MyHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PostWriter from "../../../../components/PostWriter/PostWriter";
import PostViewer from "../../../../components/PostViewer/PostViewer";
import MultiSectionLayout from "../../../../layouts/MultiSectionLayout/MultiSectionLayout";
import { GetServerSideProps, GetStaticProps } from "next";
import axios from "axios";
import WorkInProgress from "../../../../components/WorkInProgress/WorkInProgress";

const posts = [
    {
        images: [],
        content:
            "https://www.youtube.com/watch?v=E-znxPIeTOE لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على .",
        keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
    },
    {
        images: [],
        content:
            "لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على . https://app.zeplin.io/project/5fcfab653cb9004a0bbf267e/screen/5fe5211dc4783e9cf2e1e678",
        keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
    },
    {
        images: ["sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd"],
        content:
            "لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على .",
        keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
    },
];

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        await axios({
            method: "get",
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/user`,
            withCredentials: true,
            headers: { Cookie: context.req.headers.cookie },
        });
        return {
            props: {
                ...(await serverSideTranslations(context.locale || "ar", ["sidebar"])),
            },
        };
    } catch (error) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
            props: {
                ...(await serverSideTranslations(context.locale || "ar", ["sidebar"])),
            },
        };
    }
};

const ResearcherAccountWallPage: React.FC = () => {
    return (
        <ResearcherAccountLayout>
            <MyHead title="الملف الشخصي  - الحائط" />
            <MultiSectionLayout>
                <PostWriter />
                <PostViewer post={posts[0]} />
                <PostViewer post={posts[1]} />
                <PostViewer post={posts[2]} />
                {/* <WorkInProgress menu="الحائط" /> */}
            </MultiSectionLayout>
        </ResearcherAccountLayout>
    );
};
export default ResearcherAccountWallPage;
