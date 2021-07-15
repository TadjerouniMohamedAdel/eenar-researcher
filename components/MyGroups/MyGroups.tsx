import React,{ useState } from 'react'
import { Button, IconButton, Tab, Tabs } from '@material-ui/core'
import classes from './MyGroups.module.css'
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import {  MyGroupProps } from '../../utils/types/types';

const MyGroups:React.FC<MyGroupProps> = ({isLoading,groups})=> {
    const [value, setValue] = useState(0)
    
    /** switch group tab */
    const handleChange = (e:React.ChangeEvent<{}>, value:number) => {
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
                    !isLoading && groups?.map((group, index) => (
                        <div key={`group-${group.id}`} className={classes.groupItem}>
                            <div className={classes.collectionRectangle}>
                                {group.image && <img src={group.image} alt={`group-${group.title}`} />}
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