import { useState } from 'react'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button, IconButton } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import classes from './AboutMe.module.css'
import Modal from '../Modal/Modal';
import EditElement from '../CrudModal/EditElement';
import { aboutmeFields } from '../../utils/form/Fields';
import { aboutmeSchema } from '../../utils/Validation/ValidationObjects'
import { dataaboutme } from '../../utils/fixtures/DevData';
import { useSelector, useDispatch } from 'react-redux'
import { Page, PDFDownloadLink, Text, Image, Font, View, Document, StyleSheet } from '@react-pdf/renderer';
import { setUser } from '../../redux/actions/actionCreator';
import axios from 'axios'
import { format} from 'date-fns'
import arLocale  from 'date-fns/locale/ar-DZ'



/** registe fnt arabic for pdf */
Font.register({ family: 'arb', src: '//db.onlinewebfonts.com/t/eb685f5dc6b663497f7d5d4aa4a6c13d.ttf' });


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    fontFamily: 'arb',
    width: "100%",
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 50,
  },
  title: {
    fontWeight: 800,
    fontSize: 14,
    marginTop: 20
  },
  inProgress: {
    width: 390,
    height: 400,
  },
  textProgress: {
    fontSize: 14
  }
});

// Create Resume Component
const MyDocument = ({ user }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src="/images/logo-complete.png" style={styles.logo} />
        <Text style={styles.title}>{user.lastname} {user.firstname} السيرة الذاتية ل</Text>
      </View>
      <View style={styles.section}>
        <Image src="/images/in-progress.png" style={styles.inProgress} />
        <Text style={styles.textProgress}>في قيد الإنجاز</Text>
      </View>
    </Page>
  </Document>
);

export default function AboutMe() {
  const [editVisible, setEditVisible] = useState(false)
  const [aboutme, setAboutme] = useState(dataaboutme)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()


  /** edit aboutme info */
  const handleEditAboutme = (data) => {
    data.researchers = { ...data.researchers, aboutMe: data.aboutMe }
    console.log("data to send aboutme", data)
    axios({
      method: 'put',
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/edit`,
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
        نبذة عني
        <IconButton onClick={() => setEditVisible(true)}>
          <MoreHorizOutlinedIcon className={classes.actionSectionIcon} />
        </IconButton>
      </h2>
      <p className={classes.resumeAboutMeDescription}>
        {user.researchers.aboutMe}
      </p>
      <ul className={classes.resumeAboutMeInfo}>
        <li><span className={classes.infoLabel}>الإنضمام</span><span className={classes.infoValue}>{format(new Date(user.createdAt),"dd MMMM yyyy",{locale:arLocale })}</span></li>
        <li><span className={classes.infoLabel}>المدينة</span><span className={classes.infoValue}>{user.region} {user.city}</span></li>
        <li><span className={classes.infoLabel}>المؤسسة</span><span className={classes.infoValue}>{user.center}</span></li>
        <li><span className={classes.infoLabel}>الوظيفة</span><span className={classes.infoValue}>{user.job}</span></li>
        <li><span className={classes.infoLabel}>الموقع</span><span className={`${classes.infoValue} ${classes.website}`}><a href={aboutme.website} target="_blank">{aboutme.website}</a></span></li>
      </ul>
      <PDFDownloadLink className={classes.noStyled} document={<MyDocument user={user} />} fileName={`resume-${user.firstname}-${user.lastname}.pdf`}>
        <Button className={classes.downloadResume} onClick={() => { }}>
          <span>حمل السيرة الذاتية</span>
          <GetAppIcon />
        </Button>
      </PDFDownloadLink>
    </div>
  )
}
