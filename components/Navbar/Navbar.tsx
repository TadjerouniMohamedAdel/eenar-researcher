import React,{ useState,useRef } from 'react'
import classes from './Navbar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Menu, Paper, TextField ,MenuItem ,MenuList } from '@material-ui/core';
import { useRouter } from 'next/router'
import axios from 'axios';
import { SidebarProps } from '../../utils/types/types';
import Fade from '@material-ui/core/Fade';


/**
    The top navigation of the platform, it gives acces of bunch of links and actions

    - Links: aboutas , services , mahatir award 
    - Actions: global search , change language , notifcations , settings

 **/

const Navbar: React.FC<SidebarProps> = ({ user }) => {
    const router = useRouter();
    const { locale } = router;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    // change the locale of the app
    const changeLocale = (locale: string) => {
        document.body.dir = locale == "ar" ? "rtl" : "ltr"
        console.log("asPath", router.asPath)
        router.push(router.asPath, router.asPath, { locale })
    }


    // logout user
    const logout = () => {
        axios.post("/api/auth/logout", {})
            .then(() => {
                closeSettingsMenu()
                router.push("/login")
                
            })
    }

    // open settings menu
    const openSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    

    // close settings menu
    const closeSettingsMenu = () => {
        setAnchorEl(null);
    };

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarLogo} onClick={() => { router.push("/researcher") }}>
                <img src="/images/logoAdminWhite.png" height={60} />
                <h1><b>منتدى كوالالمبور </b> <br />شبكة الباحثين</h1>
            </div>
            <ul className={classes.aboutUs}>
                <li><a href="https://kl-forum.org/ar/nrict" target="_blank">من نحن؟</a></li>
                <li><a href="javascript:void(0);">خدماتنا</a></li>
                <li><a href="https://kl-forum.org/ar/kl1" target="_blank">جائزة مهاتير</a></li>
            </ul>
            <div className={classes.searchBarSection}>
                <input
                    placeholder="إبحث هنا عن أشخاص أو مجموعات"
                    className={classes.searchInput}
                />
                <i className={`ri-search-line ${classes.searchIconNavbar}`}></i>
            </div>
            <div className={classes.navbarActions} style={{ marginLeft: 28 }}>
                <IconButton onClick={() => { router.push("/researcher/messages") }}>
                    <i className={`ri-question-answer-line ${classes.actionIcon}`}></i>
                </IconButton>
                <IconButton onClick={() => { router.push("/researcher/account/notifications") }}>
                    <i className={`ri-notification-2-line ${classes.actionIcon}`}></i>
                </IconButton>
                <IconButton className={classes.blueCircle}  onClick={openSettingsMenu}>
                    <img src={user.image} alt="" />
                </IconButton>
                <Paper className={classes.paper}>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        id="user-settings-menu"
                        onClose={closeSettingsMenu}
                        TransitionComponent={Fade}
                        className={classes.menuSettings}
                    >
                        <MenuItem className={classes.menuItemSettings} onClick={()=>router.push("/researcher/account/edit-account")}>
                           <i className={`ri-settings-3-line`}></i>
                            <span> تعديل الملف الشخصي</span>                           
                        </MenuItem>
                        <MenuItem className={classes.menuItemSettings}>
                           <i className={`ri-user-settings-line`}></i>
                            <span> اعدادات الحساب</span>                           
                        </MenuItem>
                        <MenuItem className={classes.menuItemSettings} onClick={logout}>
                           <i className={`ri-logout-box-r-line`}></i>
                            <span> تسجيل الخروج</span>                           
                        </MenuItem>
                    </Menu>
                </Paper>
            </div>
        </nav>
    )
}
export default Navbar