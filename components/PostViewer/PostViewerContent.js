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
            {isVideo ? (
                <div className={classes.postPlayer}>
                    <ReactPlayer url={firstLink} controls={true} />
                </div>

            ) : firstLink!=="" &&(
                <div className={classes.linkPreviewContainer}>
                    <LinkPreview />
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
