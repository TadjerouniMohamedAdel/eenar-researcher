import { IconButton } from '@material-ui/core'
import React from 'react'
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import classes from './PostCard.module.css'
import { Skeleton } from '@material-ui/lab';
export default function PostCardSkeleton() {
    return (
            <div className={`${classes.postCard} ${classes.postCardSkeleton}`}>
                 <div className={classes.postImg}>
                    <Skeleton variant="rect"   />
                </div>
                <div className={classes.postContent}>
                    <div className={classes.postInfo}>
                        <Skeleton className={classes.postType} />
                       <Skeleton variant="text" />
                        <Skeleton variant="rect" height={100}/>
                    </div>
                    <div className={classes.postFooter}>
                        <Skeleton  variant="rect"  className={classes.footerSekeleton}/>
                    </div>

                </div>
            </div>
    )
}
