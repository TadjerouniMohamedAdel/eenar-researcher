import { useState } from 'react'
import { IconButton } from '@material-ui/core';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import classes from './PostViewer.module.css'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
    'تعديل المنشور',
    'حذف المنشور',
    'وضع مميز',
    'إبلاغ عن المنشور',
    'إبلاغ عن الناشر'
];

export default function PostViewerHeader() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.postHeader}>
            <div className={classes.postAuthor}>
                <div className={classes.postAuthorImages}>
                    <div className={classes.rectangle}></div>
                </div>
                <div className={classes.postAuthorInfo}>
                    <h2>معاذ محساس</h2>
                    <span>5 ساعات</span>
                </div>
            </div>
            <div className={classes.postHeaderAction}>
                <IconButton onClick={() => { }} className={classes.saveButton}>
                    <BookmarkBorderOutlinedIcon />
                </IconButton>
                <IconButton onClick={handleClick} >
                    <MoreHorizOutlinedIcon className={classes.actionPostIcon} />
                </IconButton>
                <Menu
                    id="post-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    {options.map((option) => (
                        <MenuItem key={option} onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </div>
    )
}
