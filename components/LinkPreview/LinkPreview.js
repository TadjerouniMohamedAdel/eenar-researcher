import { useState, useEffect } from 'react'
import classes from './LinkPreview.module.css'
import axios from 'axios'
export default function LinkPreview({link}) {
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        axios({
            url:"https://fierce-anchorage-09030.herokuapp.com/",
            method:"POST",
            data:{link}
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }, [])

    return (
        <div className={classes.linkPreviewCard}>
            <div className={classes.linkPreviewImage}></div>
            <div className={classes.linkContent}>
                <h2>الرابط على لينكيد إن</h2>
                <p>
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم 
                </p>
                <span>LinkedIn.com</span>
            </div>
        </div>
    )
}
