import React from 'react'
import classes from './GroupCardList.module.css'
import PublicIcon from '@material-ui/icons/Public';
import AddIcon from '@material-ui/icons/Add';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { IconButton } from '@material-ui/core';
import Link from 'next/link'
import { GroupCardProps } from '../../utils/types/types';


/**
    Card section to represent a group by displaying the folowing informations:

    - GroupTitle: The title of the group
    - GroupSlogan: small description about the group 
    - GrouplImage : Image of the current group
    - Privacy: the privacy of the group (public or private)
    - Overviews: Stats about group's member activity (views,posts,friends) and his location 
    - Friends number: The number of researchers friends members of the group
    
    If you click on the card it'll redirect to the group page

    If you click on the green button of the component it will send your request to join the group
 
**/

const GroupCardList: React.FC<GroupCardProps> = ({ group }) => {
    const MemberCircle: React.FC<{ img: string, last?: boolean }> = ({ img, last }) => (
        <div className={classes.memberCircleWhite}>
            <div className={classes.memberCircleBlue}>
                <img src={img} alt="" />
                {last && <div className={classes.lastMember}>+124</div>}
            </div>
        </div>
    )

    return (
        <Link href={`/researcher/group/${group.id}`}>

            <div className={classes.card}>
                <div className={classes.groupInfo}>
                    <div className={classes.groupImage}><img src={group.image || '/images/group-placeholder.jpg'} /></div>
                    <div className={classes.info}>
                        <h2>{group.title}</h2>
                        <h3>{group.slogan}</h3>

                    </div>
                </div>
                <div className={classes.groupStats}>
                    <div className={classes.statItem}>
                        <div className={classes.statValue}>0</div>
                        <div className={classes.statLabel}>الزيارات</div>
                    </div>

                    <div className={classes.divider}></div>

                    <div className={classes.statItem}>
                        <div className={classes.statValue}>0</div>
                        <div className={classes.statLabel}>المنشورات</div>
                    </div>
                    <div className={classes.divider}></div>
                    <div className={classes.statItem}>
                        <div className={classes.statValue}>0</div>
                        <div className={classes.statLabel}>الأعضاء</div>
                    </div>
                </div>
                <div className={classes.members}>
                    <MemberCircle img="/images/user-placeholder1.jpeg" />
                    <MemberCircle img="/images/user-placeholder2.jpeg" />
                    <MemberCircle img="/images/user-placeholder3.jpeg" />
                    <MemberCircle img="/images/user-placeholder4.jpeg" />
                    <MemberCircle img="/images/user-placeholder5.png" />
                    <MemberCircle img="/images/user-placeholder6.webp" last />
                </div>
                <div className={classes.groupActions}>
                    <div className={classes.groupPrivacy}>
                        {group.privacy === "public" ? <PublicIcon /> : <LockOutlinedIcon />}

                    </div>
                    <IconButton onClick={() => { }} className={classes.joinButton}>
                        <AddIcon />
                    </IconButton>
                </div>

            </div>
        </Link>

    )
}

export default GroupCardList;