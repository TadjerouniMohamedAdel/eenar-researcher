import { IconButton } from '@material-ui/core'
import React from 'react'
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import classes from './PostCard.module.css'
import Link from 'next/link' 
export default function PostCard({post}) {
    return (
        <Link href={`/researcher/researchs/${post.id}`}>    
            <div className={classes.postCard}>
                <div className={classes.postImg}>
                </div>
                <div className={classes.postContent}>
                    <div className={classes.postInfo}>
                        <span className={classes.postType}>كتاب</span>
                        <h2>{post.arabicTitle}</h2>
                        <p>
                            {post.arabicDescription.substring(0,200)}...
                        </p>
                    </div>
                    <div className={classes.postFooter}>
                        <div className={classes.postAuthor}>
                            <div className={classes.postAuthorImg}></div>
                            <h5>{post.primaryAuthor}</h5>
                        </div>
                        <div className={classes.postDownload}>
                            <a href={post.file} target="_blank" style={{zIndex:100000}} onClick={(e)=>e.stopPropagation()}>
                                <IconButton>
                                    <GetAppSharpIcon />
                                </IconButton>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    )
}
