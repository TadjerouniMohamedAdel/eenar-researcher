import React, { useState } from 'react'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button, IconButton } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import classes from './AboutMe.module.css'
import Modal from '../Modal/Modal';
import EditElement from '../CrudModal/EditElement';
import { aboutmeFields } from '../../utils/form/Fields';
import { aboutmeSchema } from '../../utils/Validation/ValidationObjects'
import { useDispatch } from 'react-redux'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { setUser } from '../../redux/actions/actionCreator';
import axios from 'axios'
import { format } from 'date-fns'
import arLocale from 'date-fns/locale/ar-DZ'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { AboutMeProps, NotDefineYet } from '../../utils/types/types'
import MyDocument from './MyDocument';




/**
    Card section to show current user's infomation: 

    - Description : few word about the researcher
    - Inscription date: account creation date
    - Address
    - Center: the company of the researcher
    - Job Name
    - website: link of the researcher's website
**/
const AboutMe: React.FC<AboutMeProps> = ({ user }) => {
  const [editVisible, setEditVisible] = useState(false)
  const dispatch = useDispatch()
  /** edit aboutme info */
  const handleEditAboutme = (data: NotDefineYet) => {
    data.researchers = { ...data.researchers, aboutMe: data.aboutMe }
    console.log("data to send aboutme", data)
    axios({
      method: 'put',
      url: `/api/user/edit`,
      data
    }).then(response => {
      console.log("respnse", response.data)
      dispatch(setUser(response.data))
      setEditVisible(false)
    }).catch(error => {
      console.log(error)
    })
  }



  return (
    <div className={classes.resumeAboutMe}>
      <Modal
        visible={editVisible}
        setVisible={setEditVisible}
      >
        <EditElement
          item={{ ...user, aboutMe: user.researchers.aboutMe }}
          fields={aboutmeFields}
          validationSchema={aboutmeSchema}
          handleSubmit={handleEditAboutme}
          title="نبذة عني"
        />
      </Modal>
      <h2>
        <div>
          <FontAwesomeIcon icon={faAddressCard} className={classes.titleIcon} />
          <span>
            نبذة عني
          </span>
        </div>
        <div>
          <PDFDownloadLink className={classes.noStyled} document={<MyDocument user={user} />} fileName={`resume-${user.firstname}-${user.lastname}.pdf`}>
            <IconButton onClick={() => { }}>
              <GetAppIcon className={classes.actionSectionIcon} />
            </IconButton>
          </PDFDownloadLink>
          <IconButton onClick={() => setEditVisible(true)}>
            <MoreHorizOutlinedIcon className={classes.actionSectionIcon} />
          </IconButton>
        </div>
      </h2>
      <p className={classes.resumeAboutMeDescription}>
        {user.researchers.aboutMe}
      </p>
      <ul className={classes.resumeAboutMeInfo}>
        <li><span className={classes.infoLabel}>الإنضمام</span><span className={classes.infoValue}>{format(new Date(user.createdAt), "dd MMMM yyyy", { locale: arLocale })}</span></li>
        <li><span className={classes.infoLabel}>المدينة</span><span className={classes.infoValue}>{user.region} {user.city}</span></li>
        <li><span className={classes.infoLabel}>المؤسسة</span><span className={classes.infoValue}>{user.center}</span></li>
        <li><span className={classes.infoLabel}>الوظيفة</span><span className={classes.infoValue}>{user.job}</span></li>
        <li><span className={classes.infoLabel}>الموقع</span><span className={`${classes.infoValue} ${classes.website}`}><a href={user.researchers.website} target="_blank">{user.researchers.website}</a></span></li>
      </ul>
    </div>
  )
}
export default AboutMe