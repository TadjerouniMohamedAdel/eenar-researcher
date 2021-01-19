import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button, IconButton } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

import classes from './AboutMe.module.css'
export default function AboutMe({aboutme}) {
    return (
        <div className={classes.resumeAboutMe}>
                    <h2>
                        نبذة عني 
                        <IconButton>
                            <MoreHorizOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    <p className={classes.resumeAboutMeDescription}>
                        {aboutme.description}
                    </p>
                    <ul className={classes.resumeAboutMeInfo}>
                        <li><span className={classes.infoLabel}>الإنضمام</span><span className={classes.infoValue}>{aboutme.date}</span></li>
                        <li><span className={classes.infoLabel}>المدينة</span><span className={classes.infoValue}>{aboutme.city}</span></li>
                        <li><span className={classes.infoLabel}>المؤسسة</span><span className={classes.infoValue}>{aboutme.company}</span></li>
                        <li><span className={classes.infoLabel}>الوظيفة</span><span className={classes.infoValue}>{aboutme.job}</span></li>
                        <li><span className={classes.infoLabel}>الموقع</span><span className={`${classes.infoValue} ${classes.website}`}><a href={aboutme.webSite} target="_blank">{aboutme.webSite}</a></span></li>
                    </ul>
                    <Button className={classes.downloadResume}>
                        <span>حمل السيرة الذاتية</span>
                        <GetAppIcon />
                    </Button>
    </div>
    )
}
