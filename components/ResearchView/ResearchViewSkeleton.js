import { Skeleton } from '@material-ui/lab';
import React from 'react'
import classes from './ResearchView.module.css'

export default function ResearchViewSkeleton() {
    
    
    return (
        <div className={classes.researchView}>
            <Skeleton className={classes.researchImageSkeleton} variant="rect" animation="wave" />
            <Skeleton className={classes.researchBodySkeleton} variant="rect" animation="wave"/>
        </div>
    )
}
