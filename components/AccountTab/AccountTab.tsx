import React,{ useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import {useRouter} from 'next/router'
import classes from './AccountTab.module.css'
const tabs = [
    {
        name:"الحائط",
        icon:()=>(<HomeOutlinedIcon />),
        to:"wall"
    },
    {
        name:"الرصيد",
        icon:()=>(<AssessmentOutlinedIcon />),
        to:"score"
    },
    {
        name:"السيرة الذاتية",
        icon:()=>(<AccountBoxOutlinedIcon />),
        to:"resume"
    },
    
    {
        name:"منشوراتي",
        icon:()=>(<AssignmentOutlinedIcon />),
        to:"posts"
    },
    {
        name:"مشاريعي",
        icon:()=>(<CardTravelOutlinedIcon />),
        to:"projects"
    },
    {
        name:"شبكتي",
        icon:()=>(<PublicOutlinedIcon />),
        to:"network"
    },
]
const AccountTab:React.FC=()=> {
    const router = useRouter()
    const index = tabs.findIndex(item=>item.to === router?.pathname.split("/researcher/account/")[1])
    const [value, setValue] = useState(index >=0?index:0);
    
    
    const handleChange = (event:React.ChangeEvent<{}>, newValue:number) => {
        setValue(newValue);
      };
    
    
    /** Go to tab menu */
    const redirectTab = (to:string)=>{
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
                    tabs.map((tab,index)=>(
                            <Tab key={tab.name} onClick={()=>redirectTab(tab.to)} icon={tab.icon()} label={<span className={classes.tabLabel}>{tab.name}</span>}/>


                    ))
                }
                
            </Tabs>
    </Paper>
    )
}

export default AccountTab