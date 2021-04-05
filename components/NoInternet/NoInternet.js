import React from 'react'
import lottie from 'lottie-web'
import classes from './NoInternet.module.css'

export default function NoInternet(props) {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById("anim-no-internet"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/no-internet.json' // the path to the animation json
          });
        
      }, [])
    
    
    return (
        <div className={classes.noInternetContainer}>
            <div className={classes.noInternetAnim}>
                <div id="anim-no-internet"></div>
            </div>
            <h2>
                {`${props.menu} في قيد الإنجاز`}

                
            </h2>
        </div>
    )
}
