import React from 'react'
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkInProgress from '../../../../components/WorkInProgress/WorkInProgress'
import MyHead from '../../../../components/MyHead/MyHead'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import classes from '../../../../styles/Score.module.css'
import ScoreStatCard from '../../../../components/ScoreStatCard/ScoreStatCard'


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})
const generalScoreStats = [
  {
    title:"المنشورات",
    unit:"%",
    value:80,
    color:"red",
    description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
    offset:{
      increase:true,
      value:8.2
    }
  },
  {
    title:"النقاشات",
    unit:"",
    value:"4:39",
    color:"orange",
    description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
    offset:{
      increase:false,
      value:2.4
    }
  },
  {
    title:"القراءات",
    unit:"",
    value:262,
    color:"green",
    description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
    offset:{
      increase:true,
      value:3.6
    }
  },
  {
    title:"التحميلات",
    unit:"",
    value:71,
    color:"blue",
    description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
  },
  {
    title:"التوصيات",
    unit:"%",
    value:80,
    color:"black",
    description:"لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
    offset:{
      increase:true,
      value:8.2
    }
  }
]
export default function index() {
  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - الرصيد" />
      {/* <WorkInProgress menu="الرصيد" /> */}
      <div className={classes.scoreContainer}>
          <div className={classes.scoreGeneralStats}>
              {
                generalScoreStats.map((score,index)=>(
                  <ScoreStatCard
                    key={`index=${index}`}  
                    score={score}
                    />
                ))
              }
          </div>
          {/* <div className={classes.monthStats}>
              
          </div> */}
          {/* <div className={classes.rowStats}>
              
          </div> */}
      </div>
    </ResearcherAccountLayout>
  )
}
