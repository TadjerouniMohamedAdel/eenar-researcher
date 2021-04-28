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
import EditElement from '../../../../components/CrudModal/EditElement';
import DeleteElement from '../../../../components/CrudModal/DeleteElement';
import { groupSchema } from '../../../../utils/Validation/ValidationObjects';
import Modal from '../../../../components/Modal/Modal';
import { groupFields } from '../../../../utils/form/Fields';
import { useSelector } from 'react-redux'
import useGetList from '../../../../utils/hooks/useGetList';
import useAddElement from '../../../../utils/hooks/useAddElement';
import Pagination from '../../../../components/Pagination/Pagination';



export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})

export default function index() {
  const user = useSelector((state) => state.user)
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [articles, setArticles] = useState(dataarticles);
  const [sideGroups, setSideGroups] = useState(datagroups);
  const [hasMore, setHasMore] = useState(true)
  const [view, setView] = useState("grid")
  const [addVisible, setAddVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)
  const [search, setSearch] = useState("")
  const [groups, setGroups] = useState([])
  const { isLoading, data } = useGetList("groups", `/groups/all`, limit, offset, search, user.researchers.id)
  const { mutate: addElement, status: addElementStatus } = useAddElement("groups", `/groups/add`, limit, offset, search, user.researchers.id)
  const [page, setPage] = useState(1)



  useEffect(() => {
    if (data && view=="grid") {
      setGroups([...groups, ...data.groups])
      data.groups.length === 0 && setHasMore(false)
    }
  }, [data])

  useEffect(() => {
    setOffset(0)
  }, [view])

  useEffect(() => {
    if (addElementStatus === "success") {
      setAddVisible(false)
    }
  }, [addElementStatus])

  useEffect(() => {
    setPage(offset / limit + 1)
  }, [offset]);

  const handleAddItem = (data) => {
    data.createdBy = user.id
    addElement(data)
  }


  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - شبكتي" />
      <div className={classes.myNetworkContainer}>
        <Modal visible={addVisible} setVisible={setAddVisible}>
          <AddElement
            title="مجموعة"
            validationSchema={groupSchema}
            fields={groupFields}
            handleSubmit={handleAddItem}
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
                <div className={classes.viewChoices} id="scroll">
                  <IconButton onClick={() => { setView("list") }} disabled={view === "list"}>
                    <ViewListRoundedIcon />
                  </IconButton>
                  <IconButton onClick={() => { setView("grid") }} disabled={view === "grid"}>
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
                    next={() => setOffset(offset + 10)}
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
                    !isLoading &&
                    (
                      <>
                      {
                        data.groups.map((group, index) => (
                          <GroupCardList group={group} key={`group-${index}`} />
                        ))
                      }
                       {data && data.maxPages > 1 && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  >
                    <Pagination
                      active={page}
                      limit={limit}
                      pages={data.maxPages}
                      onNext={() => { setOffset(offset + 10) }}
                      onPrev={() => { setOffset(offset - 10) }}
                      onNum={setOffset}
                    />

                  </div>
                  )}
                      </>
                    )
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
