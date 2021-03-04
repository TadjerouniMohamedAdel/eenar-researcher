import { Button, IconButton } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import BannerMenu from '../../../components/BannerMenu/BannerMenu'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import classes from '../../../styles/Library.module.css'
import GetAppIcon from '@material-ui/icons/GetApp';
import MyHead from '../../../components/MyHead/MyHead'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Lazy, Navigation, Autoplay } from 'swiper'
SwiperCore.use([Lazy, Navigation, Autoplay])
import axios from 'axios'
import {useRouter} from 'next/router'
import { Skeleton } from '@material-ui/lab'



export default function bookItemPage() {
        const bookId = useRouter().query.id
        const [isLoading,setIsLoading] = useState(true)
        const [book,setBook] = useState(null)
        const params = {
          slidesPerView: 'auto',
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
       }   
       const params2 = {
        slidesPerView: 'auto',
        autoplay: {
          delay: 2700,
          disableOnInteraction: false
        },
     }   

     useEffect(()=>{
         bookId &&
        axios({
            url:`${process.env.NEXT_PUBLIC_API_URL}/researcher/library/bookbyid?id=${bookId}`,
            method:"GET",
        }).then(response=>{
            setBook(response.data)
            setIsLoading(false)
        }).catch(error=>{
            console.log(error)
        })
     },[bookId])

        
    return (
       <ResearcherLayout>
           <div className={classes.bookContainer}>
                <BannerMenu 
                    title="المكتبة"
                    description="تفاعل بشكل أفضل مع زملائك الباحثين، أرسل ملفات، صور وروابط."
                    imgSrc="/images/library-banner.png"
                />
                
                    {
                        isLoading? 
                        (
                            <div className={classes.libraryItemContainer}>
                                    <MyHead title={`المكتبة`} />
                                    <div className={classes.bookDetails}>
                                        <MyHead title={`المكتبة`}/>
                                        <div className={classes.getResumeContainer}>
                                                <Skeleton variant="rect" className={classes.getResume} />
                                        </div>
                                        <div className={classes.bookPageContent}>
                                            
                                                <Skeleton variant="rect"  className={classes.bookPageImage}/>
                                                <div className={classes.bookPageOverviewSkeletons}>
                                                        <Skeleton variant="text" />
                                                        <Skeleton variant="text" />
                                                        <Skeleton variant="rect"  className={classes.pSkeleton} />
                                                </div>
                                        </div>
                                    </div>
                                    <div className={classes.sideSection}>
                                            <div className={classes.sideMenu}>
                                                
                                                    <Skeleton variant="text" />
                                               
                                                <div className={classes.list}>
                                                        <Skeleton variant="rect" className={classes.imgSkeleton}  />
                                                        <Skeleton variant="rect" className={classes.imgSkeleton} />
                                                        <Skeleton variant="rect" className={classes.imgSkeleton} />
                                                        <Skeleton variant="rect" className={classes.imgSkeleton} />
                                                </div>
                                            </div>
                                            <div className={classes.sideMenu}>
                                                
                                                    <Skeleton variant="text" />
                                               
                                                <div className={classes.list}>
                                                        <Skeleton variant="rect" className={classes.imgSkeleton}  />
                                                        <Skeleton variant="rect" className={classes.imgSkeleton} />
                                                        <Skeleton variant="rect" className={classes.imgSkeleton} />
                                                        <Skeleton variant="rect" className={classes.imgSkeleton} />
                                                </div>
                                            </div>
                                            
                                    </div> 

                                </div>
                        )
                        
                        :(
                        <div className={classes.libraryItemContainer}>
                            <div className={classes.bookDetails}>
                                <MyHead title={`المكتبة | ${book.title}`} />
                                <div className={classes.getResumeContainer}>
                                    <a href={book.file} target="_blank" style={{textDecoration:"none"}}>
                                        <Button variant="contained" className={classes.getResume}>
                                            <span>تحميل الكتاب</span>
                                            <GetAppIcon />
                                        </Button>
                                    </a>
                                </div>
                                <div className={classes.bookPageContent}>
                                    <div className={classes.bookPageImage}>
                                        <img src={book.cover} alt={book.title} />
                                    </div>
                                    <div className={classes.bookPageOverview}>
                                        <h1>{book.title}</h1>
                                        <h2>من تأليف  {book.author}</h2>
                                        <p>
                                            {book.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>

                <div className={classes.sideSection}>
                    <div className={classes.sideMenu}>
                        <h3>
                            <span>مؤلفات {book.author}</span>
                            <IconButton>
                                <MoreHorizOutlinedIcon  className={classes.iconMenu}/>
                            </IconButton>
                        </h3>
                        <div className={classes.list}>
                            <Swiper {...params}>

                                <img src={book.img} alt="" />
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                            </Swiper>                                
                        </div>
                    </div>
                    <div className={classes.sideMenu}>
                        <h3>
                            <span>كتب مشابهة</span>
                            <IconButton>
                                <MoreHorizOutlinedIcon  className={classes.iconMenu}/>
                            </IconButton>
                        </h3>
                        <div className={classes.list}>
                            <Swiper {...params2}>
                                <img src={book.img} alt="" />
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                                <img src={book.img} alt=""/>
                            </Swiper>
                        </div>
                    </div>
                </div> 
                </div>
                        )
                    }
                </div>
       </ResearcherLayout>
    )
}
