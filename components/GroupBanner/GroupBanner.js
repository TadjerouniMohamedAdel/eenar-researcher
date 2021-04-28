import { useState } from 'react'
import classes from './GroupBanner.module.css'
import PublicIcon from '@material-ui/icons/Public';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';

const Rectangles = () => (
    <div className={classes.rectangleWhite}>
        <div className={classes.rectangleBlue}></div>
    </div>
)

export default function GroupBanner({group}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isLoadingImage,setIsLoadingImage] = useState(false)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    /** edit image group     */
    const editGroupImage = (e) => {
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
                    axios({
                        method: 'put',
                        url: `${process.env.NEXT_PUBLIC_API_URL}/user/edit`,
                        data: { ...user, image: base64data }
                    }).then(response => {
                        setIsLoadingImage(false)
                    }).catch(error => {
                        console.log(error)
                        setIsLoadingImage(false)
                    })
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
            <div className={classes.bondeau}></div>
            <div className={classes.groupInfo}>
                <Rectangles />
                <IconButton className={classes.editGroupImage} onClick={() => { document.getElementById(`edit-image-group`).click() }}>
                        <EditIcon  style={{ fontSize: 21 }} />
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
                    <div className={classes.statsAndActions}>

                        <div className={classes.stats}>
                            <div className={classes.statItem}>
                                <div className={classes.statValue}>
                                    {group.privacy === "public" ? <PublicIcon className={classes.statTypeIcon} /> : <LockOutlinedIcon className={classes.statTypeIcon} />}
                                </div>
                                <div className={classes.statLabel}>
                                    {group.privacy === "public" ? "عام" : "سري" }
                                    
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
                                <MenuItem  onClick={handleClose}>
                                    تعديل المنشور
                                    </MenuItem>
                                <MenuItem  onClick={handleClose} className={classes.deleteGroup}>
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
