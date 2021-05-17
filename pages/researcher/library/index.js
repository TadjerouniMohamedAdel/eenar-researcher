import {useState ,useEffect} from 'react'
import BannerMenu from '../../../components/BannerMenu/BannerMenu'
import MyHead from '../../../components/MyHead/MyHead'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import { Button, FormControl, IconButton, InputLabel, Select,TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import classes from '../../../styles/Library.module.css'
import Pagination from '../../../components/Pagination/Pagination'
import Link from 'next/link'
import moment from 'moment'
import { Skeleton } from '@material-ui/lab'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useGetList from '../../../utils/hooks/useGetList'
import EmptyList from '../../../components/EmptyList/EmptyList';
import Error500 from '../../../components/Error500/Error500';
import ErrorUnreachable from '../../../components/ErrorUnreachable/ErrorUnreachable';



export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ["sidebar"]),
    },
  })

export default function index() {
    moment.locale('ar-dz')
    const [offset,setOffset] = useState(0)
    const [limit,setLimit] = useState(10)
    const [page,setPage] = useState(1)
    const [research,setResearch] = useState("")
    const {isLoading,data,isError,error} = useGetList("books","/researcher/library/book/research",limit,offset,research)

    useEffect(()=>{
        setPage(offset/limit+1)
    },[offset])

    useEffect(() => {
            setOffset(0)
    }, [research])


    useEffect(()=>{
        console.log({...error})
    },[error])
    
    return (
        <ResearcherLayout>
            <MyHead title="المكتبة" />
            <div className={classes.libraryContainer}>
                <BannerMenu 
                    title="المكتبة"
                    description="تفاعل بشكل أفضل مع زملائك الباحثين، أرسل ملفات، صور وروابط."
                    imgSrc="/images/library-banner.png"
                />
                <h1>المكتبة</h1>
                <div className={classes.filterSection} id="scroll">
                    <div className={classes.groupedActions}>
                        <TextField
                            variant="outlined"
                            label="العنوان"
                            className={classes.input}
                            onChange={(e)=>setResearch(e.target.value)}  
                        />
                        {/* <FormControl  variant="outlined" className={classes.select}>
                            <InputLabel id="demo-simple-select-outlined-label">نوع المشروع</InputLabel>
                            <Select
                                label="نوع المشروع"
                            >   
                            </Select>
                        </FormControl> */}
                        {/* <Button className={classes.searchButton} onClick={() => handleResearch()}>
                            <SearchIcon className={`${classes.searchIcon} ${classes.right}`} />
                        </Button> */}
                    </div>
                </div>
                <div className={classes.bookList}>

                    {
                        isError ?(
                            <div>
                                <ErrorUnreachable />
                            </div>
                        )
                        :isLoading ? (
                            <div className={classes.bookItem} key={`book`}>
                                <Skeleton className={classes.bookCoverSkeleton}/>
                            <div className={classes.bookContent}>
                                <Skeleton className={classes.SkeletonInfo} />
                                <Skeleton />
                                <Skeleton />
                            </div>
                            </div>
                            
                        ) 
                        
                        :data.books.length == 0 ?
                            (
                                    <EmptyList />
                            )
                        :data.books.map((book,index)=>(
                            <Link href={{pathname:"/researcher/library/[id]",query:{id:book.id}}} key={`book-link-${index}`} className={classes.bookLink}>
                                <div>
                                    <div className={classes.bookItem} key={`book-${index}`}>
                                        <div className={classes.bookCover}>
                                            <img src={book.cover} alt={book.title} />
                                        </div>
                                        <div className={classes.bookContent}>
                                            <h2>{book.title}</h2>
                                            <div className={classes.groupedContent}>
                                                <h3>{book.author}</h3>
                                                <div className={classes.groupedDivider}></div>
                                                <h3>{moment(book.publishedDate).format('DD MMM YYYY')}</h3>
                                            </div>
                                            <h3>{book.publishingHouse}</h3>
                                        </div>
                                    </div>
                                    {/* <div className={classes.bookDivider}></div> */}
                                </div>
                            </Link>
                        ))
                    }
                </div>
                {  data && data.maxPages > 1 && (
                        <div
                            style={{width:"100%",display:"flex",justifyContent:"flex-end"}}
                        >
                            <Pagination 
                                active={page}
                                limit={limit}
                                pages={data.maxPages}
                                onNext={()=>{setOffset(offset+10)}}
                                onPrev={()=>{setOffset(offset-10)}}
                                onNum={setOffset}
                            />

                        </div>
                        )
                }
            </div>
        </ResearcherLayout>
    )
}
