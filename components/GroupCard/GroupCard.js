import { Button, IconButton } from '@material-ui/core'
import classes from './GroupCard.module.css'
import PublicIcon from '@material-ui/icons/Public';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function GroupCard({ group }) {

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
        <div className={classes.groupCard}>
            <div className={classes.bondeau}></div>
            <div className={classes.images}>
                <div className={classes.typeGroup}>
                    {group.privacy === "public" ? <PublicIcon /> : <LockOutlinedIcon />}
                </div>
                <Circle />
            </div>
            <h2>{group.name}</h2>
            <h3>{group.title}</h3>
            <div className={classes.stats}>
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
            <Button className={classes.joinGroup} >
                <span>
                    إنضم للمجموعة
                </span>
            </Button>
        </div>
    )
}
