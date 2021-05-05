import { useState } from 'react'
import classes from './PostWriter.module.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import { Button, IconButton, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faNewspaper, faPager } from '@fortawesome/free-solid-svg-icons';


export default function PostWriter() {
    const [postType, setPostType] = useState(0);
    const changePostType = (event, newValue) => {
        setPostType(newValue);
      };

    return (
        <div className={classes.postWriter}>
            <Tabs
                value={postType}
                onChange={changePostType}
                variant="fullWidth"
                className={classes.postWriterTab}
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab className={`${classes.postChoice} ${postType===0 && classes.postChoiceSelectd}`} icon={<FontAwesomeIcon icon={faPager} className={`${classes.postChoiceIcon}`} />} label="منشور تفاعلي" />
                <div className={classes.divider}></div>
                <Tab className={`${classes.postChoice} ${postType===2 && classes.postChoiceSelectd}`} icon={<FontAwesomeIcon icon={faNewspaper} className={`${classes.postChoiceIcon}`} />} label="منشور بحثي" />
            </Tabs>
            <div className={classes.writeSection}>
                <TextField
                    variant="outlined"
                    multiline
                    placeholder="مرحبا معاذ، ضع منشورك هنا.."
                    style={{borderColor:"transparent",border:0}}
                    className={classes.writer}
                />
            </div>
            <div className={classes.postWriterAction}>
                <div>
                    <IconButton onClick={()=>{}}>
                        <CameraAltOutlinedIcon /> 
                    </IconButton>
                    <IconButton onClick={()=>{}}>
                        <AttachFileOutlinedIcon /> 
                    </IconButton>
                    <IconButton onClick={()=>{}}>
                        <FontAwesomeIcon icon={faHashtag} /> 
                    </IconButton>
                </div>
                <div>
                    <Button variant="text" className={classes.cancelPublishingButton}>
                        إلغاء
                    </Button>
                    <Button variant="contained" className={classes.publishButton}>
                        نشر
                    </Button>
                </div>
            </div>
        </div>
    )
}
