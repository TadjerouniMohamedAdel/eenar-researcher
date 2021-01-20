import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import classes from './MyNetwork.module.css'
export default function MyNetwork({users}) {
    
    return (
        <div className={classes.myNetwork}>
                    <h2>
                        شبكتي البحثية                               
                        <IconButton>
                            <MoreHorizOutlinedIcon className={classes.actionSectionIcon}/>
                        </IconButton>
                    </h2>
                    {
                        users.map((user,ui)=>(
                            <div className={classes.suggestUser} key={ui}>
                                <div className={classes.suggestUserRectangle}></div>
                                <div className={classes.suggestUserContent}>
                                    <h3>{user.fullName}</h3>
                                    <h5>صديق مشترك {user.commonFrinedsNumber}</h5>
                                </div>
                             
                                    <Button 
                                        className={`${classes.suggestUserAction} ${classes[user.invitationStatus]}`}
                                    >
                                        {
                                            user.invitationStatus =="accepted"?(
                                                <RemoveIcon className={classes.actionIcon}/>
                                            )
                                            :(
                                                <AddIcon className={classes.actionIcon}/>
                                            )
                                        }
                                    </Button>
                                </div>
                        ))
                    }
                    <Button className={classes.allFriends}>
                        <span>
                            جميع الأصدقاء
                        </span>
                    </Button>   
                </div>
    )
}
