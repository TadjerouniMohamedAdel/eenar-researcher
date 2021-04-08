import { useState } from 'react'
import { Button, IconButton, Tab, Tabs } from '@material-ui/core'
import classes from './MyGroups.module.css'
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

export default function MyGroups({ groups }) {
    const [value, setValue] = useState(0)

    /** switch group tab */
    const handleChange = (e, value) => {
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
                    groups.map((group, index) => (
                        <div key={`group-${index}`} className={classes.groupItem}>
                            <div className={classes.collectionRectangle}></div>
                            <div className={classes.groupDescription}>
                                <h4>{group.name}</h4>
                                <span>

                                    {`عضو ${group.members}`}
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
