import React from 'react'
import { Button, Paper } from '@material-ui/core'
import classes from '../../styles/Registration.module.css'
export default function RegistrationChoice({choice}) {
    return (
        <Paper className={classes.registrationChoiceItem}>
            <div className={classes.choiceImg}>
                <img src={choice.img} />
            </div>
            <h2 className={classes.choiceTitle}>{choice.title}</h2>
            <p className={classes.choiceDescription}>
                {choice.description}
            </p>
            <div className={classes.hDivider}></div>
            <Button
                variant="contained"
                className={[classes.choiceButton,choice.type=="center" && classes.centerButton]}
            >
                <span>{choice.buttonLabel}</span>
            </Button>
        </Paper>
    )
}

