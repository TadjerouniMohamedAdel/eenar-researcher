import { useState } from 'react'
import classes from './PostViewer.module.css'
import PostViewerHeader from './PostViewerHeader';
import PostViewerStats from './PostViewerStats';
import PostViewerActions from './PostViewerActions';
import PostViewerContent from './PostViewerContent';
import PostViewerComments from './PostViewerComments';

export default function PostViewer() {
    const [activeComment,setActiveComment] = useState(false)

    return (
        <div className={classes.postViewer}>
            <PostViewerHeader />
            <PostViewerContent />
            <div className={classes.postSectionDivider}></div>
            <PostViewerStats />
            <div className={classes.postSectionDivider}></div>
            <PostViewerActions 
                activeComment={activeComment}
                setActiveComment={setActiveComment}
            />
            {
                activeComment && (
                    <>
                        <div className={classes.postSectionDivider}></div>
                        <PostViewerComments />
                    </>

                )
            }
        </div>
    )
}
