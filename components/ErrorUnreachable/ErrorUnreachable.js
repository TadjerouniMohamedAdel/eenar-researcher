import React,{ useEffect } from 'react'
import lottie from 'lottie-web'
import classes from './ErrorUnreachable.module.css'

export default function ErrorUnreachable(props) {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById("anim-unreachable"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/unreachable.json' // the path to the animation json
          });
        
      }, [])
    
    
    return (
        <div className={classes.errorUnreachableContainer}>
            <div className={classes.errorUnreachableAnim}>
                <div id="anim-unreachable"></div>
            </div>
            <h2>
            لا يمكن الوصول إلى هذه المعلومة
            </h2>
        </div>
    )
}
