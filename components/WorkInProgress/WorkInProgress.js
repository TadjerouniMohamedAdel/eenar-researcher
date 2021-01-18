import React from 'react'
import classes from './WorkInProgress.module.css'
export default function WorkInProgress(props) {
    return (
        <div className={classes.inProgressContainer}>
            <div className={classes.inProgressIllustration}>
                <img src="/images/in-progress.png" />
            </div>
            <h2>
                {`${props.menu} في قيد الإنجاز`}

                
            </h2>
        </div>
    )
}
