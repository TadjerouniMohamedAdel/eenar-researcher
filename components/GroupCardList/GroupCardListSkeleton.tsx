import classes from './GroupCardList.module.css'
import PublicIcon from '@material-ui/icons/Public';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { IconButton } from '@material-ui/core';
import Link from 'next/link'
import { Skeleton } from '@material-ui/lab';
import React from 'react'

const GroupCardListSkeleton:React.FC= ()=> {
    const Circle = () => (
        <div className={classes.circleWhite}>
            <Skeleton  variant="circle" className={classes.circleBlue} />
        </div>
    )

    const MemberCircle = () => (
        <div className={classes.memberCircleWhite}>
            <Skeleton  variant="circle" className={classes.memberCircleBlue}/>
        </div>
    )

    return (

        <div className={classes.card}>
            <div className={classes.groupInfo}>
            <div className={classes.bondeau}></div>
            <Circle />
                <div className={classes.info}>
                <h2><Skeleton variant="text" /></h2>
                <h3><Skeleton variant="text" /></h3>

                </div>
            </div>
            <div className={classes.groupStats}>
                <div className={classes.statItem}>
                    <div className={classes.statValue}><Skeleton variant="text" /></div>
                    <div className={classes.statLabel}><Skeleton variant="text" /></div>
                </div>

                <div className={classes.divider}></div>

                <div className={classes.statItem}>
                    <div className={classes.statValue}><Skeleton variant="text" /></div>
                    <div className={classes.statLabel}><Skeleton variant="text" /></div>
                </div>
                <div className={classes.divider}></div>
                <div className={classes.statItem}>
                    <div className={classes.statValue}><Skeleton variant="text" /></div>
                    <div className={classes.statLabel}><Skeleton variant="text" /></div>
                </div>
            </div>
            <div className={classes.members}>
                <MemberCircle />
                <MemberCircle />
                <MemberCircle />
                <MemberCircle />
                <MemberCircle />
                <MemberCircle />
            </div>
            <div className={classes.groupActions}>
                <div className={classes.groupPrivacy}>
                    <Skeleton variant="circle" />
                    
                </div>
                <Skeleton variant="circle" />
            </div>

        </div>

    )
}

export default GroupCardListSkeleton;