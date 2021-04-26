import { useState } from 'react'
import classes from './GroupBanner.module.css'
import PublicIcon from '@material-ui/icons/Public';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Rectangles = () => (
    <div className={classes.rectangleWhite}>
        <div className={classes.rectangleBlue}></div>
    </div>
)

export default function GroupBanner() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.groupBanner}>
            <div className={classes.bondeau}></div>
            <div className={classes.groupInfo}>
                <Rectangles />
                <div className={classes.infoRow}>
                    <div className={classes.info}>
                        <h1>المجموعة الفلانية</h1>
                        <h3>أهلا بالباحثين في المجال الفلاني</h3>
                    </div>
                    <div className={classes.statsAndActions}>

                        <div className={classes.stats}>
                            <div className={classes.statItem}>
                                <div className={classes.statValue}>
                                    {/* {group.privacy === "public" ? <PublicIcon /> : <LockOutlinedIcon />} */}
                                    <PublicIcon className={classes.statTypeIcon} />
                                </div>
                                <div className={classes.statLabel}>
                                    {/* {group.privacy === "public" ? <PublicIcon /> : <LockOutlinedIcon />} */}
                                    عام
                                </div>
                            </div>
                            <div className={classes.divider}></div>
                            <div className={classes.statItem}>
                                <div className={classes.statValue}>123</div>
                                <div className={classes.statLabel}>الزيارات</div>
                            </div>

                            <div className={classes.divider}></div>

                            <div className={classes.statItem}>
                                <div className={classes.statValue}>54</div>
                                <div className={classes.statLabel}>المنشورات</div>
                            </div>
                            <div className={classes.divider}></div>
                            <div className={classes.statItem}>
                                <div className={classes.statValue}>152</div>
                                <div className={classes.statLabel}>الأعضاء</div>
                            </div>
                        </div>
                        <div className={classes.groupActions}>
                            <IconButton className={classes.addToGroup} onClick={() => { }}>
                                <AddIcon />
                            </IconButton>
                            <IconButton className={classes.editGroup} onClick={handleClick}>
                                <MoreHorizOutlinedIcon />
                            </IconButton>
                            <Menu
                                id="group-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem  onClick={handleClose}>
                                    تعديل المنشور
                                    </MenuItem>
                                <MenuItem  onClick={handleClose}>
                                    حذف المنشور
                                    </MenuItem>

                            </Menu>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
