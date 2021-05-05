import { Button } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import classes from './ServiceCard.module.css'

export default function ServiceCardSkeleton() {
    return (
        <div className={`${classes.serviceCard} ${classes.serviceCardSkeleton}`}>
            <Skeleton variant="rect" className={classes.serviceImg} />
            <div className={classes.serviceContent}>
                <h2><Skeleton variant="text"/></h2>
                <p>
                    <Skeleton variant="rect" />
                </p>
                <div className={classes.divider}></div>
                <div className={classes.serviceFooter}>
                    <Skeleton variant="rect" className={classes.getServiceButton} />
                </div>

            </div>
        </div>
    )
}
