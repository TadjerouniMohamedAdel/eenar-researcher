import { Button, IconButton } from '@material-ui/core';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import classes from './PostViewer.module.css'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

export default function PostViewer() {
    const MemberCircle = () => (
        <div className={classes.memberCircleWhite}>
            <div className={classes.memberCircleBlue}></div>
        </div>
    )

    return (
        <div className={classes.postViewer}>
            <div className={classes.postHeader}>
                <div className={classes.postAuthor}>
                    <div className={classes.postAuthorImages}>
                        <div className={classes.rectangle}></div>
                    </div>
                    <div className={classes.postAuthorInfo}>
                        <h2>معاذ محساس</h2>
                        <span>5 ساعات</span>
                    </div>
                </div>
                <div className={classes.postHeaderAction}>
                    <IconButton onClick={() => { }} className={classes.saveButton}>
                        <BookmarkBorderOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => { }}>
                        <MoreHorizOutlinedIcon className={classes.actionPostIcon} />
                    </IconButton>
                </div>
            </div>
            <div className={classes.postContent}>

            </div>
            <div className={classes.postSectionDivider}></div>
            <div className={classes.postStats}>
                <div className={classes.reactionStats}>
                    <div className={classes.mostReactions}>
                        <img src="/images/reactions/angry.png" alt="" />
                        <img src="/images/reactions/wow.png" alt="" />
                        <img src="/images/reactions/like.png" alt="" />
                    </div>
                    <span className={classes.reactionNumber}>123</span>
                    <div className={classes.members}>
                        <MemberCircle />
                        <MemberCircle />
                        <MemberCircle />
                        <MemberCircle />
                        <MemberCircle />
                    </div>
                </div>
                <div className={classes.shareCommentStat}>
                    <span className={classes.commentNumber}>3 تعليقات</span>
                    <span className={classes.shareNumber}>0 مشاركات</span>
                </div>

            </div>
            <div className={classes.postSectionDivider}></div>
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
        </div>
    )
}
