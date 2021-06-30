import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import classes from './GroupCard.module.css'
import PublicIcon from '@material-ui/icons/Public';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from 'next/link'
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import { GroupCardProps } from '../../utils/types/types';

const GroupCard:React.FC<GroupCardProps>=({ group }) =>{

    const Circle = () => (
        <div className={classes.circleWhite}>
            <div className={classes.circleBlue}>
            </div>
        </div>
    )

    const MemberCircle:React.FC<{img:string,last?:boolean}> = ({img,last}) => (
        <div className={classes.memberCircleWhite}>
            <div className={classes.memberCircleBlue}>
                <img src={img} alt="" />
                {last && <div className={classes.lastMember}>+124</div>}
            </div>
        </div>
    )

    return (
        <Link href={`/researcher/group/${group.id}`}>

            <div className={classes.groupCard}>
                <div className={classes.bondeau}>
                    <img src="/images/account-banner-placeholder.webp" alt="" />
                </div>
                <div className={classes.images}>
                    <div className={classes.typeGroup}>
                        {group.privacy === "public" ? <PublicIcon /> : <LockOutlinedIcon />}
                    </div>

                    <div className={classes.circleWhite}>
                        <div className={classes.circleBlue}>
                            <img src={group.image} alt="" />
                        </div>
                    </div>
                </div>
                <h2>{group.title}</h2>
                <h3>{group.slogan}</h3>
                <div className={classes.stats}>
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
                    <MemberCircle img={"/images/user-placeholder1.jpeg"}/>
                    <MemberCircle img={"/images/user-placeholder2.jpeg"}/>
                    <MemberCircle img={"/images/user-placeholder3.jpeg"}/>
                    <MemberCircle img={"/images/user-placeholder4.jpeg"}/>
                    <MemberCircle img={"/images/user-placeholder5.png"}/>
                    <MemberCircle img={"/images/user-placeholder6.webp"} last/>
                </div>
                <Button className={classes.joinGroup} >
                        إنضم للمجموعة
                        &nbsp;
                        <AddIcon />
                </Button>
            </div>
        </Link>
    )
}

export default GroupCard