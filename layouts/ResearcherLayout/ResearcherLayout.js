import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './ResearcherLayout.module.css'

export default function ResearcherLayout(props) {
    return (
        <div className={classes.mainLayoutContainer}>
        <Navbar />
       <div className={classes.mainLayoutBaseContent}>
           <Sidebar />
           <main className={classes.mainContent}>
               {props.children}
           </main>
           
       </div>
    </div>
    )
}
