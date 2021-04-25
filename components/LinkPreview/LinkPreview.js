import { useState, useEffect } from 'react'
import classes from './LinkPreview.module.css'

export default function LinkPreview() {
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
