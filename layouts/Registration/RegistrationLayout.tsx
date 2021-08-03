import React from 'react'
import MyHead from '../../components/MyHead/MyHead'
import classes from '../../styles/Registration.module.css'
import { LayoutProps } from '../../utils/types/types'

/**
    The layout of the registation pages
**/
const RegistartionLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={classes.registrationContainer}>
            <MyHead title="التسجيل في المنصة" />
            <div className={classes.registrationHeader}>
                <div>
                    <img src="/images/logoAdmin2.png" width={50} />
                </div>
                <h2>منتدى كوالالمبور<br />شبكة الباحثين</h2>
            </div>
            <div className={classes.registrationTitle}>
                <h1>التسجيل في المنصة</h1>
            </div>
            <div className={classes.registrationContent}>
                {children}
            </div>
        </div>
    )
}

export default RegistartionLayout;