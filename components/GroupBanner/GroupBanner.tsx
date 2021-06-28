import React,{ useState, useEffect } from 'react'
import classes from './GroupBanner.module.css'
import PublicIcon from '@material-ui/icons/Public';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
import Compressor from 'compressorjs'
import { Skeleton } from '@material-ui/lab';
import { GroupBannerProps, NotDefineYet } from '../../utils/types/types';

const Rectangles:React.FC<{img:string|null|undefined}> = ({ img }) => (
    <div className={classes.rectangleWhite}>
        <div className={classes.rectangleBlue}>
            <img src={img ? img : "/images/group-placeholder.jpg"} alt="" />
        </div>
    </div>
)

const GroupBanner:React.FC<GroupBannerProps>=({ group, openEditGroup, editGroup, editGroupStatus, openDeleteGroup })=> {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isLoadingImage, setIsLoadingImage] = useState(false)
    const open = Boolean(anchorEl);

    const handleClick = (event:NotDefineYet) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        editGroupStatus === "success" && setIsLoadingImage(false)
    }, [editGroupStatus])

    /** edit image group     */
    const editGroupImage = (e:NotDefineYet) => {
        setIsLoadingImage(true)
        let file = e.currentTarget.files[0]
        new Compressor(file, {
            quality: 0.8,
            width: 200,
            height: 200,
            convertSize: 50000,
            success(result) {
                const reader = new FileReader()
                reader.readAsDataURL(result)
                reader.onloadend = function () {
                    const base64data = reader.result
                    editGroup({ ...group, image: base64data })
                }
            },
            error(err) {
                console.log(err.message)
                setIsLoadingImage(false)
            }
        })
    }

    return (
        <div className={classes.groupBanner}>
            <div className={classes.bondeau}>
                <img src="/images/group-banner-placeholder.jpg" alt="" />
                <div className={classes.groupActions}>
                    <IconButton className={classes.addToGroup} onClick={() => { }}>
                        <AddIcon />
                    </IconButton>
                    <IconButton className={classes.editGroup} onClick={handleClick}>
                        <MoreHorizOutlinedIcon />
                    </IconButton>
                    <Menu
                        id="group-menu"
                        className={classes.groupMenu}
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => { openEditGroup(true); handleClose() }}>
                            تعديل المجموعة
                        </MenuItem>
                        <MenuItem onClick={() => { openDeleteGroup(true); handleClose() }} className={classes.deleteGroup}>
                            حذف المجموعة
                        </MenuItem>

                    </Menu>
                </div>
            </div>
            <div className={classes.groupInfo}>
                {
                    isLoadingImage ? (
                        <Skeleton variant="rect" className={classes.rectangleWhite} />

                    )

                        : (
                            <Rectangles img={group.image} />
                        )
                }
                <IconButton className={classes.editGroupImage} onClick={() => {  document.getElementById(`edit-image-group`)!.click() }}>
                    <EditIcon style={{ fontSize: 21 }} />
                </IconButton>
                <input
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    name="image"
                    id="edit-image-group"
                    hidden
                    onChange={editGroupImage}
                />
                <div className={classes.infoRow}>
                    <div className={classes.info}>
                        <h1>{group.title}</h1>
                        <h3>{group.slogan}</h3>
                    </div>

                    <div className={classes.stats}>
                        <div className={classes.statItem}>
                            <div className={classes.statValue}>
                                {group.privacy === "public" ? <PublicIcon className={classes.statTypeIcon} /> : <LockOutlinedIcon className={classes.statTypeIcon} />}
                            </div>
                            <div className={classes.statLabel}>
                                {group.privacy === "public" ? "عام" : "سري"}

                            </div>
                        </div>
                        <div className={classes.divider}></div>
                        <div className={classes.statItem}>
                            <div className={classes.statValue}>0</div>
                            <div className={classes.statLabel}>الزيارات</div>
                        </div>

                        <div className={classes.divider}></div>

                        <div className={classes.statItem}>
                            <div className={classes.statValue}>0</div>
                            <div className={classes.statLabel}>المنشورات</div>
                        </div>
                        <div className={classes.divider}></div>
                        <div className={classes.statItem}>
                            <div className={classes.statValue}>0</div>
                            <div className={classes.statLabel}>الأعضاء</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default GroupBanner