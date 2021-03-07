import React,{useState,useEffect} from 'react'
import classes from './Sidebar.module.css'
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import { useRouter } from 'next/router'
import {Link} from '@material-ui/core'
import { useSelector } from 'react-redux'



const Rectongles = function(){
    return(
        <div className={classes.Rectangle5}>
            <div className={classes.Rectangle4}>
                <div className={classes.Rectangle3}>
                    <div className={classes.Rectangle2}>
                    </div>
                </div>
            </div>
        </div>
    )
}
const links =[
    {
        name:"الواجهة الرئيسية",
        icon:()=>(<HomeIcon className={classes.linkIcon} />),
        to:"/researcher/"
    },
    { 
        name:"الملف الشخصي",
        icon:()=>(<PermIdentityOutlinedIcon className={classes.linkIcon} />),
        to:"/researcher/account"
    },
    { 
        name:"مجمع الأبحاث",
        icon:()=>(<FindInPageOutlinedIcon className={classes.linkIcon} />),
        to:"/researcher/researchs"
    },
    { 
        name:"الخدمات البحثية",
        icon:()=>(<SettingsApplicationsOutlinedIcon className={classes.linkIcon} />),
        to:"/researcher/research-services"
    },
    {
        name:"الرسائل",
        icon:()=>(<QuestionAnswerOutlinedIcon className={classes.linkIcon} />),
        to:"/researcher/messages"
    },
    {
        name:"المكتبة",
        icon:()=>(<AccountBalanceWalletOutlinedIcon className={classes.linkIcon} />),
        to:"/researcher/library"
    },
    {
        name:"منتدى النقاشات",
        icon:()=>(<SmsOutlinedIcon className={classes.linkIcon} />),
        to:"/researcher/forums"
    }
]

const badges =[
    // {
    //     src:"/images/more-small-badge.png",
    //     srcSet:"/images/more-small-badge@2x.png 2x,/images/more-small-badge@3x.png 3x"
    // },
    // {
    //     src:"/images/04.png",
    //     srcSet:"/images/04@2x.png 2x,/images/04@3x.png 3x"
    // },
    // {
    //     src:"/images/03.png",
    //     srcSet:"/images/03@2x.png 2x,/images/03@3x.png 3x"
    // },
    // {
    //     src:"/images/02.png",
    //     srcSet:"/images/02@2x.png 2x,/images/02@3x.png 3x"
    // },
    // {
    //     src:"/images/01.png",
    //     srcSet:"/images/01@2x.png 2x,/images/01@3x.png 3x"
    // }
]
const overviews =[
    {name:"المنشورات",value:"0"},{name:"الأصدقاء",value:"0"},{name:"الزيارات",value:"0"}
]

export default function Sidebar() {
    let tab = [...links]
    const user = useSelector((state) => state.user)
    tab.shift()
    const router = useRouter()
    const [activeIndex,setActiveIndex] = useState(tab.findIndex(item=>router.pathname.includes(item.to))+1)
   
    return (
        <div className={classes.sidebar}>
            <div className={classes.bondeau}></div>
            <div className={classes.profile}>
            {
                            user.image!="" && user.image ? (
                                    <img src={user.image} alt="" className={classes.Rectangle5} />
                            ):(

                                <Rectongles />
                            )
                        }
                <h2 className={classes.profileTitle}>{user.lastname} {user.firstname}</h2>
                <span className={classes.profileJob}>{user.job}</span>
            </div>
            <div className={classes.profileBadges}>
                {
                    badges.map((item)=>(
                        <img alt="" src={item.src} srcSet={item.srcSet} key={item.src} className={classes.profileBadgesItem}/>
                    ))
                }
            </div>
            <div className={classes.profileOverviews}>
                {
                    overviews.map(item=>(
                        <div className={classes.profileOverviewsItem} key={item.name}>
                            <span className={classes.profileOverviewsItemValue}>{item.value}</span>
                            <span className={classes.profileOverviewsItemName}>{item.name}</span>
                        </div>
                    ))
                }
            </div>
            <div className={classes.sidebarLinks}>
                {
                    links.map((link,index)=>(
                        <Link key={link.to}  onClick={()=>{setActiveIndex(index);router.push(link.to)}} className={[classes.sidebarLinksItem ,activeIndex===index && classes.active]}>
                            {link.icon()} 
                            <span className={classes.linkName}>{link.name}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
