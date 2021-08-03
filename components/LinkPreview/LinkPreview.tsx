import React from 'react'
import classes from './LinkPreview.module.css'

/**
    Card section to dispay link's preview data such:

    - image
    - title
    - description
    - website

**/
const LinkPreview: React.FC = () => {

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
export default LinkPreview;