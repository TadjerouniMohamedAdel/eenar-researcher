import { Button, IconButton } from '@material-ui/core'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import classes from './MyNetwork.module.css'
import { datausers } from '../../utils/fixtures/DevData';
export default function MyNetwork() {
    const users = datausers
    return (
        <div className={classes.myNetwork}>
            <h2>
                شبكتي البحثية
                <IconButton onClick={() => { }}>
                    <MoreHorizOutlinedIcon className={classes.actionSectionIcon} />
                </IconButton>
            </h2>
            {
                users.map((user, ui) => (
                    <div className={classes.suggestUser} key={ui}>
                        <div className={classes.suggestUserRectangle}></div>
                        <div className={classes.suggestUserContent}>
                            <h3>{user.fullName}</h3>
                            <h5>صديق مشترك {user.commonFrinedsNumber}</h5>
                        </div>

                        <Button
                            onClick={() => { }}
                            className={`${classes.suggestUserAction} ${classes[user.invitationStatus]}`}
                        >
                            {
                                user.invitationStatus == "accepted" ? (
                                    <RemoveIcon className={classes.actionIcon} />
                                )
                                    : (
                                        <AddIcon className={classes.actionIcon} />
                                    )
                            }
                        </Button>
                    </div>
                ))
            }
            <Button
                className={classes.allFriends}
                onClick={() => { }}
            >
                <span>
                    جميع الأصدقاء
                </span>
            </Button>
        </div>
    )
}
