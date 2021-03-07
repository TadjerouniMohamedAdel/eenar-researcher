import { useState } from "react";
import BannerMenu from "../../../components/BannerMenu/BannerMenu";
import LastArticles from "../../../components/LastArticles/LastArticles";
import LearnNow from "../../../components/LearnNow/LearnNow";
import MyGroups from "../../../components/MyGroups/MyGroups";
import MyHead from "../../../components/MyHead/MyHead";
import WorkInProgress from "../../../components/WorkInProgress/WorkInProgress";
import ResearcherLayout from "../../../layouts/ResearcherLayout/ResearcherLayout";
import classes from "../../../styles/Researchs.module.css";
import { dataarticles, datagroups } from "../../../utils/fixtures/DevData";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

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



  const prePosts = [

    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
    {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  ]

const nextPosts = [

  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
  {title:"عنوان كبير خاص بالمقالة أو المنشور الفلاني",author:"معاذ محساس",type:"كتاب",description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "},
]


export default function index() {
  const [articles, setArticles] = useState(dataarticles);
  const [groups, setGroups] = useState(datagroups);
  const [posts,setPosts] = useState(prePosts)
  
  const getNextData = ()=>{
    setTimeout(() => {
        console.log("next call")
        setPosts([...posts,...nextPosts])
    }, 5000);
  }
  
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
                hasMore={true}
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
