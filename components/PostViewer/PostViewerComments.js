import { Button, IconButton } from '@material-ui/core'
import classes from './PostViewer.module.css'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import AddIcon from '@material-ui/icons/Add';
const comments = [
    {
        "user": "Neko Bebop",
        "content": "It’s always a pleasure to do this streams with you! If we have at least half the fun than last time it will be an incredible success!",
        "from": "منذ 15 دقيقة",
        "reactions": {
            "number": 4
        }
    },
    {
        "user": "Neko Bebop",
        "content": "It’s always a pleasure to do this streams with you! If we have at least half the fun than last time it will be an incredible success!",
        "from": "منذ 15 دقيقة",
        "reactions": {
            "number": 4
        }
    },
    {
        "user": "Neko Bebop",
        "content": "It’s always a pleasure to do this streams with you! If we have at least half the fun than last time it will be an incredible success!",
        "from": "منذ 15 دقيقة",
        "reactions": {
            "number": 4
        }

    }
]

export default function PostViewerComments() {


    return (
        <div className={classes.postComments}>
            {
                comments.map((comment, index) => (
                    <>
                        <div className={classes.commentItem}>
                            <div className={classes.userImage}>
                                <div className={classes.rectangle}></div>
                            </div>
                            <div className={classes.commentInfo}>
                                <div className={classes.commentContent}>
                                    <p>
                                        <span>{comment.user}</span> &nbsp;
                                        {comment.content}
                                    </p>
                                </div>
                                <div className={classes.commentActions}>
                                    <div className={classes.commentReactions}>
                                        <div className={classes.mostReactionsComment}>
                                            <img src="/images/reactions/angry.png" alt="" />
                                            <img src="/images/reactions/wow.png" alt="" />
                                            <img src="/images/reactions/like.png" alt="" />
                                        </div>
                                        <span>{comment.reactions.number}</span>
                                    </div>
                                    <Button onClick={() => { }} variant="text" className={classes.likeComment}>
                                        أعجبني رد
                                    </Button>
                                    <div className={classes.commentFrom}>
                                        {comment.from}
                                    </div>
                                    <IconButton onClick={() => { }}>
                                        <MoreHorizOutlinedIcon className={classes.actionPostIcon} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <div className={classes.postSectionDivider}></div>
                    </>
                ))
            }
            <div className={classes.loadMoreComment}>
                <Button onClick={() => { }} variant="text" className={classes.loadMoreButton}>
                    &nbsp;
                        <AddIcon className={classes.moreCommentIcon} />
                        المزيد من التعليقات
                        &nbsp;
                        <span className={classes.moreCommentNumber}>9</span>
                </Button>
            </div>
            <div className={classes.postSectionDivider}></div>
            <div className={classes.writeCommnt}>

            </div>
        </div>
    )
}
