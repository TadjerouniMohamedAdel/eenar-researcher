import { useState } from 'react'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button, IconButton } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import classes from './AboutGroup.module.css'
import { dataaboutme } from '../../utils/fixtures/DevData'
import moment from 'moment'
import PropTypes from 'prop-types';



export default function AboutGroup({group}) {
    const [aboutme, setAboutme] = useState(dataaboutme)
    moment.locale('ar-dz')

    return (
        <div className={classes.aboutGroup}>
            <h2>
                نبذة عن المجموعة
                <IconButton onClick={() => { }}>
                    <MoreHorizOutlinedIcon className={classes.actionSectionIcon} />
                </IconButton>
            </h2>
            <p className={classes.aboutGroupDescription}>
                {group.description}
            </p>
            <ul className={classes.aboutGroupInfo}>
                <li><span className={classes.infoLabel}>الموقع</span><span className={`${classes.infoValue} ${classes.website}`}><a href={aboutme.website} target="_blank">{group.website}</a></span></li>
                    <div className={classes.divider}></div>
                <li><span className={classes.infoLabel}> الإنضمام للمجموع</span><span className={classes.infoValue}>{moment(new Date()).format('DD MMM YYYY')}</span></li>
            </ul>
        </div>
    )
}

AboutGroup.propTypes = {
    group:PropTypes.object.isRequired
}
