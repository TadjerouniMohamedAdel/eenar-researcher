import { useState } from 'react'
import { Button, IconButton } from '@material-ui/core';
import classes from './PostViewer.module.css'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import PostViewerHeader from './PostViewerHeader';
import PostViewerStats from './PostViewerStats';
import PostViewerActions from './PostViewerActions';
import PostViewerContent from './PostViewerContent';

export default function PostViewer() {
    const [activeComment,setActiveComment] = useState(false)

    return (
        <div className={classes.postViewer}>
            <PostViewerHeader />
            <PostViewerContent />
            <div className={classes.postSectionDivider}></div>
            <PostViewerStats />
            <div className={classes.postSectionDivider}></div>
            <PostViewerActions />
        </div>
    )
}
