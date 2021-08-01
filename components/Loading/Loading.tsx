import React, { useEffect } from 'react'
import classes from './Loading.module.css'
import lottie from 'lottie-web'

/**
    Animated illustration for loading 
**/
const Loading: React.FC = () => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById("anim")!, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/loading.json' // the path to the animation json
        });

    }, [])
    return (
        <div className={classes.LoadingContainer}>
            <div id="anim"></div>
            <h1>منتدى كوالالمبور
                <br />
                شبكة الباحثين

            </h1>
        </div>
    )
}

export default Loading;