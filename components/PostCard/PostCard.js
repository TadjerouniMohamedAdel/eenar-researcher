import { IconButton } from '@material-ui/core'
import React from 'react'
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import classes from './PostCard.module.css'
export default function PostCard({post}) {
    return (
        <div className={classes.postCard}>
            <div className={classes.postImg}>
            </div>
            <div className={classes.postContent}>
                <div className={classes.postInfo}>
                    <h2>{post.title}</h2>
                    <p>
                        {post.description}
                    </p>
                </div>
                <div className={classes.postFooter}>
                    <div className={classes.postAuthor}>
                        <div className={classes.postAuthorImg}></div>
                        <h5>{post.author}</h5>
                    </div>
                    <div className={classes.postDownload}>
                        <IconButton>
                            <GetAppSharpIcon />
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    )
}
