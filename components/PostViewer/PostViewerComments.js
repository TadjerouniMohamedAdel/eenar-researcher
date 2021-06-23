import { Button, IconButton, TextField } from '@material-ui/core'
import classes from './PostViewer.module.css'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import AddIcon from '@material-ui/icons/Add';
const comments = [
    {
        "user": {
            fullName:"Neko Bebop",
            image:"/images/user-placeholder5.png"
        },
        
        "content": "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع ",
        "from": "منذ 15 دقيقة",
        "reactions": {
            "number": 4
        }
    },
    {
        "user": {
            fullName:"Neko Bebop",
            image:"/images/user-placeholder5.png"
        },
        "content": "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …",
        "from": "منذ 15 دقيقة",
        "reactions": {
            "number": 4
        }
    },
    {
        "user": {
            fullName:"Neko Bebop",
            image:"/images/user-placeholder5.png"
        },
        "content": "It’s always a pleasure to do this streams with you! If we have at least half the fun than last time it will be an incredible success!",
        "from": "منذ 15 دقيقة",
        "reactions": {
            "number": 4
        }

    }
]
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

const ReactionList = ({ list, title, icon }) => (
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
export default function PostViewerComments() {


    return (
        <div className={classes.postComments}>
            {
                comments.map((comment, index) => (
                    <>
                        <div className={classes.commentItem}>
                            <div className={classes.userImage}>
                                <div className={classes.rectangle}>
                                    <img src={comment.user.image} alt="" />
                                </div>
                            </div>
                            <div className={classes.commentInfo}>
                                <div className={classes.commentContent}>
                                    <p>
                                        <span>{comment.user.fullName}</span> &nbsp;
                                        {comment.content}
                                    </p>
                                </div>
                                <div className={classes.commentActions}>
                                    <div className={classes.commentReactions}>
                                        <div className={classes.mostReactionsComment}>
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
                <div className={classes.rectangle}></div>
                <form action="">
                    <TextField
                        variant="outlined"
                        className={classes.writeCommntInput}
                        label="ردك"
                        multiline
                    />
                </form>
            </div>
        </div>
    )
}
