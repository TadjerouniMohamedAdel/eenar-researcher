import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import { useState,useEffect } from 'react'
import MyHead from '../../../../components/MyHead/MyHead'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AboutGroup from '../../../../components/AboutGroup/AboutGroup'
import BadgesCard from '../../../../components/BadgesCard/BadgesCard'
import MyNetwork from '../../../../components/MyNetwork/MyNetwork'
import PostWriter from '../../../../components/PostWriter/PostWriter'
import PostViewer from '../../../../components/PostViewer/PostViewer'
import LearnNow from '../../../../components/LearnNow/LearnNow'
import LastArticles from '../../../../components/LastArticles/LastArticles'
import MyGroups from '../../../../components/MyGroups/MyGroups'
import { dataarticles, datagroups, datausers } from '../../../../utils/fixtures/DevData'
import classes from '../../../../styles/GroupItem.module.css'
import AboutMe from '../../../../components/AboutMe/AboutMe'
const posts = [
  {
    images: [],
    content: "https://www.youtube.com/watch?v=E-znxPIeTOE لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على .",
    keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
  },
  {
    images: [],
    content: "لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على . https://app.zeplin.io/project/5fcfab653cb9004a0bbf267e/screen/5fe5211dc4783e9cf2e1e678",
    keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
  },
  {
    images: ["sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd"],
    content: "لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على .",
    keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
  },

]

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})

export default function index() {
  const [users, setUsers] = useState(datausers)
  const [articles, setArticles] = useState(dataarticles)
  const [groups, setGroups] = useState(datagroups)
  const [badges, setBadges] = useState([])
  const [aboutGroup, setAboutGroup] = useState([])
  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - الحائط" />
      <div className={classes.groupItemContainer}>
        <div className={classes.sideSection}>
          <AboutMe aboutme={aboutGroup} />
          
          <BadgesCard badges={badges} />
          <MyNetwork users={users} />
        </div>

        <div className={classes.mainSection}>
          <PostWriter />
          <PostViewer post={posts[0]} />
          <PostViewer post={posts[1]} />
          <PostViewer post={posts[2]} />
        </div>
        <div className={classes.sideSection}>
          <LearnNow />
          <LastArticles articles={articles} />
          <MyGroups groups={groups} />
        </div>
      </div>
    </ResearcherAccountLayout>
  )
}
