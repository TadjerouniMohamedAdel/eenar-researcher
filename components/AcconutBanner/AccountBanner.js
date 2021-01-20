import React from 'react'
import {Link} from '@material-ui/core'
import classes from './AccountBanner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faFacebookSquare,faTwitter,faTwitch, faDribbble, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
const overviews =[
    {name:"المنشورات",value:"930"},{name:"الأصدقاء",value:"82"},{name:"الزيارات",value:"5.7K"}
]
const nationality = {
    src:"https://www.countryflags.com/wp-content/uploads/algeria-algerian-flag-png-square-large.png",
    name:"الجزائر"
}

const Rectongles = ()=> (
    <div className={classes.Rectangle9}>
        <div className={classes.Path2980}>
            <div className={classes.Rectangle11}>
                <div className={classes.Rectangle12}></div>
            </div> 
        </div>
    </div>
)

export default function AccountBanner() {
    return (
        <div className={classes.accountBanner}>
                <div className={classes.bondeau}></div>
                <div className={classes.accountBannerContent}>
                    <div className={classes.accountBannerOverview}>
                                <div className={classes.overviewItem} key={-1}>
                                    <span className={classes.overviewValue}>
                                        <img src={nationality.src} width={15}/>
                                    </span>
                                    <span className={classes.overviewName}>{nationality.name}</span>
                                </div>
                            
                        {
                            overviews.map((overview,indx)=>(
                                <>
                                <div className={classes.dividerOverview}></div>
                                <div className={classes.overviewItem} key={indx}>
                                    <span className={classes.overviewValue}>{overview.value}</span>
                                    <span className={classes.overviewName}>{overview.name}</span>
                                </div>
                                </>
                            ))
                        }
                    </div>
                    <div className={classes.bannerProfile}>
                        <Rectongles />
                        <span className={classes.profileName}>معاذ محساس</span>
                        <span className={classes.profileJob}>UI / UX Researcher</span>
                    </div>
                    <div className={classes.bannerLinks}>
                        <Link className={classes.linkEditAccount}>
                            <span>تعديل الحساب</span>
                        </Link>
                        <ul className={classes.bannerSocialNetworks}>
                            <li className={`${classes.iconItem} ${classes.youtube}`}><FontAwesomeIcon icon={faYoutube} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.twitch}`}><FontAwesomeIcon icon={faTwitch} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.facebook}`}><FontAwesomeIcon icon={faFacebookSquare} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.dribble}`}><FontAwesomeIcon icon={faDribbble} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.instagram}`}><FontAwesomeIcon icon={faInstagram} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.discord}`}><FontAwesomeIcon icon={faDiscord} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.twitter}`}><FontAwesomeIcon icon={faTwitter} style={{color:"white"}}/></li>
                        </ul>

                    </div>
                </div>
            </div>
    )
}
