import { useState,useEffect,useRef } from "react";
import BannerMenu from "../../../components/BannerMenu/BannerMenu";
import LastArticles from "../../../components/LastArticles/LastArticles";
import LearnNow from "../../../components/LearnNow/LearnNow";
import MyGroups from "../../../components/MyGroups/MyGroups";
import MyHead from "../../../components/MyHead/MyHead";
import ResearcherLayout from "../../../layouts/ResearcherLayout/ResearcherLayout";
import classes from "../../../styles/Researchs.module.css";
import { dataarticles, datagroups } from "../../../utils/fixtures/DevData";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import axios from 'axios'
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import PostCard from "../../../components/PostCard/PostCard";
import PostCardSkeleton from "../../../components/PostCard/PostCardSkeleton"; 
import InfiniteScroll from "react-infinite-scroll-component";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useGetList from "../../../utils/hooks/useGetList";
import { useSelector } from 'react-redux'


export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ["sidebar"]),
    },
  })

export default function index() {
  const user = useSelector((state) => state.user)
  const [articles, setArticles] = useState(dataarticles);
  const [groups, setGroups] = useState(datagroups);
  const [posts,setPosts] = useState([])
  const [offset,setOffset] = useState(0)
  const [limit,setLimit] = useState(10)
  const [research,setResearch] = useState("")
  const [hasMore,setHasMore] = useState(true)

  const {data,isLoading} = useGetList("posts","/researcher/post/research/all",limit,offset,research,user.researchers.id)  
  
  useEffect(() => {
      if(data){
        setPosts([...posts,...data.posts])
        data.posts.length === 0 && setHasMore(false)
      }
  }, [data])
  

  useEffect(()=>{
    setOffset(0)
  },[research])
  
  return (
    <ResearcherLayout>
      <MyHead title="مجمع الأبحاث" />
      <div className={classes.researchsContainer}>
        <BannerMenu
          title="مجمع الأبحاث"
          description="تفاعل بشكل أفضل مع زملائك الباحثين، أرسل ملفات، صور وروابط."
          imgSrc="/images/researchs-banner.png"
        />
        <h1>مجمع الأبحاث</h1>
        <div className={classes.content}>
          <div className={classes.mainSection}>
            <div className={classes.filterSection}>
              <div className={classes.groupedActions}>
                <TextField
                  variant="outlined"
                  label="العنوان"
                  className={classes.input}
                  onChange={(e)=>{setPosts([]);setHasMore(true);setResearch(e.target.value)}}
                />
                {/* <FormControl  variant="outlined" className={classes.select}>
                                <InputLabel id="demo-simple-select-outlined-label">نوع المنشور</InputLabel>
                                <Select
                                    label="نوع المنشور"
                                >   
                                </Select>
                            </FormControl> */}
                {/* <Button className={classes.searchButton} onClick={()=>handleResearch()}>
                  <SearchIcon
                    className={`${classes.searchIcon} ${classes.right}`}
                  />
                </Button> */}
              </div>
              {/* <div className={classes.buttonSection}>
                <Button
                  className={classes.addButton}
                >
                  <span className={classes.text}>أضف منشور</span>
                  <AddIcon className={classes.addIcon} />
                </Button>
              </div> */}
            </div>
            <div id="scrollableDivResearchs">
              <InfiniteScroll
                dataLength={posts.length}
                className={classes.postsContainer}
                next={()=>!isLoading && setOffset(offset+10)}
                inverse={false}
                hasMore={hasMore}
                loader={<PostCardSkeleton />}
              >
                {posts.map((post, id) => (
                  <PostCard post={post} key={`post-${id}`} />
                ))}
              </InfiniteScroll>
            </div>
          </div>
          <div className={classes.sideSection}>
            <LearnNow />
            <LastArticles articles={articles} />
            <MyGroups groups={groups} />
          </div>
        </div>
      </div>
    </ResearcherLayout>
  );
}
