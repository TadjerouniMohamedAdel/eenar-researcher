import React,{useEffect} from 'react'
import classes from './WorkInProgress.module.css'
import lottie from 'lottie-web'

export default function WorkInProgress(props) {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById("anim-teamwork"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/teamwork.json' // the path to the animation json
          });
        
      }, [])
    return (
        <div className={classes.inProgressContainer}>
            <div className={classes.inProgressIllustration}>
            <div id="anim-teamwork"></div>
            </div>
            <h2>
                {`${props.menu} في قيد الإنجاز`}

                
            </h2>
        </div>
    )
}
