import React from 'react'
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkInProgress from '../../../../components/WorkInProgress/WorkInProgress'
import MyHead from '../../../../components/MyHead/MyHead'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import classes from '../../../../styles/Score.module.css'
import ScoreStatCard from '../../../../components/ScoreStatCard/ScoreStatCard'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})
const generalScoreStats = [
  {
    title: "المنشورات",
    unit: "%",
    value: 80,
    color: "red",
    description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
    offset: {
      increase: true,
      value: 8.2
    }
  },
  {
    title: "النقاشات",
    unit: "",
    value: "4:39",
    color: "orange",
    description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
    offset: {
      increase: false,
      value: 2.4
    }
  },
  {
    title: "القراءات",
    unit: "",
    value: 262,
    color: "green",
    description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
    offset: {
      increase: true,
      value: 3.6
    }
  },
  {
    title: "التحميلات",
    unit: "",
    value: 71,
    color: "blue",
    description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
  },
  {
    title: "التوصيات",
    unit: "%",
    value: 80,
    color: "black",
    description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
    offset: {
      increase: true,
      value: 8.2
    }
  }
]
const summarizeScoreStats=[
  {
    label:"الزيارات",
    value:1.067,
    unit:""
  },
  {
    label:"المشاهدات",
    value:298,
    unit:""
  },
  {
    label:"معدل الزيارات",
    value:34.4,
    unit:""
  },
  {
    label:"معدل المشاهدات",
    value:9.6,
    unit:""
  },
  {
    label:"الزيارات / جويلية 2020",
    value:26.3,
    unit:"%"
  },
  {
    label:"المشاهدات / جويلية 2020",
    value:4.9,
    unit:"%"
  },
]
export default function index() {
  
  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - الرصيد" />
      {/* <WorkInProgress menu="الرصيد" /> */}
      <div className={classes.scoreContainer}>
        <div className={classes.scoreGeneralStats}>
          {
            generalScoreStats.map((score, index) => (
              <ScoreStatCard
                key={`index=${index}`}
                score={score}
              />
            ))
          }
        </div>
        <div className={classes.monthStats}>
          <div className={classes.monthStatsHeader}>
            <h1>
              التقرير الشهري
                </h1>
            <div className={classes.monthStatsHeaderControl}>
              <div className={classes.statColor}>
                <span></span>
                <span>الزيارات</span>
              </div>
              <div className={classes.statColor}>
                <span></span>
                <span>المشاهدات</span>
              </div>
              <div className={classes.monthSwitcher}>
                <span>
                  أوت 2020
              </span>
                <ExpandMoreIcon className={classes.switchIcon}/>
              </div>
            </div>

          </div>
            <div className={classes.chartStat}>
              <h1>chart Stat</h1>
              
            </div>
            <div className={classes.monthSummarize}>
              {
                summarizeScoreStats.map((stat,index)=>(
                  <div key={`summarize-score-stats-${index}`} className={classes.monthSummarizeItem}> 
                      <span className={classes.monthSummarizeItemValue}>
                          {stat.value}
                          {stat.unit}
                      </span>
                      <span className={classes.monthSummarizeItemLabel}>
                        {stat.label}
                      </span>
                  </div>
                ))
              }
            </div>

        </div>
        {/* <div className={classes.rowStats}>
              
          </div> */}
      </div>
    </ResearcherAccountLayout>
  )
}
