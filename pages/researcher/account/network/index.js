import { useState, useEffect } from 'react'
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkInProgress from '../../../../components/WorkInProgress/WorkInProgress'
import MyHead from '../../../../components/MyHead/MyHead'
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import InfiniteScroll from "react-infinite-scroll-component";
import classes from "../../../../styles/MyNetwork.module.css";
import LastArticles from "../../../../components/LastArticles/LastArticles";
import LearnNow from "../../../../components/LearnNow/LearnNow";
import MyGroups from "../../../../components/MyGroups/MyGroups";
import { dataarticles, datagroups } from "../../../../utils/fixtures/DevData";
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Hidden,
} from "@material-ui/core";
import GroupCard from '../../../../components/GroupCard/GroupCard';
import GroupCardSkeleton from '../../../../components/GroupCard/GroupCardSkeleton';

const groupsHardCoded = [
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "public", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "private", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "private", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "public", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "public", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "public", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "public", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "public", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "public", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "public", stats: { views: "7.3K", posts: "105", members: "139" } },
  { name: "المجموعة الفلانية", title: "كليفرزون ترحب بكم", privacy: "public", stats: { views: "7.3K", posts: "105", members: "139" } },
]
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GolfCourseSharp } from '@material-ui/icons';
import GroupCardList from '../../../../components/GroupCardList/GroupCardList';
import AddElement from '../../../../components/CrudModal/AddElement';
import { groupSchema } from '../../../../utils/Validation/ValidationObjects';
import Modal from '../../../../components/Modal/Modal';
import { groupFields } from '../../../../utils/form/Fields';



export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})

export default function index() {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [groups, setGroups] = useState([])
  const [articles, setArticles] = useState(dataarticles);
  const [sideGroups, setSideGroups] = useState(datagroups);
  const [hasMore, setHasMore] = useState(true)
  const [view, setView] = useState("grid")
  const [addVisible, setAddVisible] = useState(false);




  const getNextData = () => {
    if (groups.length < groupsHardCoded.length * 2) setGroups([...groups, ...groupsHardCoded])
  }

  useEffect(() => {
    getNextData()
  }, [])

  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - شبكتي" />
      <div className={classes.myNetworkContainer}>
        <Modal visible={addVisible} setVisible={setAddVisible}>
          <AddElement
            title="مجموعة"
            validationSchema={groupSchema}
            fields={groupFields}
            handleSubmit={() => { setAddVisible(false)}}
          />

        </Modal>
        <div className={classes.content}>
          <div className={classes.mainSection}>
            <div className={classes.filterSection}>
              <div className={classes.groupedActions}>
                <TextField
                  variant="outlined"
                  label="العنوان"
                  className={classes.input}
                />
              </div>
              <div className={classes.buttonSection}>
                <div className={classes.viewChoices}>
                  <IconButton onClick={() => { setView("list") }}>
                    <ViewListRoundedIcon />
                  </IconButton>
                  <IconButton onClick={() => { setView("grid") }}>
                    <ViewComfyRoundedIcon />
                  </IconButton>
                </div>
                <Button
                  className={classes.addButton}
                  onClick={() => { setAddVisible(true) }}
                >
                  <span className={classes.text}>أضف مجموعة</span>
                  <AddIcon className={classes.addIcon} />
                </Button>
              </div>
            </div>
            {
              view === "grid" ? (
                <div id="scrollableDivResearchs" className={classes.scrollableDivResearchs}>
                  <InfiniteScroll
                    dataLength={groups.length}
                    className={classes.groupsContainer}
                    next={getNextData}
                    inverse={false}
                    hasMore={hasMore}
                    loader={<GroupCardSkeleton />}
                  >
                    {groups.map((group, id) => (
                      <GroupCard key={`group-card-${id}`} group={group} />
                    ))}
                  </InfiniteScroll>
                </div>

              ) : (
                <div id="scrollableDivResearchs" className={classes.scrollableDivResearchs}>
                  {
                    groups.map((group, index) => (
                      <GroupCardList group={group} key={`group-${index}`} />
                    ))
                  }
                </div>
              )
            }
          </div>
          <div className={classes.sideSection}>
            <LearnNow />
            <LastArticles articles={articles} />
            <MyGroups groups={sideGroups} />
          </div>
        </div>
      </div>
    </ResearcherAccountLayout>
  )
}
