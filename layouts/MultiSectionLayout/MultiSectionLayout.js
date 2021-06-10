import { useState, Fragment } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import BadgesCard from '../../components/BadgesCard/BadgesCard'
import LastArticles from '../../components/LastArticles/LastArticles'
import LearnNow from '../../components/LearnNow/LearnNow'
import MyGroups from '../../components/MyGroups/MyGroups'
import MyNetwork from '../../components/MyNetwork/MyNetwork'
import { dataarticles, datagroups, datausers } from '../../utils/fixtures/DevData'
import classes from './MultiSectionLayout.module.css'
import PropTypes from 'prop-types';

export default function MultiSectionLayout({ hasTwoSection = true, children, specificSections }) {

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

      <div className={classes.mainSection}>
        {children}
      </div>
      <div className={classes.sideSection}>
        <LearnNow />
        <LastArticles />
        <MyGroups />
      </div>
    </div>
  )
}
MultiSectionLayout.prototype = {
  hasTwoSection: PropTypes.bool,
  children: PropTypes.node.isRequired,
  specificSections: PropTypes.node
}
