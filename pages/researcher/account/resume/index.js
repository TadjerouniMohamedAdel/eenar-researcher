import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import React,{useState} from 'react'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button, IconButton, Tab,Tabs } from '@material-ui/core';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import CardMembershipOutlinedIcon from '@material-ui/icons/CardMembershipOutlined';
import classes from '../../../../styles/Resume.module.css'
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AboutMe from '../../../../components/AboutMe/AboutMe';
import BadgesCard from '../../../../components/BadgesCard/BadgesCard';
import MyNetwork from '../../../../components/MyNetwork/MyNetwork';
import LearnNow from '../../../../components/LearnNow/LearnNow';
import LastArticles from '../../../../components/LastArticles/LastArticles';
import MyGroups from '../../../../components/MyGroups/MyGroups';
import ResumeMainCollection from '../../../../components/ResumeMainCollection/ResumeMainCollection';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const aboutme = {
    description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل.",
    job:"أستاذ جامعي",
    date:"26 مارس 2020",
    company:"CleverZone.link",
    city:"باب الزوار، الجزائر",
    webSite:"www.mouadh.com"
}
const badges = [
    {
        imageSrc:"/images/01.png"
    },
    {
        imageSrc:"/images/02.png"
    },
    {
        imageSrc:"/images/03.png"
    },
    {
        imageSrc:"/images/04.png"
    },
    {
        imageSrc:"/images/01.png"
    },
    {
        imageSrc:"/images/02.png"
    },
    {
        imageSrc:"/images/03.png"
    },
    {
        imageSrc:"/images/04.png"
    },
    {
        imageSrc:"/images/01.png"
    },
    {
        imageSrc:"/images/02.png"
    },
    {
        imageSrc:"/images/03.png"
    },
    {
        imageSrc:"/images/04.png"
    },
    {
        imageSrc:"/images/01.png"
    },
    {
        imageSrc:"/images/02.png"
    },
    {
        imageSrc:"/images/03.png"
    },
    {
        imageSrc:"/images/04.png"
    },
    {
        imageSrc:"/images/04.png"
    },
]

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
    },
    {
        university:"جامعة الهواري بومدين - باب الزوار / الجزائر",
        title:"شهادة الماستر  في العلوم الإجتماعية",
        startDate:"2015",
        endDate:"2017",
    },
    {
        university:"جامعة الهواري بومدين - باب الزوار / الجزائر",
        title:"شهادة الدكتوراه  في العلوم الإجتماعية",
        startDate:"2017",
        endDate:"2020",
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
        name:"شهادة الماستر",
        provider:"جامعة الهواري بومدين",
        startDate:"2017 نوفمبر",
        endDate:"لا تاريخ انتهاء الصلاحية",
        link:{
            url:"",
            label:"إطلع على الإعتماد"
        }
    },
    {
        name:"شهادة الماستر",
        provider:"جامعة الهواري بومدين",
        startDate:"2017 نوفمبر",
        endDate:"لا تاريخ انتهاء الصلاحية",
        link:{
            url:"",
            label:"إطلع على الإعتماد"
        }

    },
    {
        name:"شهادة الماستر",
        provider:"جامعة الهواري بومدين",
        startDate:"2017 نوفمبر",
        endDate:"لا تاريخ انتهاء الصلاحية",
        link:{
            url:"",
            label:"إطلع على الإعتماد"
        }

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

const projects = [
    {
      name:"المشروع الفلاني الأول",  
      startDate:"سبتمبر 2012",
      endDate:null,
      description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ",
    },
    {
        name:"المشروع الفلاني الثاني",  
        startDate:"سبتمبر 2009",
        endDate:"ديسمبر 2010",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ",
      },
      {
        name:"المشروع الفلاني الثالث",  
        startDate:"سبتمبر 2002",
        endDate:"سبتمبر 2005",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ",
      },
]

const languages = [
    {
        name:"العربية",
        level:"اللغة الأم أومستوى احترافي"
    },
    {
        name:"الإنجليزية",
        level:"مستوى احترافي"
    },
    {
        name:"الفرنسية",
        level:"مستوى متوسط"
    }]

const activities = [
    {
        name:"النشاط الفلاني الأول",
        startDate:"20/9/2020",
        endDate:"25/9/2020",
        center:"مؤسسة الرؤيا للأبحاث الفلكية",
        role:"محاضر",
        location:"مصر"
    },
    {
        name:"النشاط الفلاني الأول",
        startDate:"20/9/2020",
        endDate:"25/9/2020",
        center:"مؤسسة الرؤيا للأبحاث الفلكية",
        role:"محاضر",
        location:"مصر"
    },
    {
        name:"النشاط الفلاني الأول",
        startDate:"20/9/2020",
        endDate:"25/9/2020",
        center:"مؤسسة الرؤيا للأبحاث الفلكية",
        role:"محاضر",
        location:"مصر"
    },
]

const patents=[
    {
        name:"براءة الاختراع الأولى",
        startDate:"سبتمبر 2012",
        endDate:"ديسمبر 2015",
        status:"تم الاصدار",
        center:"المكتب الفلاني للإختراعات",
        code:"ED1059",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "
    },
    {
        name:"براءة الاختراع الأولى",
        startDate:"سبتمبر 2012",
        endDate:"ديسمبر 2015",
        status:"تم الاصدار",
        center:"المكتب الفلاني للإختراعات",
        code:"ED1059",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "
    },
    {
        name:"براءة الاختراع الأولى",
        startDate:"سبتمبر 2012",
        endDate:"ديسمبر 2015",
        status:"تم الاصدار",
        center:"المكتب الفلاني للإختراعات",
        code:"ED1059",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "
    },
]

const honors = [
    {
        name:"التكريم الفلاني الأول",
        date:"ديسمبر 2012",
        honoredBy:"مركز الرؤيا للأبحاث الفلكية",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "
    },
    {
        name:"التكريم الفلاني الأول",
        date:"ديسمبر 2012",
        honoredBy:"مركز الرؤيا للأبحاث الفلكية",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "
    },
    {
        name:"التكريم الفلاني الأول",
        date:"ديسمبر 2015",
        honoredBy:"مركز الرؤيا للأبحاث الفلكية",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "
    },
]

export default function index() {

    const [projectsExpanded,setProjectsExpanded] = useState(false)
    const [languagesExpanded,setLanguagesExpanded] = useState(false)
    const [activitiesExpanded,setActivitiesExpanded] = useState(false)
    const [patentsExpanded,setPatentsExpanded] = useState(false)
    const [honorsExpanded,setHonorsExpanded] = useState(false)
    
    return (
       <ResearcherAccountLayout>
          <div className={classes.resumeContainer}>
            <div className={classes.sideSection}>
                <AboutMe aboutme={aboutme}/>
                <BadgesCard badges={badges} />
                <MyNetwork users={users} />
            </div>
            <div className={classes.mainSection}>
               <ResumeMainCollection collections={educations} label="المؤهلات الاكاديمية" icon={<SchoolOutlinedIcon />}/>
               <ResumeMainCollection icon={<WorkOutlineOutlinedIcon />} label="الخبرة المهنية" collections={experiences} />
               <ResumeMainCollection icon={<CardMembershipOutlinedIcon />} label="الشهادات" collections={certifications} />
               <ResumeMainCollection icon={<FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize:"1.5rem"}} />} label="العمل التطوعي" collections={volunteerings} />
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
                    <div className={classes.successSection}>
                            <h3>
                                المشاريع
                                <IconButton onClick={()=>setProjectsExpanded(!projectsExpanded)}>
                                    {
                                        projectsExpanded ?  <ExpandLessIcon style={{fontSize:28,color:"#3e3f5e"}} />: <ExpandMoreIcon style={{fontSize:28,color:"#3e3f5e"}} /> 
                                    }
                                </IconButton>
                            </h3>
                            {
                                projectsExpanded ? (
                                    <ul className={classes.successSectionNotExpanded}>
                                        {
                                            projects.map((project,index)=>(
                                                <li key={`project-${index}`}>{project.name}</li>
                                            ))
                                        }
                                    </ul>
                                ):(
                                    <div className={classes.successSectionItems}>
                                        {
                                            projects.map((project,index)=>(
                                                <div key={`project-${index}`} className={classes.successSectionItem}>
                                                    <h3>{project.name}</h3>
                                                    <h4>
                                                        {project.startDate} - {project.endDate!==null?project.endDate :"مستمر"}
                                                    </h4>
                                                    <span>{project.description}</span>
                                                </div>

                                            ))
                                        }
                                    </div>

                                )
                            }
                            <div className={classes.seccessSectionDevider}></div>
                    </div>
                    <div className={classes.successSection}>
                            <h3>
                                اللغات
                                <IconButton onClick={()=>setLanguagesExpanded(!languagesExpanded)}>
                                {
                                        languagesExpanded ?  <ExpandLessIcon style={{fontSize:28,color:"#3e3f5e"}} />: <ExpandMoreIcon style={{fontSize:28,color:"#3e3f5e"}} /> 
                                    }
                                </IconButton>
                            </h3>
                            {
                                languagesExpanded ? (
                                    <ul className={classes.successSectionNotExpanded}>
                                        {languages.map((language,index)=>(
                                            <li key={`language-${index}`}>{language.name}</li>
                                        ))}
                                    </ul>
                                ) :(
                                    <div className={classes.successSectionItems}>
                                        {
                                            languages.map((language,index)=>(
                                                <div key={`language-${index}`} className={classes.successSectionItem}>
                                                    <h3>{language.name}</h3>
                                                    <h4>
                                                        {language.level}
                                                    </h4>
                                                </div>

                                            ))
                                        }
                                    </div>

                                )   
                            }
                            <div className={classes.seccessSectionDevider}></div>
                    </div>
                    <div className={classes.successSection}>
                            <h3>
                                النشاطات والفعاليات
                                <IconButton onClick={()=>setActivitiesExpanded(!activitiesExpanded)}>
                                    {
                                        activitiesExpanded ?  <ExpandLessIcon style={{fontSize:28,color:"#3e3f5e"}} />: <ExpandMoreIcon style={{fontSize:28,color:"#3e3f5e"}} /> 
                                    }
                                </IconButton>
                            </h3>
                            {
                                activitiesExpanded ? (
                                    <ul className={classes.successSectionNotExpanded}>
                                        {
                                            activities.map((activity,index)=>(
                                                <li key={`activity-${index}`}>{activity.name}</li>
                                            ))
                                        }
                                    </ul>
                                ):(
                                   
                                    <div className={classes.successSectionItems}>
                                        {
                                            activities.map((activity,index)=>(
                                                <div key={`activity-${index}`} className={classes.successSectionItem}>
                                                    <h3>{activity.name}</h3>
                                                    <h4>
                                                        {activity.startDate} - {activity.endDate!==null?activity.endDate :"مستمر"} - {activity.role}
                                                    </h4>
                                                    <h4>
                                                        {activity.center} - {activity.location}
                                                    </h4>
                                                </div>

                                            ))
                                        }
                                    </div>
                                )
                            }
                            <div className={classes.seccessSectionDevider}></div>
                    </div>
                    <div className={classes.successSection}>
                            <h3>
                                براءات الاختراع
                                <IconButton onClick={()=>setPatentsExpanded(!patentsExpanded)}>
                                {
                                    patentsExpanded ?  <ExpandLessIcon style={{fontSize:28,color:"#3e3f5e"}} />: <ExpandMoreIcon style={{fontSize:28,color:"#3e3f5e"}} /> 
                                }
                                </IconButton>
                            </h3>
                            {
                                patentsExpanded ? (
                                <ul className={classes.successSectionNotExpanded}>
                                    {
                                        patents.map((patent,index)=>(
                                            <li key={`patent-${index}`}>{patent.name}</li>
                                        ))
                                    }
                                </ul>
                                ):(
                                    <div className={classes.successSectionItems}>
                                        {
                                            patents.map((patent,index)=>(
                                                <div key={`patent-${index}`} className={classes.successSectionItem}>
                                                    <h3>{patent.name}</h3>
                                                    <h4>
                                                        {patent.startDate} - {patent.endDate!==null?patent.endDate :"مستمر"} - {patent.status}
                                                    </h4>
                                                    <h4>
                                                        {patent.center} - {patent.code}
                                                    </h4>
                                                    <span>{patent.description}</span>
                                                </div>

                                            ))
                                        }
                                    </div>

                                )
                            }
                            <div className={classes.seccessSectionDevider}></div>
                    </div>
                    <div className={classes.successSection}>
                            <h3>
                                التكريمات
                                <IconButton onClick={()=>setHonorsExpanded(!honorsExpanded)}>
                                {
                                   honorsExpanded ?  <ExpandLessIcon style={{fontSize:28,color:"#3e3f5e"}} />: <ExpandMoreIcon style={{fontSize:28,color:"#3e3f5e"}} /> 
                                }
                                </IconButton>
                            </h3>
                            {
                                honorsExpanded ? (
                                <ul className={classes.successSectionNotExpanded}>
                                    {
                                        honors.map((honor,index)=>(
                                            <li key={`honor-${index}`}>{honor.name}</li>
                                        ))
                                    }
                                </ul>
                                ):(
                                    <div className={classes.successSectionItems}>
                                        {
                                            honors.map((honor,index)=>(
                                                <div key={`honor-${index}`} className={classes.successSectionItem}>
                                                    <h3>{honor.name}</h3>
                                                    <h4>
                                                        {honor.date}
                                                    </h4>
                                                    <h4>
                                                        {honor.honoredBy} 
                                                    </h4>
                                                    <span>{honor.description}</span>
                                                </div>

                                            ))
                                        }
                                    </div>

                                )
                            }
                    </div>                   
               </div>

            </div>
            <div className={classes.sideSection}>
                <LearnNow />
                <LastArticles articles={articles} />
                <MyGroups groups={groups}/>
            </div>
        </div>
       </ResearcherAccountLayout>
    )
}
