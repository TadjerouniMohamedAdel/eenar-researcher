import React from 'react'
import { Button } from '@material-ui/core'
import classes from './LearnNow.module.css'

export default function LearnNow() {
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
