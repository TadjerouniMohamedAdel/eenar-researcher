import React,{ useState, useEffect } from "react";
import BannerMenu from "../../../components/BannerMenu/BannerMenu";
import MyHead from "../../../components/MyHead/MyHead";
import ResearcherLayout from "../../../layouts/ResearcherLayout/ResearcherLayout";
import classes from "../../../styles/Researchs.module.css";

import {
  TextField,
} from "@material-ui/core";
import PostCard from "../../../components/PostCard/PostCard";
import PostCardSkeleton from "../../../components/PostCard/PostCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useGetList from "../../../utils/hooks/useGetList";
import { useSelector } from 'react-redux'
import MultiSectionLayout from "../../../layouts/MultiSectionLayout/MultiSectionLayout";
import EmptyList from "../../../components/EmptyList/EmptyList";
import ErrorUnreachable from "../../../components/ErrorUnreachable/ErrorUnreachable";
import Error500 from "../../../components/Error500/Error500";
import { GetStaticProps } from "next";
import { RootState } from "../../../redux/store2";
import { ResearchPost } from "../../../utils/types/types";


export const getStaticProps:GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale||"ar", ["sidebar"]),
  },
})

const  ResearcherResearchsPage:React.FC = ()=>{
  const user = useSelector((state:RootState) => state.user)
  const [posts, setPosts] = useState<ResearchPost[]>([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [research, setResearch] = useState("")
  const [hasMore, setHasMore] = useState(true)

  const { data, isLoading,error } = useGetList<{posts:ResearchPost[],maxPages:number}>("posts", "/researcher/post/research/all", limit, offset, research, user.researchers.id)

  useEffect(() => {
    if (data) {
      setPosts([...posts, ...data.posts])
      data.posts.length === 0 && setHasMore(false)
    }
  }, [data])


  useEffect(() => {
    setOffset(0)
  }, [research])

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
        <MultiSectionLayout
          
        >


          <div className={classes.filterSection}>
            <div className={classes.groupedActions}>
              <TextField
                variant="outlined"
                label="العنوان"
                className={classes.input}
                onChange={(e) => { setPosts([]); setHasMore(true); setResearch(e.target.value) }}
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
          {
                    error ?(
                      error.response && error.response.status===500?(
                          <Error500 />
                      ):(
                          
                              <ErrorUnreachable />
                          
  
                      )
  
                  
              ):
                    isLoading === false && posts.length == 0 ? (
                        <EmptyList />
                    ) : (
          <div id="scrollableDivResearchs">
            <InfiniteScroll
              dataLength={posts.length}
              className={classes.postsContainer}
              next={() => !isLoading && setOffset(offset + 10)}
              inverse={false}
              hasMore={hasMore}
              loader={<PostCardSkeleton />}
            >
              {posts.map((post, id) => (
                <PostCard post={post} key={`post-${id}`} />
              ))}
            </InfiniteScroll>
          </div>
                    )}
        </MultiSectionLayout>
      </div>

    </ResearcherLayout>
  );
}
export default ResearcherResearchsPage