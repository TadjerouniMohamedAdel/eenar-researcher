import { useState } from 'react'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { IconButton } from '@material-ui/core';
import classes from './AboutGroup.module.css'
import { dataaboutme } from '../../utils/fixtures/DevData'
import PropTypes from 'prop-types';
import { format} from 'date-fns'
import arLocale  from 'date-fns/locale/ar-DZ'


export default function AboutGroup({group}) {
    const [aboutme, setAboutme] = useState(dataaboutme)

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
                <li><span className={classes.infoLabel}> الإنضمام للمجموع</span><span className={classes.infoValue}>{format(new Date(),"dd MMMM yyyy",{locale:arLocale })}</span></li>
            </ul>
        </div>
    )
}

AboutGroup.propTypes = {
    group:PropTypes.object.isRequired
}
