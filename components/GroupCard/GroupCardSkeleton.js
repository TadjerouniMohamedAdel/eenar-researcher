import { Button, IconButton } from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public';
import { Skeleton } from '@material-ui/lab';
import classes from './GroupCard.module.css'
export default function GroupCardSkeleton() {

    const Circle = ()=>(
        <div className={classes.circleWhite}>
            <Skeleton animation="wave" variant="circle"  width={88} height={88}/>
        </div>
    )

    const MemberCircle = ()=>(
            <Skeleton animation="wave" className={classes.memberCircleWhite} variant="circle"
                    width={31} height={31}
            />    )
    return (
        <div className={classes.groupCard}>
            <div className={classes.bondeau}></div>
            <div className={classes.images}>
                <Skeleton animation="wave" className={classes.typeGroup} />
                <Circle />
            </div>
            <Skeleton animation="wave" variant="text" style={{width:"50%"}}/>
            <Skeleton animation="wave" variant="text" style={{width:"60%"}}/>
            <div className={classes.stats}>
                <div className={classes.statItem}>
                    <Skeleton animation="wave" variant="text" style={{width:20}}/>
                    <Skeleton animation="wave" variant="text" style={{width:20}}/>
                </div>

                <div className={classes.divider}></div>

                <div className={classes.statItem}>
                    <Skeleton animation="wave" variant="text" style={{width:20}}/>
                    <Skeleton animation="wave" variant="text" style={{width:20}}/>
                </div>
                <div className={classes.divider}></div>
                <div className={classes.statItem}>
                    <Skeleton animation="wave" variant="text" style={{width:20}}/>
                    <Skeleton animation="wave" variant="text" style={{width:20}}/>
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
            <Skeleton animation="wave" className={classes.joinGroup} variant="rect"/>
        </div>
    )
}
