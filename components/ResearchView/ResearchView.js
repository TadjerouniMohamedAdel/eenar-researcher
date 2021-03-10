import { Button } from '@material-ui/core'
import React from 'react'
import classes from './ResearchView.module.css'
import GetAppIcon from '@material-ui/icons/GetApp';
import moment from "moment";

export default function ResearchView({research}) {
    moment.locale("ar-dz");
    const Circles = ()=>(
        <div className={classes.circleWhite}>
            <div className={classes.circleBlue}></div>
        </div>
    )
    
    
    return (
        <div className={classes.researchView}>
            <div className={classes.researchImage}>
            </div>
            <div className={classes.researchBody}>
                <div className={classes.researchHeader}>
                    <div className={classes.researchAuthor}>
                            <div className={classes.researchAuthorImage}>
                                <Circles />
                            </div>
                            <div className={classes.researchAuthorInfo}>
                                <h2>{research.primaryAuthor}</h2>
                                <span>باحث ومحاضر في الدراسات الإسلامية </span>
                            </div>
                    </div>
                    <div className={classes.researchDownload}>
                        <a href={research.file} target="_blink">
                            <Button 
                                endIcon={<GetAppIcon className={classes.downloadIcon}/>}
                                variant="text"
                            >
                                    <span className={classes.downloadLabel}> تحميل البحث</span> 
                            </Button>

                        </a>
                    </div>
                </div>
                <div className={classes.researchHeaderDivider}>
                    <div className={classes.line}></div>
                    <span className={classes.date}>
                        {research.publishedDate && moment(research.publishedDate?.split("T")[0]).format("DD MMM YYYY")}
                        {research.startDate && moment(research.startDate?.split("T")[0]).format("DD MMM YYYY")}
                    </span>
                </div>
                <div className={classes.researchContent}>
                    <h1>
                        {research.arabicTitle}
                    </h1>
                    <p>
                        {research.arabicDescription}
                    </p>
                    <p>
                        {research.englishDescription}
                    </p>
                    <div className={classes.researchRest}>
                        <p>
                            {research.steps}
                        </p>
                        <p>
                            {research.goals ?? research.arabicDescription}
                        </p>
                        <div className={classes.researchImg}></div>
                        <span className={classes.researchImgLegend}>
                                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت
                        </span>
                        <p>
                            {research.justifications ?? research.arabicDescription}
                        </p>
                        <p>
                            {research.materials }
                        </p>
                        <p>
                            {research.methodology}
                        </p>
                        <p>
                            {research.previousStudies}
                        </p>
                        <div className={classes.researchKeywords}>
                            {
                                research.keywords?.map((keyword,index)=>(
                                    <span key={`keyword-${index}`} className={classes.researchKeyword}>{keyword}</span>

                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={classes.researchFooter}>
                    <a href={research.file} target="_blink">
                        <Button 
                            variant="contained"
                            className={classes.downloadResearch}
                            endIcon={<GetAppIcon />}
                        >
                            تحميل البحث
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
