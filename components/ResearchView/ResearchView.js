import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import classes from './ResearchView.module.css'
import { format } from 'date-fns'
import arLocale from 'date-fns/locale/ar-DZ'
export default function ResearchView({ research }) {
   console.log(research)
    return (
        <div className={classes.researchView}>
            <div className={classes.researchImage}>
                <img src={`${research.image || "/images/post-placeholder.jpg"}`} alt="" />
            </div>
            <div className={classes.researchBody}>
                <div className={classes.researchBodyHeader}>
                    <h1>{research.arabicTitle}</h1>
                    {/* <div className={classes.researchBodyHeaderAction}>
                        <IconButton onClick={()=>{}}>
                            <i class={`ri-edit-line ${classes.editIcon}`}></i>
                        </IconButton>
                        <IconButton onClick={()=>{}}>
                            <i class={`ri-delete-bin-line ${classes.deleteIcon}`}></i>
                        </IconButton>
                    </div> */}
                </div>
                <div className={classes.researchBodyContent}>
                    {
                        research.publishedDate||research.startDate &&(
                            <span className={classes.secondaryInfo}>
                            {format(new Date(research.publishedDate||research.startDate), "dd MMMM yyyy", { locale: arLocale })}
                            </span>

                        )
                    }
                    <span className={classes.secondaryInfo}>
                        {research.publishedBy}
                    </span>
                    <div className={classes.authors}>
                        <h2>المؤلفون</h2>
                        {
                            research.authorArabicNames.map((name,index)=>(
                                <span className={classes.author} key={`author-name-${index}-${name}`}>{name}</span>
                            ))
                        }
                    </div>
                    <div className={classes.links}>
                        <a href={research.file} target="_blank"  className={classes.downloadLink}>
                            <i class="ri-download-2-fill"></i>
                            <span>
                                تحميل المقال    
                            </span>
                        </a>
                        <a href="javascript:void(0);" className={classes.gotToLink}>
                            <i class="ri-link"></i>
                            <span>
                                فتح الرابط
                            </span>
                        </a>
                    </div>
                    <div className={classes.summarize}>
                            <h2>ملخص المنشور</h2>
                            <p>
                                {research.arabicDescription}
                            </p>
                    </div>
                    <div className={classes.keywords}>
                        {
                            research.keywords.map((keyword,index)=>(
                                <div className={classes.keyword} key={`keyword-${index}`}>
                                    {keyword}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}