import { Button, IconButton } from '@material-ui/core'
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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetServerSideProps } from 'next';
import { Book } from '../../../utils/types/types';



  
export const getServerSideProps:GetServerSideProps = async (context)=> {
    let book =null
    try {
        await axios({
            method: "get",
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/user`,
            withCredentials: true,
            headers: { Cookie: context.req.headers.cookie }
        })
        } catch (error) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            },
            props: {
                ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
            }
        }
    }
    await axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/library/bookbyid?id=${context.params?.id}`,
          withCredentials:true,
          headers:{
            Cookie: context.req.headers.cookie
          } 
        })
          .then((response) => {
              book = response.data
          })
          .catch((error) => console.log(error));
    return {
      props: {
        book,
        ...await serverSideTranslations(context.locale||"ar", ["sidebar"]),
      },
    }
  }



const ResearcherLibraryBookPage:React.FC<{book:Book}> = ({book})=> {
        const params = {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
       }   
       const params2 = {
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
                        {!book ?
                                    (
                        <div className={classes.libraryItemContainer}>
                                        <MyHead title={`المكتبة | 404`} />
                                    <div className={classes.notFound}>
                                    <img src="/images/404.png" alt="" />
                                    <h1>هذا الكتاب غير موجود</h1>
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
                            <Swiper {...params}  slidesPerView="auto">

                                <img src={""} alt="" />
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
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
                            <Swiper {...params2} slidesPerView="auto">
                                <img src={""} alt="" />
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
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
export default ResearcherLibraryBookPage;