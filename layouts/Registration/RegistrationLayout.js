import React from 'react'
import classes from '../../styles/Registration.module.css'

export default function RegistartionLayout(props) {
    return (
        <div className={classes.registrationContainer}>
            <div className={classes.registrationHeader}>
                <div>
                    <img src="/images/colored-logo.png" width={50}/>
                </div>
                <h2>منتدى كوالالمبور<br/>شبكة الباحثين</h2>
            </div>
            <div className={classes.registrationTitle}>
                <h1>التسجيل في المنصة</h1>
            </div>
            <div className={classes.registrationContent}>
                {props.children}
            </div>
        </div>
    )
}
