import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import React,{useState} from 'react'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button, IconButton, Tab,Tabs } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import CardMembershipOutlinedIcon from '@material-ui/icons/CardMembershipOutlined';
import classes from '../../../../styles/Resume.module.css'
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';

const aboutme = {
    description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل.",
    job:"أستاذ جامعي",
    date:"26 مارس 2020",
    company:"CleverZone.link",
    city:"باب الزوار، الجزائر",
    webSite:"www.mouadh.com"
}

const users = [
    {
        fullName:"بلال بوعيشة",
        commonFrinedsNumber: 2,
        invitationStatus:  'sent'
    },
    {
        fullName:"بلال بوعيشة",
        commonFrinedsNumber: 0,
        invitationStatus:  'notSent'
    },
    {
        fullName:"بلال بوعيشة",
        commonFrinedsNumber: 5,
        invitationStatus:  'sent'
    },
    {
        fullName:"بلال بوعيشة",
        commonFrinedsNumber: 2,
        invitationStatus:  'accepted'
    },
    {
        fullName:"بلال بوعيشة",
        commonFrinedsNumber: 2,
        invitationStatus:  'sent'
    }
    
]

const educations = [
    {
        university:"جامعة الهواري بومدين - باب الزوار / الجزائر",
        title:"شهادة ليسانس  في العلوم الإجتماعية",
        startDate:"2012",
        endDate:"2015",
        location:"الجزائر",
        description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ..."
    },
    {
        university:"جامعة الهواري بومدين - باب الزوار / الجزائر",
        title:"شهادة الماستر  في العلوم الإجتماعية",
        startDate:"2015",
        endDate:"2017",
        location:"الجزائر",
        description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ..."
    },
    {
        university:"جامعة الهواري بومدين - باب الزوار / الجزائر",
        title:"شهادة الدكتوراه  في العلوم الإجتماعية",
        startDate:"2017",
        endDate:"2020",
        location:"الجزائر",
        description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ..."
    }
]
const experiences = [
    {
        title:"مطور ويب",
        company:"CleverZone.ink",
        location:"الجزائر",
        startDate:"2017 نوفمبر",
        endDate:"2020 ديسمبر",
    },
    {
        title:"مطور ويب",
        company:"CleverZone.ink",
        location:"الجزائر",
        startDate:"2017 نوفمبر",
        endDate:"2020 ديسمبر",
    },
    {
        title:"مطور ويب",
        company:"CleverZone.ink",
        location:"الجزائر",
        startDate:"2017 نوفمبر",
        endDate:"2020 ديسمبر",
    }
]

const certifications = [
    {
        title:"شهادة الماستر",
        provider:"جامعة الهواري بومدين",
        startDate:"2017 نوفمبر",
        endDate:"لا تاريخ انتهاء الصلاحية"

    },
    {
        title:"شهادة الماستر",
        provider:"جامعة الهواري بومدين",
        startDate:"2017 نوفمبر",
        endDate:"لا تاريخ انتهاء الصلاحية"

    },
    {
        title:"شهادة الماستر",
        provider:"جامعة الهواري بومدين",
        startDate:"2017 نوفمبر",
        endDate:"لا تاريخ انتهاء الصلاحية"

    }
]
const volunteerings =[
    {
        organization:"جمعية ورقة لحماية البيئة",
        role:"متطوع في دور معين",
        description:"",
        startDate:"2017",
        endDate:"2020",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين"
    },
    {
        organization:"جمعية ورقة لحماية البيئة",
        role:"متطوع في دور معين",
        description:"",
        startDate:"2017",
        endDate:"2020",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين"
    },
    {
        organization:"جمعية ورقة لحماية البيئة",
        role:"متطوع في دور معين",
        description:"",
        startDate:"2017",
        endDate:"2020",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين"
    },
]


const articles = [
    {
        title:"عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate:"6 days ago"
    },
    {
        title:"عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate:"1 day ago"
    },
    {
        title:"عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate:"3 weeks ago"
    },
    {
        title:"عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate:"6 years ago"
    },
    {
        title:"عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate:"1 month ago"
    }
]

const groups = [
    {
        name:"مجموعة معينة",
        members:134
    },
    {
        name:"مجموعة معينة",
        members:440
    },
    {
        name:"مجموعة معينة",
        members:235
    },
    {
        name:"مجموعة معينة",
        members:34
    }
]

