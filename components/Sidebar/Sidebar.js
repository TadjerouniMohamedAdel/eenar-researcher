import { useState } from 'react'
import classes from './Sidebar.module.css'
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import { useRouter } from 'next/router'
import { Link } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'



const Rectangles = function () {

    return (
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

const badges = [
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

export default function Sidebar() {
    const { t } = useTranslation('sidebar')
    const links = [
        {
            name: t("menu.home"),
            icon: () => (<HomeIcon className={classes.linkIcon} />),
            to: "/researcher/"
        },
        {
            name: t("menu.account"),
            icon: () => (<PermIdentityOutlinedIcon className={classes.linkIcon} />),
            to: "/researcher/account"
        },
        {
            name: t("menu.research-store"),
            icon: () => (<FindInPageOutlinedIcon className={classes.linkIcon} />),
            to: "/researcher/researchs"
        },
        {
            name: t("menu.research-services"),
            icon: () => (<SettingsApplicationsOutlinedIcon className={classes.linkIcon} />),
            to: "/researcher/research-services"
        },
        {
            name: t("menu.messages"),
            icon: () => (<QuestionAnswerOutlinedIcon className={classes.linkIcon} />),
            to: "/researcher/messages"
        },
        {
            name: t("menu.library"),
            icon: () => (<AccountBalanceWalletOutlinedIcon className={classes.linkIcon} />),
            to: "/researcher/library"
        },
        {
            name: t("menu.discussions-forum"),
            icon: () => (<SmsOutlinedIcon className={classes.linkIcon} />),
            to: "/researcher/forums"
        }
    ]
    const router = useRouter()
    const overviews = [
        { name: t("overviews.posts"), value: "0" }, { name: t("overviews.friends"), value: "0" }, { name: t("overviews.views"), value: "0" }
    ]
    let tab = [...links]
    tab.shift()
    const [activeIndex, setActiveIndex] = useState(tab.findIndex(item => router.pathname.includes(item.to)) + 1)
    const user = useSelector((state) => state.user)

    return (
        <div className={classes.sidebar}>
            <div className={classes.bondeau}></div>
            <div className={classes.profile}>
                {
                    user.image != "" && user.image ? (
                        <img src={user.image} alt="" className={classes.Rectangle5} />
                    ) : (

                        <Rectangles />
                    )
                }
                <h2 className={classes.profileTitle}>{user.lastname} {user.firstname}</h2>
                <span className={classes.profileJob}>{user.job}</span>
            </div>
            <div className={classes.profileBadges}>
                {
                    badges.map((item) => (
                        <img alt="" src={item.src} srcSet={item.srcSet} key={item.src} className={classes.profileBadgesItem} />
                    ))
                }
            </div>
            <div className={classes.profileOverviews}>
                {
                    overviews.map(item => (
                        <div className={classes.profileOverviewsItem} key={item.name}>
                            <span className={classes.profileOverviewsItemValue}>{item.value}</span>
                            <span className={classes.profileOverviewsItemName}>{item.name}</span>
                        </div>
                    ))
                }
            </div>
            <div className={classes.sidebarLinks}>
                {
                    links.map((link, index) => (
                        <Link key={link.to} onClick={() => { setActiveIndex(index); router.push(link.to) }} className={`${classes.sidebarLinksItem} ${activeIndex === index && classes.active}`}>
                            {link.icon()}
                            <span className={classes.linkName}>{link.name}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
