import React from 'react'
import { IconButton } from '@material-ui/core';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import classes from './BadgesCard.module.css'
export default function BadgesCard({badges}) {
    return (
        <div className={classes.resumeBadges}>
        <h2>
            الأوسمة                            
            <IconButton>
                <MoreHorizOutlinedIcon className={classes.actionSectionIcon}/>
            </IconButton>
        </h2>
        <div className={classes.resumeBagesImages}>
            {badges.map((badge,index)=>(
                <img key={`badges-${index}`} alt="" src={badge.imageSrc} />

            ))}

        </div>
    </div>
    )
}
