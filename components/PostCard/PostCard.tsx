import React from 'react'
import { IconButton } from '@material-ui/core'
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import classes from './PostCard.module.css'
import Link from 'next/link'
import { PostCardProps } from '../../utils/types/types';


const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Link href={`/researcher/researchs/${post.id}`}>
            <div className={classes.postCard}>
                <div className={classes.postImg}>
                    <img src="/images/post-placeholder.jpg" alt="" />
                </div>
                <div className={classes.postContent}>
                    <div className={classes.postInfo}>
                        <span className={classes.postType}>كتاب</span>
                        <h2>{post.arabicTitle}</h2>
                        <p>
                            {post.arabicDescription.substring(0, 200)}...
                        </p>
                    </div>
                </div>
                <div className={classes.postFooter}>
                    <div className={classes.postAuthor}>
                        <div className={classes.postAuthorImg}>
                            <img src="/images/male-placeholder.jpg" alt="" />
                        </div>
                        <h5>{post.primaryAuthor}</h5>
                    </div>
                    <div className={classes.postDownload}>
                        <a href={post.file} target="_blank" style={{ zIndex: 100000 }} onClick={(e) => e.stopPropagation()}>
                            <IconButton onClick={() => { }}>
                                <GetAppSharpIcon />
                            </IconButton>
                        </a>
                    </div>
                </div>

            </div>
        </Link>
    )
}
export default PostCard