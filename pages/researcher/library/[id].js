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


export async function getStaticPaths() {
    let paths = []
    await  axios({
                method: "get",
                url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/library/book`,
        })
        .then((response) => {
           paths = response.data.map((item)=>{
                return {
                    params:{id:item.id.toString()}
                }
            })
        })
        .catch((error) => console.log(error));
    
    
      return {
        paths,
        fallback: 'blocking' // See the "fallback" section below
      };
  }
  
  
  export async function getStaticProps(context) {
    let book =null
    console.log(context)
    await axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/library/bookbyid?id=${context.params.id}`,
        })
          .then((response) => {
              book = response.data
          })
          .catch((error) => console.log(error));
    return {
      props: {
        book,
      }, 
    }
  }



export default function bookItemPage({book}) {
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


        
    return (
       <ResearcherLayout>
           <div className={classes.bookContainer}>
                <BannerMenu 
                    title="المكتبة"
                    description="تفاعل بشكل أفضل مع زملائك الباحثين، أرسل ملفات، صور وروابط."
                    imgSrc="/images/library-banner.png"
                />
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
                        
                    
                </div>
       </ResearcherLayout>
    )
}
