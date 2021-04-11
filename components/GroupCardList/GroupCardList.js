import classes from './GroupCardList.module.css'
import PublicIcon from '@material-ui/icons/Public';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { IconButton } from '@material-ui/core';

export default function GroupCardList({ group }) {
    const Circle = () => (
        <div className={classes.circleWhite}>
            <div className={classes.circleBlue}>
            </div>
        </div>
    )

    const MemberCircle = () => (
        <div className={classes.memberCircleWhite}>
            <div className={classes.memberCircleBlue}></div>
        </div>
    )

    return (
        <div className={classes.card}>
            <div className={classes.groupInfo}>
            <div className={classes.bondeau}></div>
            <Circle />
                <div className={classes.info}>
                <h2>{group.name}</h2>
                <h3>{group.title}</h3>

                </div>
            </div>
            <div className={classes.groupStats}>
                <div className={classes.statItem}>
                    <div className={classes.statValue}>{group.stats.views}</div>
                    <div className={classes.statLabel}>الزيارات</div>
                </div>

                <div className={classes.divider}></div>

                <div className={classes.statItem}>
                    <div className={classes.statValue}>{group.stats.posts}</div>
                    <div className={classes.statLabel}>المنشورات</div>
                </div>
                <div className={classes.divider}></div>
                <div className={classes.statItem}>
                    <div className={classes.statValue}>{group.stats.members}</div>
                    <div className={classes.statLabel}>الأعضاء</div>
                </div>
            </div>
            <div className={classes.members}>
                <MemberCircle />
                <MemberCircle />
                <MemberCircle />
                <MemberCircle />
                <MemberCircle />
                <MemberCircle />
            </div>
            <div className={classes.groupActions}>
                <div className={classes.groupPrivacy}>
                    { group.privacy ==="public" ? <PublicIcon /> :<LockOutlinedIcon />}
                    
                </div>
                <IconButton onClick={()=>{}} className={classes.joinButton}>
                    <AddCircleOutlineOutlinedIcon />
                </IconButton>
            </div>

        </div>
    )
}
