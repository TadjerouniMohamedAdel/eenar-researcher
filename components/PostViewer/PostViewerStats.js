import classes from './PostViewer.module.css'

export default function PostViewerStats() {
    const MemberCircle = () => (
        <div className={classes.memberCircleWhite}>
            <div className={classes.memberCircleBlue}></div>
        </div>
    )

    return (
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
    )
}
