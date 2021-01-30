import { useState } from 'react'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button, IconButton } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import classes from './AboutMe.module.css'
import Modal from '../Modal/Modal';
import EditElement from '../CrudModal/EditElement';
import { aboutmeFields } from '../../utils/form/Fields';
import {aboutmeSchema} from '../../utils/Validation/ValidationObjects'
import { dataaboutme } from '../../utils/fixtures/DevData';

export default function AboutMe() {
    const [editVisible,setEditVisible] = useState(false)
    const [aboutme,setAboutme] = useState(dataaboutme)

    const handleEditAboutme = (data)=>{
        setAboutme(data)
        setEditVisible(false)
    }
    return (
        <div className={classes.resumeAboutMe}>
                    <Modal
                        visible={editVisible}
                        setVisible={setEditVisible}
                    >
                        <EditElement
                            item={aboutme}                            
                            fields={aboutmeFields}
                            validationSchema={aboutmeSchema}
                            handleSubmit={handleEditAboutme}
                            title="نبذة عني"
                        />
                    </Modal>
                    <h2>
                        نبذة عني 
                        <IconButton>
                            <MoreHorizOutlinedIcon className={classes.actionSectionIcon} onClick={()=>setEditVisible(true)}/>
                        </IconButton>
                    </h2>
                    <p className={classes.resumeAboutMeDescription}>
                        {aboutme.description}
                    </p>
                    <ul className={classes.resumeAboutMeInfo}>
                        <li><span className={classes.infoLabel}>الإنضمام</span><span className={classes.infoValue}>{aboutme.date}</span></li>
                        <li><span className={classes.infoLabel}>المدينة</span><span className={classes.infoValue}>{aboutme.city}</span></li>
                        <li><span className={classes.infoLabel}>المؤسسة</span><span className={classes.infoValue}>{aboutme.company}</span></li>
                        <li><span className={classes.infoLabel}>الوظيفة</span><span className={classes.infoValue}>{aboutme.job}</span></li>
                        <li><span className={classes.infoLabel}>الموقع</span><span className={`${classes.infoValue} ${classes.website}`}><a href={aboutme.website} target="_blank">{aboutme.website}</a></span></li>
                    </ul>
                    <Button className={classes.downloadResume}>
                        <span>حمل السيرة الذاتية</span>
                        <GetAppIcon />
                    </Button>
    </div>
    )
}
