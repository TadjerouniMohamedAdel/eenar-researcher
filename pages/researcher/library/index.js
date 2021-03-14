import { ClassSharp } from '@material-ui/icons'
import {useState ,useEffect} from 'react'
import BannerMenu from '../../../components/BannerMenu/BannerMenu'
import MyHead from '../../../components/MyHead/MyHead'
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import { Button, FormControl, IconButton, InputLabel, Select,TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import classes from '../../../styles/Library.module.css'
import Pagination from '../../../components/Pagination/Pagination'
import Link from 'next/link'
import moment from 'moment'
import axios from 'axios'
import { Skeleton } from '@material-ui/lab'


export default function index() {
    moment.locale('ar-dz')
    const bookList=[
        {id:1,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:2,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:3,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:4,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:5,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:6,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:7,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:8,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:9,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:10,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
        {id:11,img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"2020-05-19",publishingHouse:"دار البدر للنشر والتوزيع"},
    ]
    const [books,setBooks] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [offset,setOffset] = useState(0)
    const [limit,setLimit] = useState(10)
    const [pages,setPages] = useState(0)
    const [page,setPage] = useState(1)

    useEffect(()=>{
        setPage(offset/limit+1)
        getNextData()
    },[offset])

    const getNextData = ()=>{
        setIsLoading(true)
        axios({
            url:`${process.env.NEXT_PUBLIC_API_URL}/researcher/library/book?offset=${offset}&limit=${limit}`,
            method:"GET"
        }).then(response=>{
            console.log(response.data)
            setBooks(response.data.books)
            setPages(response.data.maxPages)
            setIsLoading(false)
        }).catch(error=>{
            console.log(error)
            setIsLoading(false)
        })
    }
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
                <div className={classes.filterSection}>
                    <div className={classes.groupedActions}>
                        <TextField
                            variant="outlined"
                            label="العنوان"
                            className={classes.input}  
                        />
                        {/* <FormControl  variant="outlined" className={classes.select}>
                            <InputLabel id="demo-simple-select-outlined-label">نوع المشروع</InputLabel>
                            <Select
                                label="نوع المشروع"
                            >   
                            </Select>
                        </FormControl> */}
                        <Button className={classes.searchButton}>
                            <SearchIcon className={`${classes.searchIcon} ${classes.right}`} />
                        </Button>
                    </div>
                </div>
                <div className={classes.bookList}>

                    {
                        isLoading ? (
                            <div className={classes.bookItem} key={`book`}>
                                <Skeleton className={classes.bookCoverSkeleton}/>
                            <div className={classes.bookContent}>
                                <Skeleton className={classes.SkeletonInfo} />
                                <Skeleton />
                                <Skeleton />
                            </div>
                            </div>
                            
                        ) 
                        
                        :books.length == 0 ?
                            (
                                    <div className={classes.empty}>
                                      <img src="/images/empty.png" alt="empty-list" />
                                      <h3>لا تحتوي هذه القائمة على بيانات</h3>
                                    </div>
                            )
                        :books.map((book,index)=>(
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
                {  pages > 1 && (
                        <div
                            style={{width:"100%",display:"flex",justifyContent:"flex-end"}}
                        >
                            <Pagination 
                                active={page}
                                limit={limit}
                                pages={pages}
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
