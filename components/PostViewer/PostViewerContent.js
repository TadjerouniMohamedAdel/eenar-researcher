import { useState, useEffect } from "react";
import classes from "./PostViewer.module.css";
import ReactPlayer from "react-player";
import { linksExtractor } from "../../utils/utils";
import LinkPreview from "../LinkPreview/LinkPreview";

export default function PostViewerContent({ post }) {
    const [firstLink, setFirstLink] = useState(
        linksExtractor(post.content) != null ? linksExtractor(post.content)[0] : ""
    );
    const [isVideo, setIsVideo] = useState(ReactPlayer.canPlay(firstLink));
    useEffect(() => {
        console.log("changed value", isVideo)
    }, [isVideo])
    return (
        <div className={classes.postContent}>
            <div className={classes.postContentText}>{post.content}</div>
            {post.images.length > 0 ?
            <div className={classes.postContentImages}>
                {post.images.slice(0,5).map((img,index)=>(
                    <div className={`${post.images.length === 1 ? classes.fullImg :index <= 1 ?classes.bigImg:classes.smallImg} ${index ===4 && classes.lastImg}`}>
                        <img src="/images/learnmore-placeholder.jpg" alt="" />
                        { index === 4 && (
                        <div className={classes.otherImgNumber}>
                            {post.images.length - 5}
                            +
                        </div>
                        )}
                    </div>
                ))}
            </div>
            :isVideo ? (
                <div className={classes.postPlayer}>
                    <ReactPlayer url={firstLink} controls={true} />
                </div>

            ) : firstLink!=="" &&(
                <div className={classes.linkPreviewContainer}>
                    <LinkPreview link={firstLink}/>
                </div>

            )}
            <div className={classes.postContentKeywords}>
                {
                    post.keywords.map((keyword, index) => (
                        <div key={`keyword-${index}`} className={classes.keywordItem}>
                            {keyword}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
