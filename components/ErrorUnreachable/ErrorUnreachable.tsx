import React,{ useEffect } from 'react'
import lottie from 'lottie-web'
import classes from './ErrorUnreachable.module.css'

const ErrorUnreachable:React.FC = ()=> {
    const id =Math.random();
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById(`anim-unreachable-${id}`)!, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/unreachable.json' // the path to the animation json
          });
        
      }, [])
    
    
    return (
        <div className={classes.errorUnreachableContainer}>
            <div className={classes.errorUnreachableAnim}>
                <div id={`anim-unreachable-${id}`}></div>
            </div>
            <h2>
            لا يمكن الوصول إلى هذه المعلومة
            </h2>
        </div>
    )
}

export default ErrorUnreachable
