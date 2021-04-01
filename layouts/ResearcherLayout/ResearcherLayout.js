import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './ResearcherLayout.module.css'
import { motion } from 'framer-motion'

const easing = [0.6, -0.05, 0.01, 0.99];
const animLayout= {
    initial: { x: "-50vw", opacity: 0,transition:{ease:easing,duration: 0.6,delay:0.6}},
    animate: { x: 0, opacity: 1,transition:{ease:easing,duration: 0.6,delay:0.8}},
  };
  
export default function ResearcherLayout(props) {
    return (
        <div className={classes.mainLayoutContainer}>
        <Navbar />
       <div className={classes.mainLayoutBaseContent}>
           <Sidebar />
           <motion.main className={classes.mainContent} variants={animLayout} exit="initial" initial="initial" animate="animate">
               {props.children}
           </motion.main>
           
       </div>
    </div>
    )
}
