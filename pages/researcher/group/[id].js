import { useState } from 'react'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutGroup from "../../../components/AboutGroup/AboutGroup";
import BadgesCard from "../../../components/BadgesCard/BadgesCard";
import GroupBanner from "../../../components/GroupBanner/GroupBanner";
import LastArticles from "../../../components/LastArticles/LastArticles";
import LearnNow from "../../../components/LearnNow/LearnNow";
import MyGroups from "../../../components/MyGroups/MyGroups";
import MyHead from "../../../components/MyHead/MyHead";
import MyNetwork from "../../../components/MyNetwork/MyNetwork";
import ResearcherLayout from "../../../layouts/ResearcherLayout/ResearcherLayout";
import classes from '../../../styles/GroupItem.module.css'
import { dataarticles, datagroups, datausers } from "../../../utils/fixtures/DevData";
import PostWriter from '../../../components/PostWriter/PostWriter';
import PostViewer from '../../../components/PostViewer/PostViewer';

const posts = [
  {
    images:[],
    content:"https://www.youtube.com/watch?v=E-znxPIeTOE لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على .",
    keywords:["keyword 1","keyword 2","keyword 3","keyword 4"],
  },
  {
    images:[],
    content:"لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على . https://app.zeplin.io/project/5fcfab653cb9004a0bbf267e/screen/5fe5211dc4783e9cf2e1e678",
    keywords:["keyword 1","keyword 2","keyword 3","keyword 4"],
  },
  {
    images:["sdfsdsd","sdfsdsd","sdfsdsd","sdfsdsd","sdfsdsd","sdfsdsd","sdfsdsd"],
    content:"لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على .",
    keywords:["keyword 1","keyword 2","keyword 3","keyword 4"],
  },

]
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  return {
    props: {
      ...await serverSideTranslations(context.locale, ["sidebar"]),
    },
  }
}
export default function GroupItem() {
  const [aboutGroup, setAboutGroup] = useState([])
  const [badges, setBadges] = useState([])
  const [users, setUsers] = useState(datausers)
  const [articles, setArticles] = useState(dataarticles)
  const [groups, setGroups] = useState(datagroups)

  return (
    <ResearcherLayout>
      <GroupBanner />
      <MyHead title="المجموعات  - المجموعة الفلانية" />
      <div className={classes.groupItemContainer}>

        <div className={classes.sideSection}>
          <AboutGroup aboutGroup={aboutGroup} />
          <BadgesCard badges={badges} />
          <MyNetwork users={users} />
        </div>

        <div className={classes.mainSection}>
            <PostWriter />
            <PostViewer post={posts[0]}/>
            <PostViewer post={posts[1]}/>
            <PostViewer post={posts[2]}/>
        </div>
        <div className={classes.sideSection}>
          <LearnNow />
          <LastArticles articles={articles} />
          <MyGroups groups={groups} />
        </div>
      </div>
        </ResearcherLayout>
    )
}
