import {useState ,useEffect} from 'react'
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
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
    {name:"المجموعة الفلانية",title:"كليفرزون ترحب بكم",stats:{views:"7.3K",posts:"105",members:"139"}},
]
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ["sidebar"]),
    },
  })

export default function index() {
    const [offset,setOffset] = useState(0)
    const [limit,setLimit] = useState(10)
    const [groups,setGroups] = useState([])
    const [articles, setArticles] = useState(dataarticles);
    const [sideGroups, setSideGroups] = useState(datagroups);
    const [hasMore,setHasMore] = useState(true)
    const getNextData = ()=>{
        if(groups.length < groupsHardCoded.length *2) setGroups([...groups,...groupsHardCoded])
    }

    useEffect(()=>{
        getNextData() 
    },[])
    return (
        <ResearcherAccountLayout>
            <MyHead title="الملف الشخصي  - شبكتي" />
            {/* <WorkInProgress menu="شبكتي"/> */}
            <div className={classes.myNetworkContainer}>
        <div className={classes.content}>
          <div className={classes.mainSection}>
            <div className={classes.filterSection}>
              <div className={classes.groupedActions}>
                <TextField
                  variant="outlined"
                  label="العنوان"
                  className={classes.input}
                />
                {/* <FormControl  variant="outlined" className={classes.select}>
                                <InputLabel id="demo-simple-select-outlined-label">نوع المنشور</InputLabel>
                                <Select
                                    label="نوع المنشور"
                                >   
                                </Select>
                            </FormControl> */}
                <Button className={classes.searchButton}>
                  <SearchIcon
                    className={`${classes.searchIcon} ${classes.right}`}
                  />
                </Button>
              </div>
              
            </div>
            <div id="scrollableDivResearchs">
              <InfiniteScroll
                dataLength={groups.length}
                className={classes.groupsContainer}
                next={getNextData}
                inverse={false}
                hasMore={hasMore}
                loader={<GroupCardSkeleton />}
              >
                {groups.map((group,id) => (
                  <GroupCard key={`group-card-${id}`}  group={group}/>
                ))}
              </InfiniteScroll>
            </div>
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
