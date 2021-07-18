import React,{ useEffect } from 'react'
import lottie from 'lottie-web'
import classes from './Error500.module.css'

const Error500:React.FC=()=> {
    const id =Math.random();
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById(`anim-500-${id}`)!, // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '/animations/500.json' // the path to the animation json
          });
        
      }, [])
    
    
    return (
        <div className={classes.error500Container}>
            <div className={classes.error500Anim}>
                <div id={`anim-500-${id}`}></div>
            </div>
            <h2>
            خلل تقني سيتم معالجته
            </h2>
        </div>
    )
}
export default Error500