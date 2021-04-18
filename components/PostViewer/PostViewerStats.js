import classes from './PostViewer.module.css'

const likes = [
    `NekoBebop`,
    `Nick Grissom`,
    `Sarah Diamond`,
    `Jett Spiegel`,
    `Marcus Jhonson`,
    `Jane Rodgers`,
]

const angry = [
    "Chester Sawayn",
    "Marion Crona",
    "Rose Murray",
    "Jean Miller",
    "Elvira Anderson"
]
const wows = [
    "Joan McClure",
    "Bryant Reilly",
    "Donna Heaney",
    "Annette Bruen",
    "Marcus Lindgren"
]
const ReactionList = ({ list , title,icon }) => (
    <div className={classes.mostReactionList}>
        <div className={`${classes.mostReactionListPerson} ${classes.mostReactionListTitle}`}>
            {icon}
            <span>
                {title}
            </span>
        </div>
        {
            list.map((reaction, index) => (
                <div className={classes.mostReactionListPerson} key={`${reaction}-${index}`}>{reaction}</div>
            ))
        }
        <div className={classes.morePerson}></div>
    </div>
)
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
                    <div className={classes.mostReactionElement}>
                        <img src="/images/reactions/angry.png" alt="" />
                        <ReactionList 
                            title="غاضب" 
                            list={angry} 
                            icon={<img src="/images/reactions/angry.png" alt="" />}    
                        />
                    </div>
                    <div className={classes.mostReactionElement}>
                        <img src="/images/reactions/wow.png" alt="" />
                        <ReactionList 
                            title="مندهش" 
                            list={wows} 
                            icon={<img src="/images/reactions/wow.png" alt="" />}
                        />
                    </div>
                    <div className={classes.mostReactionElement}>
                        <img src="/images/reactions/like.png" alt="" />
                        <ReactionList 
                            title="إعجاب" 
                            list={likes} 
                            icon={<img src="/images/reactions/like.png" alt="" />}
                        />

                    </div>
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
