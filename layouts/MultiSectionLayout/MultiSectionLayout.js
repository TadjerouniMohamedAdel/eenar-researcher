import { useState, Fragment } from 'react'
import BadgesCard from '../../components/BadgesCard/BadgesCard'
import LastArticles from '../../components/LastArticles/LastArticles'
import LearnNow from '../../components/LearnNow/LearnNow'
import MyGroups from '../../components/MyGroups/MyGroups'
import MyNetwork from '../../components/MyNetwork/MyNetwork'
import { dataarticles, datagroups, datausers } from '../../utils/fixtures/DevData'
import classes from './MultiSectionLayout.module.css'
import PropTypes from 'prop-types';

export default function MultiSectionLayout({ hasSection = true, hasTwoSection = false, children, specificSections }) {

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
MultiSectionLayout.prototype = {
  hasTwoSection: PropTypes.bool,
  hasSection: PropTypes.bool,
  children: PropTypes.node.isRequired,
  specificSections: PropTypes.node
}
