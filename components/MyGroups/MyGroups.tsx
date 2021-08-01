import React, { useState } from 'react'
import { Button, IconButton, Tab, Tabs } from '@material-ui/core'
import classes from './MyGroups.module.css'
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { MyGroupsProps } from '../../utils/types/types';
import { Skeleton } from '@material-ui/lab';

/**
    Section Card to dispaly list of the lasts current'user groups filtered with  3 filter
    
    - Recent
    - Active
    - Popular
    
    also the ability to add member to those group
**/
const MyGroups: React.FC<MyGroupsProps> = ({ isLoading, groups }) => {
    const [value, setValue] = useState(0)

    /** switch group tab */
    const handleChange = (e: React.ChangeEvent<{}>, value: number) => {
        setValue(value)
    }
    
    return (
        <div className={classes.myGroups}>
            <h2>
                مجموعاتي البحثية
                <IconButton onClick={() => { }}>
                    <MoreHorizOutlinedIcon className={classes.actionSectionIcon} />
                </IconButton>
            </h2>
            <Tabs
                value={value}
                className={classes.myGroupsTabs}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="الأشهر" className={classes.groupTabItem} />
                <Tab label="الأكثر نشاطا" className={classes.groupTabItem} />
                <Tab label="الأحدث" className={classes.groupTabItem} />
            </Tabs>
            <div className={classes.groupList}>
                {
                    isLoading == true ? new Array(4).fill("").map((el, index) => (
                        <div key={`group-skeleton-${index}`} className={classes.groupItem}>
                            <Skeleton variant="circle" className={classes.collectionRectangle} />
                            <div className={classes.groupDescription}>
                                <Skeleton variant="text" style={{ margin: 5 }} />
                                <Skeleton variant="text" style={{ margin: 5 }} />
                            </div>
                            <Skeleton variant="rect" className={classes.groupButton} style={{ backgroundColor: "rgba(0, 0, 0, 0.11)" }} />
                        </div>
                    )) :
                        groups?.map((group, index) => (
                            <div key={`group-${group.id}`} className={classes.groupItem}>
                                <div className={classes.collectionRectangle}>
                                    <img src={group.image || "/images/group-placeholder.jpg"} alt={`group-${group.title}`} />
                                </div>
                                <div className={classes.groupDescription}>
                                    <h4>{group.title}</h4>
                                    <span>

                                        {`عضو 0`}
                                    </span>
                                </div>
                                <Button className={classes.groupButton} onClick={() => { }}>
                                    <GroupAddOutlinedIcon />
                                </Button>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}
export default MyGroups