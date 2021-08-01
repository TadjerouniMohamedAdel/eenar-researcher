import React from 'react'
import { useState } from 'react'
import { Button, IconButton, Tab, Tabs } from '@material-ui/core'
import classes from './FileCard.module.css'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { filedata } from '../../utils/fixtures/DevData';


/**
    Section card to show the files shared on group
 **/

const FileCard: React.FC = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
        setValue(value)
    }
    const files = filedata
    return (
        <div className={classes.fileCard}>
            <h2>
                الملفات المتداولة
                <IconButton onClick={() => { }}>
                    <MoreHorizOutlinedIcon className={classes.actionSectionIcon} />
                </IconButton>
            </h2>
            <Tabs
                value={value}
                className={classes.fileCardTabs}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab
                    label="الوسائط"
                    className={classes.fileTabItem}
                    icon={<ImageOutlinedIcon className={classes.fileCardTabItemIcon} />}
                />
                <div className={classes.tabDivider}></div>
                <Tab
                    label="المستندات"
                    className={classes.fileTabItem}
                    icon={<DescriptionOutlinedIcon className={classes.fileCardTabItemIcon} />}
                />
            </Tabs>
            <div className={classes.fileCardContent}>
                {
                    files.map((file, index) => (
                        <div className={classes.fileItem}>
                            <img src={file} key={`file-${index}`} alt="" />
                            {index === files.length - 1 && <div className={classes.lastFile}>+124</div>}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default FileCard;