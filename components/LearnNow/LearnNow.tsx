import React from 'react'
import { Button } from '@material-ui/core'
import classes from './LearnNow.module.css'

/**
    Card section to dispay an ad
 **/

const LearnNow:React.FC= () => {
    return (
        <div className={classes.learnNow}>
            <div className={classes.learnNowTitle}>
                <img src="/images/learnmore-placeholder.jpg" alt="" />
                <h1>سيّر عمليّة التخرج بفعاليّة أكبر</h1>
            </div>
            <Button
                onClick={() => { }}
                className={classes.learnNowButton}
            >
                تعلّم الآن
            </Button>
        </div>
    )
}

export default LearnNow