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
import {useSelector} from 'react-redux'
import moment from 'moment'
import { Page, PDFDownloadLink , Text, Image , Font , View, Document, StyleSheet } from '@react-pdf/renderer';


Font.register({ family: 'arb', src: '//db.onlinewebfonts.com/t/eb685f5dc6b663497f7d5d4aa4a6c13d.ttf' });


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems:'center',
  },
  section: {
    fontFamily:'arb',
    width:"100%",
    flexDirection: 'column',
    alignItems:'center',
  },
  logo:{
    width:130,
    height:50,
  },
  title:{
    fontWeight:800,
    fontSize:14,
    marginTop:20
  },
  inProgress:{
    width:390,
    height:400,
  },
  textProgress:{
      fontSize:14
  }
});

// Create Document Component
const MyDocument = ({user}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src="/images/logo-complete.png" style={styles.logo}/>
        <Text style={styles.title}>{user.lastname} {user.firstname} السيرة الذاتية ل</Text>
      </View>
      <View style={styles.section}>
          <Image src="/images/in-progress.png" style={styles.inProgress}/>
          <Text style={styles.textProgress}>في قيد الإنجاز</Text>
      </View>
    </Page>
  </Document>
);

export default function AboutMe() {
    const [editVisible,setEditVisible] = useState(false)
    const [aboutme,setAboutme] = useState(dataaboutme)
    const user = useSelector(state => state.user)
    moment.locale('ar-dz')
    const handleEditAboutme = (data)=>{
        setEditVisible(false)
    }
    return (
        <div className={classes.resumeAboutMe}>
                    <Modal
                        visible={editVisible}
                        setVisible={setEditVisible}
                    >
                        <EditElement
                            item={{...user,...user.researchers}}                            
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
                        {user.researchers.aboutMe}
                    </p>
                    <ul className={classes.resumeAboutMeInfo}>
                        <li><span className={classes.infoLabel}>الإنضمام</span><span className={classes.infoValue}>{moment(user.createdAt).format('DD MMM YYYY')}</span></li>
                        <li><span className={classes.infoLabel}>المدينة</span><span className={classes.infoValue}>{user.region} {user.city}</span></li>
                        <li><span className={classes.infoLabel}>المؤسسة</span><span className={classes.infoValue}>{user.center}</span></li>
                        <li><span className={classes.infoLabel}>الوظيفة</span><span className={classes.infoValue}>{user.job}</span></li>
                        <li><span className={classes.infoLabel}>الموقع</span><span className={`${classes.infoValue} ${classes.website}`}><a href={aboutme.website} target="_blank">{aboutme.website}</a></span></li>
                    </ul>
                    <PDFDownloadLink className={classes.noStyled} document={<MyDocument user={user} />} fileName={`resume-${user.firstname}-${user.lastname}.pdf`}>
                    <Button className={classes.downloadResume}>
                        <span>حمل السيرة الذاتية</span>
                        <GetAppIcon />
                    </Button>
                    </PDFDownloadLink>
    </div>
    )
}
