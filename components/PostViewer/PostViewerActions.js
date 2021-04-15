import { useState } from 'react'
import { Button, IconButton } from '@material-ui/core';
import classes from './PostViewer.module.css'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import PostViewerHeader from './PostViewerHeader';
import PostViewerStats from './PostViewerStats';

export default function PostViewerActions() {
    return (
        <div className={classes.postActions}>
            <Button onClick={() => { }} className={`${classes.postActionItem} ${classes.likeButton}`}>
                <ThumbUpAltOutlinedIcon className={classes.buttonIcon} />
                <span className={classes.buttonLabel}>أعجبني</span>
            </Button>
            <ul className={classes.reactionList}>
                <li><IconButton><img src="/images/reactions/like.png" alt="" /></IconButton></li>
                <li><IconButton><img src="/images/reactions/love.png" alt="" /></IconButton></li>
                <li><IconButton><img src="/images/reactions/care.png" alt="" /></IconButton></li>
                <li><IconButton><img src="/images/reactions/haha.png" alt="" /></IconButton></li>
                <li><IconButton><img src="/images/reactions/wow.png" alt="" /></IconButton></li>
                <li><IconButton><img src="/images/reactions/angry.png" alt="" /></IconButton></li>
                <li><IconButton><img src="/images/reactions/sad.png" alt="" /></IconButton></li>
            </ul>
            <Button onClick={() => { }} className={classes.postActionItem}>
                <MessageOutlinedIcon className={classes.buttonIcon} />
                <span className={classes.buttonLabel}>تعليق</span>
            </Button>
            <Button onClick={() => { }} className={classes.postActionItem}>
                <ShareOutlinedIcon className={classes.buttonIcon} />
                <span className={classes.buttonLabel}>مشاركة</span>
            </Button>
        </div>
    )
}
