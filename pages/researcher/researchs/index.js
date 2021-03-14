import { useState,useEffect } from "react";
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

export default function index() {
  const [articles, setArticles] = useState(dataarticles);
  const [groups, setGroups] = useState(datagroups);
  const [posts,setPosts] = useState([])
  const [offset,setOffset] = useState(0)
  const [limit,setLimit] = useState(10)
  const [hasMore,setHasMore] = useState(true)
  
  const getNextData = ()=>{
    if(hasMore){
      const user = JSON.parse(
        JSON.parse(localStorage.getItem("persist:primary")).user
      );
      axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/post?researcherId=${user.researchers.id}&offset=${offset}&limit=${limit}`,
      })
        .then((response) => {
          // setIsLoading(false)
          console.log(response.data)
          if(response.data.posts.length == 0) setHasMore(false)
          setPosts([...posts,...response.data.posts]);
          setOffset(offset+10)
        })
        .catch((error) => {
          console.log(error);
        });

    }
  }
  useEffect(() => {  
    getNextData()
  }, []);
  
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
              <div className={classes.buttonSection}>
                <Button
                  className={classes.addButton}
                  onClick={() => setAddVisible(true)}
                >
                  <span className={classes.text}>أضف منشور</span>
                  <AddIcon className={classes.addIcon} />
                </Button>
              </div>
            </div>
            <div id="scrollableDivResearchs">
              <InfiniteScroll
                dataLength={posts.length}
                className={classes.postsContainer}
                next={getNextData}
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
