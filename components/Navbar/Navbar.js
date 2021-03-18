import {useState , useEffect} from 'react'
import classes from './Navbar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Menu, MenuItem, TextField } from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import {motion, AnimatePresence} from 'framer-motion'
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router' 

const dropdownVariant = {
    hidden:{y:-20,opacity:0},
    visible:{y:0,opacity:1,transition: { duration: 0.05 }}
}
export default function Navbar() {
    const router = useRouter();
    const { locale } = router;
    const { i18n } = useTranslation();
    
    const [isSettingsOpen,setIsSettingsOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    
    const changeLocale = (locale)=>{
        document.body.dir=locale == "ar" ?"rtl" : "ltr"
        router.push(router.pathname, router.pathname, { locale })
    }
    return (
        <nav className={classes.navbar}> 
            <div className={classes.navbarLogo}>
                <img src="/images/logoAdminWhite.png" height={60} />
                <h1>منتدى كوالالمبور  <br/>شبكة الباحثين</h1>
            </div>
            <ul className={classes.aboutUs}>
                <li><a href="https://kl-forum.org/ar/nrict" target="_blank">من نحن؟</a></li>
                <li><a href="">خدماتنا</a></li>
                <li><a href="https://kl-forum.org/ar/kl1" target="_blank">جائزة مهاتير</a></li>
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
                <div>
                    <IconButton onClick={(event)=>setAnchorEl(event.currentTarget)} aria-controls="fade-menu">
                        <div className={classes.languageSwitcher}>
                            <img src={locale === "ar"? "/images/arabic-flag.svg" : locale==="en"?"/images/usa-flag.png":"/images/french-flag.webp"} alt=""/>
                        </div>
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={()=>setAnchorEl(null)}
                        style={{marginTop:50}}
                    >
                        <MenuItem onClick={()=>changeLocale("ar")}>
                            <div className={classes.choiceLanguage}>
                                <img src="/images/arabic-flag.svg" alt=""/>
                                العربية
                            </div>
                        </MenuItem>
                        <MenuItem onClick={()=>changeLocale("en")}>
                            <div className={classes.choiceLanguage}>
                                <img src="/images/usa-flag.png" alt=""/>
                                English
                            </div>
                        </MenuItem>
                        <MenuItem onClick={()=>changeLocale("fr")}>
                            <div className={classes.choiceLanguage}>
                                <img src="/images/french-flag.webp" alt=""/>
                                Français
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
                <IconButton>
                    <QuestionAnswerOutlinedIcon className={classes.actionIcon}/>
                </IconButton>
                <IconButton>
                    <NotificationsNoneOutlinedIcon className={classes.actionIcon}/>
                </IconButton>
                <div className={classes.navbarDivider}></div>
                <div className={classes.myDropDown}>
                    <IconButton className={classes.dropButton} onClick={()=>setIsSettingsOpen(!isSettingsOpen)}>
                        <SettingsOutlinedIcon className={classes.actionIcon}/>
                    </IconButton>
                    <AnimatePresence exitBeforeEnter>
                            {
                                isSettingsOpen && (
                                    <motion.div 
                                        className={classes.dropDownMenu}
                                        variants={dropdownVariant}
                                        animate="visible"
                                        initial="hidden"
                                        exit="hidden"

                                    >
                                            <h3>General Settings <br/><span>Website Designer</span></h3>
                                            <ul>
                                                <li><a href="#">Edit Credentials<LockOutlinedIcon style={{marginLeft:5,marginRight:5}} /></a></li>
                                                <li><a href="#">Edit Language <TranslateOutlinedIcon style={{marginLeft:5,marginRight:5}} /></a></li>
                                                <li><a href="#">Help <ContactSupportOutlinedIcon style={{marginLeft:5,marginRight:5}} /></a></li>
                                                <li><a href="#">Log Out<ExitToAppOutlinedIcon style={{marginLeft:5,marginRight:5}} /></a></li>
                                            </ul>
                                    </motion.div>
                                )
                            }
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    )
}
