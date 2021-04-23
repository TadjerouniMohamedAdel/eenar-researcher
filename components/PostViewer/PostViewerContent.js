import { useState,useEffect } from 'react'
import classes from './PostViewer.module.css'
import ReactPlayer from 'react-player'
import { linksExtractor } from '../../utils/utils'


export default function PostViewerContent({ post }) {
    console.log(linksExtractor(post.content)[0])
    const [firstLink,setFirstLink] = useState(linksExtractor(post.content)!=null? linksExtractor(post.content)[0]:"")
    const [isVideo, setIsVideo] = useState(ReactPlayer.canPlay(firstLink))
    return (
        <div className={classes.postContent}>
            <div className={classes.postContentText}>
                {
                    post.content
                }    
            </div>
            <div className={classes.postPlayer}>
            {
                isVideo && <ReactPlayer url={firstLink} controls={true} />
            }

            </div>
        </div>
    )
}
