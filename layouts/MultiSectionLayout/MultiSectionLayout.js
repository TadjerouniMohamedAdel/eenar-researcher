import { useState } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import BadgesCard from '../../components/BadgesCard/BadgesCard'
import LastArticles from '../../components/LastArticles/LastArticles'
import LearnNow from '../../components/LearnNow/LearnNow'
import MyGroups from '../../components/MyGroups/MyGroups'
import MyNetwork from '../../components/MyNetwork/MyNetwork'
import { dataarticles, datagroups, datausers } from '../../utils/fixtures/DevData'
import classes from './MultiSectionLayout.module.css'

export default function MultiSectionLayout({children,specificSections}) {
    
    return (
      <div className={classes.resumeContainer}>

        <div className={classes.sideSection}>
            {
                specificSections?.map((el)=>(
                    el
                ))
            }
          <BadgesCard />
          <MyNetwork  />
        </div>

        <div className={classes.mainSection}>
            {children}
        </div>
        <div className={classes.sideSection}>
          <LearnNow />
          <LastArticles  />
          <MyGroups  />
        </div>
      </div>
    )
}
