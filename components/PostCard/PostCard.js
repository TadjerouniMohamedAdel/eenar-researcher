import { IconButton } from '@material-ui/core'
import React from 'react'
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import classes from './PostCard.module.css'
import Link from 'next/link' 
export default function PostCard({post}) {
    return (
        <Link href="/researcher/researchs">    
            <div className={classes.postCard}>
                <div className={classes.postImg}>
                </div>
                <div className={classes.postContent}>
                    <div className={classes.postInfo}>
                        <span className={classes.postType}>{post.type}</span>
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
        </Link>
    )
}
