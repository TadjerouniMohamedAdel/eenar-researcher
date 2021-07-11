import React,{ Fragment } from 'react'
import LastArticles from '../../components/LastArticles/LastArticles'
import LearnNow from '../../components/LearnNow/LearnNow'
import MyGroups from '../../components/MyGroups/MyGroups'
import MyNetwork from '../../components/MyNetwork/MyNetwork'
import { dataarticles, datausers } from '../../utils/fixtures/DevData'
import { MultiSectionLayoutProps } from '../../utils/types/types'
import classes from './MultiSectionLayout.module.css'



const MultiSectionLayout:React.FC<MultiSectionLayoutProps> = ({ hasSection = true, children,specificSideSections=null })=> {
  const lastArticles = dataarticles
  const users = datausers

  return (
    <div className={classes.resumeContainer}>
      <div className={`${classes.mainSection} ${!hasSection && classes.onlySection}`}>
        {children}
      </div>
      {
        hasSection &&
        <div className={classes.sideSection}>
          {
              specificSideSections?.map((el, index) => (
                <Fragment key={`side-section-${index}`}>
                  {el}
                </Fragment>
              ))
            }
          <LearnNow />
          <LastArticles articles={lastArticles}/>
          <MyGroups />
          <MyNetwork users={users} />
        </div>
      }
    </div>
  )
}
export default MultiSectionLayout;