export default function index() {
    const [value,setValue]  = useState(0)
    const handleChange = (e,value)=>{
        setValue(value)
    }
    return (
       <ResearcherAccountLayout>
          <div className={classes.resumeContainer}>
            <div className={classes.sideSection}>
                {/* about me resume */}
                <div className={classes.resumeAboutMe}>
                    <h2>
                        نبذة عني 
                        <IconButton>
                            <MoreHorizOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <p className={classes.resumeAboutMeDescription}>
                        {aboutme.description}
                    </p>
                    <ul className={classes.resumeAboutMeInfo}>
                        <li><span className={classes.infoLabel}>الإنضمام</span><span className={classes.infoValue}>{aboutme.date}</span></li>
                        <li><span className={classes.infoLabel}>المدينة</span><span className={classes.infoValue}>{aboutme.city}</span></li>
                        <li><span className={classes.infoLabel}>المؤسسة</span><span className={classes.infoValue}>{aboutme.company}</span></li>
                        <li><span className={classes.infoLabel}>الوظيفة</span><span className={classes.infoValue}>{aboutme.job}</span></li>
                        <li><span className={classes.infoLabel}>الموقع</span><span className={`${classes.infoValue} ${classes.website}`}><a href={aboutme.webSite} target="_blank">{aboutme.webSite}</a></span></li>
                    </ul>
                    <Button className={classes.downloadResume}>
                        <span>حمل السيرة الذاتية</span>
                        <GetAppIcon />
                    </Button>
                </div>
                {/* badges */}
                <div className={classes.resumeBadges}>
                    <h2>
                        الأوسمة                            
                        <IconButton>
                            <MoreHorizOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <div className={classes.resumeBagesImages}>
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />
                        <img alt="" src={"/images/04.png"} />

                    </div>
                </div>
                {/* شبكتي البحثية */}
                <div className={classes.myNetwork}>
                    <h2>
                        شبكتي البحثية                               
                        <IconButton>
                            <MoreHorizOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    {
                        users.map((user,ui)=>(
                            <div className={classes.suggestUser} key={ui}>
                                <div className={classes.suggestUserRectangle}></div>
                                <div className={classes.suggestUserContent}>
                                    <h3>{user.fullName}</h3>
                                    <h5>صديق مشترك {user.commonFrinedsNumber}</h5>
                                </div>
                             
                                    <Button 
                                        className={`${classes.suggestUserAction} ${classes[user.invitationStatus]}`}
                                    >
                                        {
                                            user.invitationStatus =="accepted"?(
                                                <RemoveIcon className={classes.actionIcon}/>
                                            )
                                            :(
                                                <AddIcon className={classes.actionIcon}/>
                                            )
                                        }
                                    </Button>
                                </div>
                        ))
                    }
                    <Button className={classes.allFriends}>
                        <span>
                            جميع الأصدقاء
                        </span>
                    </Button>   
                </div>
            </div>
            <div className={classes.mainSection}>
               <div className={classes.collectionContainer}>
                    <h2>
                        <span>
                            <SchoolOutlinedIcon />
                            المؤهلات الاكاديمية                        
                        </span>
                        <IconButton>
                            <BorderColorOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <div className={classes.collectionItems}>
                        {educations.map((education,index)=>(
                            <div className={classes.collectionItem} key={`education-item-${index}`}>
                                <div className={classes.collectionRectangle}></div>
                                <div className={classes.collectionContent}>
                                    <h2>{education.university}</h2>
                                    <h3>{education.title}</h3>
                                    <span>
                                        {`${education.endDate} - ${education.startDate}`}
                                    </span>
                                    <div className={classes.line}></div>
                                </div>
                            </div>

                        ))}
                        <div className={classes.moreCollections}>
                            <KeyboardArrowDownIcon className={classes.moreCollectionIcon}/>
                            <span>إطلع على المزيد</span>
                        </div>

                    </div>
               </div>
               <div className={classes.collectionContainer}>
                    <h2>
                        <span>
                            <WorkOutlineOutlinedIcon />
                                الخبرة المهنية                
                        </span>
                        <IconButton>
                            <BorderColorOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <div className={classes.collectionItems}>
                        {experiences.map((experience,index)=>(
                            <div className={classes.collectionItem} key={`experience-item-${index}`}>
                                <div className={classes.collectionRectangle}></div>
                                <div className={classes.collectionContent}>
                                    <h2>{experience.company}</h2>
                                    <h3>{experience.title}</h3>
                                    <span>
                                        {`${experience.endDate} - ${experience.startDate}`}
                                    </span>
                                    <span>
                                        {experience.location}
                                    </span>
                                    <div className={classes.line}></div>
                                </div>
                            </div>

                        ))}
                        <div className={classes.moreCollections}>
                            <KeyboardArrowDownIcon className={classes.moreCollectionIcon}/>
                            <span>إطلع على المزيد</span>
                        </div>

                    </div>
               </div>

               <div className={classes.collectionContainer}>
                    <h2>
                        <span>
                            <CardMembershipOutlinedIcon />
                            الشهادات                       
                        </span>
                        <IconButton>
                            <BorderColorOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <div className={classes.collectionItems}>
                        {certifications.map((certification,index)=>(
                            <div className={classes.collectionItem} key={`certification-item-${index}`}>
                                <div className={classes.collectionRectangle}></div>
                                <div className={classes.collectionContent}>
                                    <h2>{certification.title}</h2>
                                    <h3>{certification.provider}</h3>
                                    <h3>
                                        {`${certification.endDate} - ${certification.startDate}`}
                                    </h3>
                                    <span>
                                        إطلع على الإعتماد  
                                    </span>
                                    <div className={classes.line}></div>
                                </div>
                            </div>

                        ))}
                        <div className={classes.moreCollections}>
                            <KeyboardArrowDownIcon className={classes.moreCollectionIcon}/>
                            <span>إطلع على المزيد</span>
                        </div>

                    </div>
               </div>
               <div className={classes.collectionContainer}>
                    <h2>
                        <span>
                            <i className="fas fa-hand-holding-heart" style={{fontSize:"1.5rem"}}></i>
                            العمل التطوعي                        
                        </span>
                        <IconButton>
                            <BorderColorOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <div className={classes.collectionItems}>
                        {volunteerings.map((volunteering,index)=>(
                            <div className={classes.collectionItem} key={`volunteering-item-${index}`}>
                                <div className={classes.collectionRectangle}></div>
                                <div className={classes.collectionContent}>
                                    <h2>{volunteering.organization}</h2>
                                    <h3>{volunteering.role}</h3>
                                    <h3>
                                        {`${volunteering.endDate} - ${volunteering.startDate}`}
                                    </h3>
                                    <span>
                                      {volunteering.description}
                                    </span>
                                    <div className={classes.line}></div>
                                </div>
                            </div>

                        ))}
                        <div className={classes.moreCollections}>
                            <KeyboardArrowDownIcon className={classes.moreCollectionIcon}/>
                            <span>إطلع على المزيد</span>
                        </div>

                    </div>
               </div>
               <div className={classes.collectionContainer}>
                    <h2>
                        <span>
                        <i className="fas fa-award" style={{fontSize:"1.5rem"}}></i>
                            الإنجازات
                        </span>
                        <IconButton>
                            <BorderColorOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <div className={classes.collectionItems}>
                        
                    </div>
               </div>

            </div>
            <div className={classes.sideSection}>
                <div className={classes.learnNow}>
                    <div className={classes.learnNowTitle}>
                        <h1>سيّر عمليّة التخرج بفعاليّة أكبر</h1>
                    </div>
                    <Button
                        className={classes.learnNowButton}
                    >
                        تعلّم الآن
                    </Button>
                </div>
                <div className={classes.articles}>
                    <h2>
                        مقالات
                        <IconButton>
                            <MoreHorizOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <div className={classes.articlesItems}>
                        {
                            articles.map((article,index)=>(
                                <div className={classes.articlesItem} key={`articles-item-${index}`}>
                                    <div className={classes.collectionRectangle}></div>
                                    <div className={classes.articlesContent}>
                                        <h2>{article.title}</h2>
                                        <span>{article.publishedDate}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.myGroups}>
                    <h2>
                            مجموعاتي البحثية
                        <IconButton>
                            <MoreHorizOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <Tabs
                        value={value}
                        className={classes.myGroupsTabs}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                    <Tab label="الأشهر" className={classes.groupTabItem} />
                    <Tab label="الأكثر نشاطا" className={classes.groupTabItem} />
                    <Tab label="الأحدث" className={classes.groupTabItem} />
                </Tabs>
                <div className={classes.groupList}>
                    {
                        groups.map((group,index)=>(
                            <div key={`group-${index}`} className={classes.groupItem}>
                                <div className={classes.collectionRectangle}></div>
                                <div className={classes.groupDescription}>
                                    <h4>{group.name}</h4>
                                    <span>
                                         
                                        {`عضو ${group.members}`}
                                    </span>
                                </div>
                                <Button className={classes.groupButton}>
                                    <GroupAddOutlinedIcon />
                                </Button>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
       </ResearcherAccountLayout>
    )
}
