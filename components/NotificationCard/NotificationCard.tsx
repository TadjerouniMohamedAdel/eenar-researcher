import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './NotificationCard.module.css'
import { faCommentDots, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faTimes, faHeart, faThumbsUp as faLike } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@material-ui/core'
import { NotificationCardProps } from '../../utils/types/types'

/**
    Card section to represent a notification by displaying

    - The notification sender
    - The reaction
    - The time of the notification
    - The link of current user's post 
 
**/


const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {
    return (
        <div className={classes.notificationCardContainer}>
            <div className={classes.notificationContent}>
                <div className={classes.notificationUserImage}></div>
                <div className={classes.notificationInfo}>
                    <p>{notification.sender}
                        &nbsp;
                        {notification.action === "comment" ? "علّق" : "تفاعل بـ"}
                        &nbsp;
                        {notification.action !== "comment" && <div className={classes.notificationReaction}><FontAwesomeIcon icon={notification.action === "like" ? faLike : faHeart} className={classes.notificationReactionIcon} />&nbsp;</div>}
                        على
                        <span>
                            منشورك
                        </span>
                    </p>
                    <span>{notification.from}</span>
                </div>
            </div>
            <div className={classes.notificationAction}>
                <FontAwesomeIcon icon={notification.action === "comment" ? faCommentDots : faThumbsUp} className={classes.notificationIcon} />
            </div>
            <div className={classes.closeButton}>
                <IconButton onClick={() => { }} >
                    <FontAwesomeIcon icon={faTimes} className={classes.closeIcon} />
                </IconButton>
            </div>

        </div>
    )
}
export default NotificationCard