import React,{useEffect} from 'react'
import classes from './EmptyList.module.css'
import lottie from 'lottie-web'

export default function EmptyList() {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById("anim-empty"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/empty.json' // the path to the animation json
          });
        
      }, [])
    return (
        <div className={classes.emptyContainer}>
            <div className={classes.emptyIllustration}>
            <div id="anim-empty"></div>
            </div>
            <h2>
                لا تحتوي هذه القائمة على بيانات
            </h2>
        </div>
    )
}
