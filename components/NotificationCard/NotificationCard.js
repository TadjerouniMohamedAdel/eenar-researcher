import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './NotificationCard.module.css'
import { faCommentDots,faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@material-ui/core'
export default function NotificationCard({ notification }) {
    return (
        <div className={classes.notificationCardContainer}>
            <div className={classes.notificationContent}>
                <div className={classes.notificationUserImage}></div>
                <div className={classes.notificationInfo}>
                    <p>{notification.sender}
                    &nbsp;
                        {notification.action === "comment" ? "علّق" : "تفاعل"}
                        &nbsp;
                      على منشورك
                     </p>
                    <span>{notification.from}</span>
                </div>
            </div>
            <div className={classes.notificationAction}>
                <FontAwesomeIcon icon={notification.action === "comment" ? faCommentDots : faThumbsUp } className={classes.notificationIcon} />
            </div>
            <div className={classes.closeButton}>
                <IconButton onClick={() => { }} >
                    <FontAwesomeIcon icon={faTimes} className={classes.closeIcon} />
                </IconButton>
            </div>

        </div>
    )
}
