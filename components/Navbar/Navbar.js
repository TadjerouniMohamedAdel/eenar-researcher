import React from 'react'
import classes from './Navbar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, TextField } from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';


export default function Navbar() {
    return (
        <nav className={classes.navbar}> 
            <div className={classes.navbarLogo}>
                <img src="/images/logoAdminWhite.png" height={60} />
                <h1>منتدى كوالالمبور  <br/>شبكة الباحثين</h1>
            </div>
            <ul className={classes.aboutUs}>
                <li><a href="#">من نحن؟</a></li>
                <li><a href="#">خدماتنا</a></li>
                <li><a href="#">جائزة مهاتير</a></li>
            </ul>
            <div className={classes.searchBarSection}>
                <TextField
                        placeholder="إبحث هنا عن أشخاص أو مجموعات"
                        className={classes.searchInput}
                        variant="outlined"
                        InputProps={{
                            endAdornment: <SearchIcon  className={classes.searchIconNavbar}/>,
                        }}
                />
            </div>
            <div className={classes.navbarActions} style={{marginLeft:28}}>
                <div className={classes.navbarDivider}></div>
                <IconButton>
                    <VisibilityOutlinedIcon className={classes.actionIcon}/>
                </IconButton>
                <IconButton>
                    <QuestionAnswerOutlinedIcon className={classes.actionIcon}/>
                </IconButton>
                <IconButton>
                    <NotificationsNoneOutlinedIcon className={classes.actionIcon}/>
                </IconButton>
                <div className={classes.navbarDivider}></div>
                <IconButton>
                    <SettingsOutlinedIcon className={classes.actionIcon}/>
                </IconButton>
            </div>
        </nav>
    )
}
