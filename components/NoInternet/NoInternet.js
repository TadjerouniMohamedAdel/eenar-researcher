import React,{ useEffect } from 'react'
import lottie from 'lottie-web'
import classes from './NoInternet.module.css'

export default function NoInternet(props) {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById("anim-no-internet"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/no-internet-connextion.json' // the path to the animation json
          });
        
      }, [])
    
    
    return (
        <div className={classes.noInternetContainer}>
            <div className={classes.noInternetAnim}>
                <div id="anim-no-internet"></div>
            </div>
        </div>
    )
}
