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
      <MyHead title=" المجموعات  - السيرة الذاتية" />
      <div className={classes.groupItemContainer}>

        <div className={classes.sideSection}>
          <AboutGroup aboutGroup={aboutGroup} />
          <BadgesCard badges={badges} />
          <MyNetwork users={users} />
        </div>

        <div className={classes.mainSection}>
            <PostWriter />
            <PostViewer />
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
