import React,{ useState, Fragment } from 'react'
import BadgesCard from '../../components/BadgesCard/BadgesCard'
import LastArticles from '../../components/LastArticles/LastArticles'
import LearnNow from '../../components/LearnNow/LearnNow'
import MyGroups from '../../components/MyGroups/MyGroups'
import MyNetwork from '../../components/MyNetwork/MyNetwork'
import { MultiSectionLayoutProps } from '../../utils/types/types'
import classes from './MultiSectionLayout.module.css'



const MultiSectionLayout:React.FC<MultiSectionLayoutProps> = ({ hasSection = true, hasTwoSection = false, children, specificSections=null })=> {

  return (
    <div className={classes.resumeContainer}>
      {
        hasTwoSection && (
          <div className={classes.sideSection}>
            {
              specificSections?.map((el, index) => (
                <Fragment key={`section-${index}`}>
                  {el}
                </Fragment>
              ))
            }
            <BadgesCard />
            <MyNetwork />
          </div>

        )
      }

      <div className={`${classes.mainSection} ${!hasSection && classes.onlySection}`}>
        {children}
      </div>
      {
        hasSection &&
        <div className={classes.sideSection}>
          <LearnNow />
          <LastArticles />
          <MyGroups />
          <MyNetwork />
        </div>

      }
    </div>
  )
}
export default MultiSectionLayout;