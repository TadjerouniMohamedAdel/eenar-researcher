import { useState } from 'react'
import classes from './PostViewer.module.css'
import ReactPlayer from 'react-player'


export default function PostViewerContent({ post }) {
    const [isVideo, setIsVideo] = useState(ReactPlayer.canPlay(post.link))
    return (
        <div className={classes.postContent}>
            {
                isVideo && <ReactPlayer url={post.link} controls={true} />
            }
        </div>
    )
}
