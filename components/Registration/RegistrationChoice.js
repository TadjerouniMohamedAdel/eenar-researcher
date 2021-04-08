import {useEffect} from 'react'
import { Button, Paper } from '@material-ui/core'
import classes from '../../styles/Registration.module.css'
import { useRouter } from 'next/router'
import lottie from 'lottie-web'
import Link from 'next/link'

export default function RegistrationChoice({choice}) {
    const router = useRouter()

    const handleClickChoice = ()=>{
        router.push(choice.link)
    }
    

    useEffect(()=>{
        lottie.loadAnimation({
            container: document.getElementById(`anim-${choice.type}`), // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: choice.img // the path to the animation json
          });
    },[])
    
    return (
        <Link href={choice.link}>
            <Paper className={classes.registrationChoiceItem}>
                <div className={classes.choiceImg}>
                    <div id={`anim-${choice.type}`}></div>
                </div>
                <h2 className={classes.choiceTitle}>{choice.title}</h2>
                <p className={classes.choiceDescription}>
                    {choice.description}
                </p>
                <div className={classes.hDivider}></div>
                <Button
                    variant="contained"
                    onClick={handleClickChoice}
                    className={[classes.choiceButton,choice.type=="center" && classes.centerButton]}
                    >
                    <span>{choice.buttonLabel}</span>
                </Button>
            </Paper>
        </Link>
    )
}

