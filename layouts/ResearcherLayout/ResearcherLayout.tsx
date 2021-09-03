import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './ResearcherLayout.module.css'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useUser } from '../../utils/hooks/useUser'
import { LayoutProps } from '../../utils/types/types'
import { RootState } from '../../redux/store2'

/**
    The layout of the resarcher pages  
**/

const ResearcherLayout: React.FC<LayoutProps> = ({ children }) => {
    const user = useSelector((state: RootState) => state.user)
    useUser({ redirectTo: "/login", redirectIfFound: null })
    const easing = [0.6, -0.05, 0.01, 0.99];
    const animLayout = {
        initial: { x: "-50vw", opacity: 0, transition: { ease: easing, duration: 0.6, delay: 0.6 } },
        animate: { x: 0, opacity: 1, transition: { ease: easing, duration: 0.6, delay: 0.8 } },
    };

    return (
        <div className={classes.mainLayoutContainer}>
            <Navbar user={user}/>
            <div className={classes.mainLayoutBaseContent}>
                <Sidebar user={user} />
                <motion.main className={classes.mainContent} variants={animLayout} exit="initial" initial="initial" animate="animate">
                    {children}
                </motion.main>

            </div>
        </div>
    )
}

export default ResearcherLayout
