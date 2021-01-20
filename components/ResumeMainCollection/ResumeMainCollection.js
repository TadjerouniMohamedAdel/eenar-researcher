import React from 'react'
import classes from './ResumeMainCollection.module.css'
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined'
import { IconButton } from '@material-ui/core'
export default function ResumeMainCollection({collections,label,icon}) {
    return (
        <div className={classes.collectionContainer}>
        <h2>
            <span>
                {icon}
                {label}              
            </span>
            <IconButton>
                <BorderColorOutlinedIcon className={classes.actionSectionIcon}/>
            </IconButton>
        </h2>
        <div className={classes.collectionItems}>
            {collections.map((collection,index)=>(
                <div className={classes.collectionItem} key={`collection-item-${label}-${index}`}>
                    <div className={classes.collectionRectangle}></div>
                    <div className={classes.collectionContent}>
                        <h2>{collection.university ?? collection.company??collection.organization ??collection.name }</h2>
                        <h3>{collection.title}</h3>
                        <h3>{collection.provider}</h3>
                        <h3>{collection.role}</h3>
                        <h3>
                            {`${collection.endDate} - ${collection.startDate}`}
                        </h3>
                        <span>
                            {collection.link && collection.link.label}
                        </span>
                        <span>
                            {collection.description}
                        </span>
                        <span>
                            {collection.location}
                        </span>
                        <div className={classes.line}></div>
                    </div>
                </div>

            ))}
            <div className={classes.moreCollections}>
                <KeyboardArrowDownIcon className={classes.moreCollectionIcon}/>
                <span>إطلع على المزيد</span>
            </div>

        </div>
   </div>
    )
}
