import React,{ Fragment } from 'react'
import LastArticles from '../../components/LastArticles/LastArticles'
import LearnNow from '../../components/LearnNow/LearnNow'
import MyGroups from '../../components/MyGroups/MyGroups'
import MyNetwork from '../../components/MyNetwork/MyNetwork'
import { dataarticles, datausers } from '../../utils/fixtures/DevData'
import { MultiSectionLayoutProps } from '../../utils/types/types'
import classes from './MultiSectionLayout.module.css'
import useGetList from '../../utils/hooks/useGetList';
import { Group } from '../../utils/types/types';
import CalendarCard from '../../components/CalendarCard/CalendarCard'


const MultiSectionLayout:React.FC<MultiSectionLayoutProps> = ({ hasSection = true, children,specificSideSections=null })=> {
  const lastArticles = dataarticles
  const users = datausers
  const { isLoading, data, error } = useGetList<{groups:Group[],maxPages:number}>("groups", `/groups/all`, 5, 0, null, null)

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
          <CalendarCard />
          <LastArticles articles={lastArticles}/>
          <MyGroups isLoading={isLoading} groups={data?.groups} />
          <MyNetwork users={users} />
        </div>
      }
    </div>
  )
}
export default MultiSectionLayout;