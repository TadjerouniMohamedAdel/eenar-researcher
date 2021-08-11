import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useRouter } from 'next/router'
import classes from './AccountTab.module.css'
import { tabs } from './tabs';

/**
    Tab navigation to switch between Researcher account's pages: 

    - Wall : Reseacher's activity (posting,reacting,comments....)
    - Score date: Detailed stats about researcher's resume (educations,experiences,honors,projects,patents,volunteering,languages,....)
    - Resume: All information about Researcher'curriculum. 
    - Posts: List of research post created by the current researcher
    - Projects List of research project created by the current researcher
    - Network: List of researcher's groups
**/

const AccountTab: React.FC = () => {
    const router = useRouter()
    const index = tabs.findIndex(item => item.to === router?.pathname.split("/researcher/account/")[1])
    const [value, setValue] = useState(index >= 0 ? index : 0);


    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };


    /** Go to tab menu */
    const redirectTab = (to: string) => {
        router.push(`/researcher/account/${to}`)
    }


    return (
        <Paper className={classes.accountTabs}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="secondary"
                textColor="secondary"
            >
                {
                    tabs.map((tab, index) => (
                        <Tab key={tab.name} onClick={() => redirectTab(tab.to)} icon={tab.icon()} label={<span className={classes.tabLabel}>{tab.name}</span>} />


                    ))
                }

            </Tabs>
        </Paper>
    )
}

export default AccountTab