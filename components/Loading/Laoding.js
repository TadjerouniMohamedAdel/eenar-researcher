import {useEffect} from 'react'
import classes from './Loading.module.css'
import lottie from 'lottie-web'
export default function Laoding() {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById("anim"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/loading.json' // the path to the animation json
          });
        
      }, [])
    return (
        <div className={classes.laodingContainer}>
            <div id="anim"></div>   
            <h1>منتدى كوالالمبور
                <br/>
                شبكة الباحثين

            </h1>
        </div>
    )
}
