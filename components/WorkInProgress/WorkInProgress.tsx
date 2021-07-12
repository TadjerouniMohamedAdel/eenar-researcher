import React,{useEffect} from 'react'
import classes from './WorkInProgress.module.css'
import lottie from 'lottie-web'
import { WorkInProgressProps } from '../../utils/types/types'

export const WorkInProgress:React.FC<WorkInProgressProps> = ({menu})=> {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById("anim-teamwork")!, // the dom element that will contain the animation
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
                {`${menu}  قيد الإنجاز`}

                
            </h2>
        </div>
    )
}
export default WorkInProgress