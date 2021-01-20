import { IconButton } from '@material-ui/core'
import React,{useState} from 'react'
import classes from './ResumeSuccessItem.module.css'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
export default function ResumeSuccessItem({label,items,last}) {
    const [isExpanded,setIsExpanded] =useState(false)
    return (
        <div className={classes.successSection}>
                        <h3>
                            {label}
                            <IconButton onClick={()=>setIsExpanded(!isExpanded)}>
                                {
                                    isExpanded ?  <ExpandLessIcon style={{fontSize:28,color:"#3e3f5e"}} />: <ExpandMoreIcon style={{fontSize:28,color:"#3e3f5e"}} /> 
                                }
                            </IconButton>
                        </h3>
                        {
                            isExpanded ? (
                                <ul className={classes.successSectionNotExpanded}>
                                    {
                                        items.map((item,index)=>(
                                            <li key={`item=${label}-${index}`}>{item.name}</li>
                                        ))
                                    }
                                </ul>
                            ):(
                                <div className={classes.successSectionItems}>
                                    {
                                        items.map((item,index)=>(
                                            <div key={`item=${label}-${index}`} className={classes.successSectionItem}>
                                                <h3>{item.name}</h3>
                                                {item.startDate && <h4>{item.level ?? `${item.startDate} - ${item.endDate!==null?item.endDate :"مستمر"}`} {item.role} {item.status}</h4>}
                                                {item.date && <h4>{item.date}</h4>}
                                                {item.center && <h4>{item.center} {item.location ?? item.code}</h4>}
                                                {item.description && <span>{item.description}</span>}
                                            </div>

                                        ))
                                    }
                                </div>

                            )
                        }
                        {!last && <div className={classes.seccessSectionDevider}></div>}
                </div>
    )
}
