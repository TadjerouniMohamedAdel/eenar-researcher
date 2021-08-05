import { Button } from '@material-ui/core'
import React from 'react'
import classes from './ResearchView.module.css'
import GetAppIcon from '@material-ui/icons/GetApp';
import { format } from 'date-fns'
import arLocale from 'date-fns/locale/ar-DZ'

export default function ResearchView({ research }) {
    const Circles = () => (
        <div className={classes.circleWhite}>
            <div className={classes.circleBlue}></div>
        </div>
    )
    const researcher = research.researcherPost ?? research.researchProjectsResearcher
    return (
        <div className={classes.researchView}>
            <div className={classes.researchImage}>
                <img src="/images/post-placeholder.jpg" alt="" />
            </div>
            <div className={classes.researchBody}>
                <div className={classes.researchHeader}>
                    <div className={classes.researchAuthor}>
                        <div className={classes.researchAuthorImage}>
                            {
                                researcher.userResearcher.image ? (
                                    <img src={researcher.userResearcher.image} alt="" className={classes.circleWhite} />
                                )
                                    : (
                                        <Circles />
                                    )
                            }
                        </div>
                        <div className={classes.researchAuthorInfo}>
                            <h2>{researcher.userResearcher.firstname} {researcher.userResearcher.lastname}</h2>
                            <span>{researcher.userResearcher.job}</span>
                        </div>
                    </div>
                    <div className={classes.researchDownload}>
                        <a href={research.file} target="_blink">
                            <Button
                                endIcon={<GetAppIcon className={classes.downloadIcon} />}
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
                        {research.publishedDate && format(new Date(research.publishedDate), "dd MMMM yyyy", { locale: arLocale })}
                        {research.startDate && format(new Date(research.startDate), "dd MMMM yyyy", { locale: arLocale })}
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
                        <div className={classes.researchImg}>
                            <img src="/images/post-placeholder.jpg" alt="" />
                        </div>
                        <span className={classes.researchImgLegend}>
                            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت
                        </span>
                        <p>
                            {research.justifications ?? research.arabicDescription}
                        </p>
                        <p>
                            {research.materials}
                        </p>
                        <p>
                            {research.methodology}
                        </p>
                        <p>
                            {research.previousStudies}
                        </p>
                        <div className={classes.researchKeywords}>
                            {
                                research.keywords?.map((keyword, index) => (
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