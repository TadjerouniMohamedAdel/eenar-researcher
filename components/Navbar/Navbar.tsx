import { useState } from 'react'
import classes from './Navbar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Menu, MenuItem, TextField } from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { useRouter } from 'next/router'
import axios from 'axios';

const dropdownVariant = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.05 } }
}
const Navbar:React.FC = ()=> {
    const router = useRouter();
    const { locale } = router;

    
    const [anchorEl, setAnchorEl] = useState<Element|null>(null);

    const changeLocale = (locale:string) => {
        document.body.dir = locale == "ar" ? "rtl" : "ltr"
        console.log("asPath", router.asPath)
        router.push(router.asPath, router.asPath, { locale })
    }
    const logout = ()=>{
        axios.post("/api/auth/logout",{})
            .then(()=>{
                router.push("/login")
            })
    }
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarLogo} onClick={() => { router.push("/researcher") }}>
                <img src="/images/logoAdminWhite.png" height={60} />
                <h1>منتدى كوالالمبور  <br />شبكة الباحثين</h1>
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
                        endAdornment: <SearchIcon className={classes.searchIconNavbar} />,
                    }}
                />
            </div>
            <div className={classes.navbarActions} style={{ marginLeft: 28 }}>
                <div className={classes.navbarDivider}></div>
                <div>
                    <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} aria-controls="fade-menu">
                        <div className={classes.languageSwitcher}>
                            <img src={locale === "ar" ? "/images/arabic-flag.svg" : locale === "en" ? "/images/usa-flag.png" : "/images/french-flag.webp"} alt="" />
                        </div>
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        style={{ marginTop: 50 }}
                    >
                        <MenuItem onClick={() => changeLocale("ar")}>
                            <div className={classes.choiceLanguage}>
                                <img src="/images/arabic-flag.svg" alt="" />
                                العربية
                            </div>
                        </MenuItem>
                        <MenuItem onClick={() => changeLocale("en")}>
                            <div className={classes.choiceLanguage}>
                                <img src="/images/usa-flag.png" alt="" />
                                English
                            </div>
                        </MenuItem>
                        <MenuItem onClick={() => changeLocale("fr")}>
                            <div className={classes.choiceLanguage}>
                                <img src="/images/french-flag.webp" alt="" />
                                Français
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
                <IconButton onClick={() => { }}>
                    <QuestionAnswerOutlinedIcon className={classes.actionIcon} />
                </IconButton>
                <IconButton onClick={() => { }}>
                    <NotificationsNoneOutlinedIcon className={classes.actionIcon} />
                </IconButton>
                <div className={classes.navbarDivider}></div>
                <div className={classes.myDropDown}>
                    <IconButton className={classes.dropButton} onClick={logout}>
                        <SettingsOutlinedIcon className={classes.actionIcon} />
                    </IconButton>
                </div>
            </div>
        </nav>
    )
}
export default Navbar