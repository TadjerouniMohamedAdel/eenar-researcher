import { Button, IconButton } from '@material-ui/core'
import React,{useState} from 'react'
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



export default function bookItemPage() {
    const [book,setBook] = useState({id:1,author:"آرثر كونان دويل",overview:"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود     أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد كسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس  أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم أيو فيجايت    نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان     كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييومدولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي أب أللو أنفينتوري فيرأتاتيس ايتكياسي أرشيتيكتو بيتاي فيتاي ديكاتا سيونت أكسبليكابو. نيمو أنيم أبسام فوليوباتاتيم كيواي    فوليوبتاس سايت أسبيرناتشر أيوت أودايت أيوت فيوجايت, سيد كيواي كونسيكيونتشر ماجنايدولارس أيوس كيواي راتاشن فوليوبتاتيم سيكيواي نيسكايونت. نيكيو بوررو كيوايسكيومايست,كيواي دولوريم ايبسيوم كيوا دولار سايت أميت, كونسيكتيتيور,أديبايسكاي فيلايت, سيدكيواي نون نيومكيوام ايايوس موداي تيمبورا انكايديونت يوت لابوري أيت دولار ماجنامألايكيوام كيوايرات فوليوبتاتيم. يوت اينايم أد مينيما فينيام, كيواس نوستريوم أكسيركايتاشيميلامكوربوريس سيوسكايبيت لابورايوسام, نايساي يوت ألايكيوايد أكس أيا كومودايكونسيكيواتشر؟ كيوايس أيوتيم فيل أيوم أيوري ريبريهينديرايت كيواي ان إيا فوليوبتاتي   فيلايت ايسسي كيوم نايهايل موليستايا كونسيكيواتيو,فيلايليوم كيواي دولوريم أيوم فيوجايات كي",img:"/images/book.jpg",title:"مغامرات شرلوك هولمز",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"})
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
            <MyHead title={`المكتبة | ${book.title}`} />
                <BannerMenu 
                    title="المكتبة"
                    description="تفاعل بشكل أفضل مع زملائك الباحثين، أرسل ملفات، صور وروابط."
                    imgSrc="/images/library-banner.png"
                />
                <div className={classes.libraryItemContainer}>
                    <div className={classes.bookDetails}>
                        <div className={classes.getResumeContainer}>
                            <Button variant="contained" className={classes.getResume}>
                                <span>تحميل الكتاب</span>
                                <GetAppIcon />
                            </Button>
                        </div>
                        <div className={classes.bookPageContent}>
                            <div className={classes.bookPageImage}>
                                <img src={book.img} alt={book.title} />
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
