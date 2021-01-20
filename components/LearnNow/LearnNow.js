import React from 'react'
import { Button } from '@material-ui/core'
import classes from './LearnNow.module.css'

export default function LearnNow() {
    return (
        <div className={classes.learnNow}>
                    <div className={classes.learnNowTitle}>
                        <h1>سيّر عمليّة التخرج بفعاليّة أكبر</h1>
                    </div>
                    <Button
                        className={classes.learnNowButton}
                    >
                        تعلّم الآن
                    </Button>
                </div>
    )
}
