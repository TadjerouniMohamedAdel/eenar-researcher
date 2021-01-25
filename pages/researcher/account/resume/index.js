import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import CardMembershipOutlinedIcon from '@material-ui/icons/CardMembershipOutlined';
import classes from '../../../../styles/Resume.module.css'
import AboutMe from '../../../../components/AboutMe/AboutMe';
import BadgesCard from '../../../../components/BadgesCard/BadgesCard';
import MyNetwork from '../../../../components/MyNetwork/MyNetwork';
import LearnNow from '../../../../components/LearnNow/LearnNow';
import LastArticles from '../../../../components/LastArticles/LastArticles';
import MyGroups from '../../../../components/MyGroups/MyGroups';
import ResumeMainCollection from '../../../../components/ResumeMainCollection/ResumeMainCollection';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ResumeSuccessItem from '../../../../components/ResumeSuccessItem/ResumeSuccessItem';
import Modal from '../../../../components/Modal/Modal';
import AddElement from '../../../../components/CrudModal/AddElement';
import { useState} from 'react'
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
        startDate:"2017",
        endDate:"2020",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين"
    },
    {
        organization:"جمعية ورقة لحماية البيئة",
        role:"متطوع في دور معين",
        startDate:"2017",
        endDate:"2020",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين"
    },
    {
        organization:"جمعية ورقة لحماية البيئة",
        role:"متطوع في دور معين",
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
        center:"مركز الرؤيا للأبحاث الفلكية",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "
    },
    {
        name:"التكريم الفلاني الأول",
        date:"ديسمبر 2012",
        center:"مركز الرؤيا للأبحاث الفلكية",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "
    },
    {
        name:"التكريم الفلاني الأول",
        date:"ديسمبر 2015",
        center:"مركز الرؤيا للأبحاث الفلكية",
        description:"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين "
    },
]

export default function index() {    
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
               <ResumeMainCollection label="الإنجازات">
                    <ResumeSuccessItem label="المشاريع" items={projects} />
                    <ResumeSuccessItem label="اللغات" items={languages} />
                    <ResumeSuccessItem label="النشاطات و الفعاليات" items={activities} />
                    <ResumeSuccessItem label="براءات الاختراع" items={patents} />
                    <ResumeSuccessItem label="التكريمات" items={honors} last />                  
                </ResumeMainCollection> 
               

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
