import React, { useState } from 'react'
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
import { useTranslation } from 'next-i18next'
import { SidebarProps } from '../../utils/types/types';



/**
    Side navigation of the platform , it's mainly contain : 

    - Links to navigate between the main pages
    - The current user's info (picture , banner , full name , job name)
    - Stats about the current user's activity (views,posts,friends)
**/


const Sidebar: React.FC<SidebarProps> = ({ user }) => {
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

    const Rectangles: React.FC<{ gender: string, img: string }> = ({ gender, img }) => {

        return (
            <div className={classes.Rectangle5}>
                <div className={classes.Rectangle4}>
                    <img src={img !== "" && img != null ? img : `/images/${gender}-placeholder.jpg`} alt="" />
                </div>
            </div>
        )
    }


    return (
        <div className={classes.sidebar}>
            <div className={classes.bondeau}>
                <img src="/images/account-banner-placeholder.webp" alt="" />
            </div>
            <div className={classes.profile}>
                <Rectangles img={user.image} gender={user.gender} />

                <h2 className={classes.profileTitle}>{user.lastname} {user.firstname}</h2>
                <span className={classes.profileJob}>{user.job}</span>
            </div>
            <div className={classes.profileBadges}>
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
export default Sidebar;