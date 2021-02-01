import {useEffect, useState} from 'react'
import {Button, Link} from '@material-ui/core'
import classes from './AccountBanner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faFacebookSquare,faTwitter,faTwitch, faDribbble, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import Modal from '../Modal/Modal'
import EditElement from '../CrudModal/EditElement'
import { dataprofile } from '../../utils/fixtures/DevData'
import { profileFields } from '../../utils/form/Fields'
import { profileSchema } from '../../utils/Validation/ValidationObjects'
const overviews =[
    {name:"المنشورات",value:"0"},{name:"الأصدقاء",value:"0"},{name:"الزيارات",value:"0"}
]

const Rectongles = ()=> (
    <div className={classes.Rectangle9}>
        <div className={classes.Path2980}>
            <div className={classes.Rectangle11}>
                <div className={classes.Rectangle12}></div>
            </div> 
        </div>
    </div>
)

export default function AccountBanner() {
    const [editVisible,setEditVisible] = useState(false)
    const [user,setUser] = useState({firstname:"",lastname:""})
    
    const handleEditSubmit = (data)=>{
        setProfile(data)
        setEditVisible(false)

    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])
    return (
        <div className={classes.accountBanner}>
                <Modal
                    visible={editVisible}
                    setVisible={setEditVisible}
                >
                        <EditElement
                            item={user}      
                            title="الحساب"                      
                            fields={profileFields}
                            validationSchema={profileSchema}
                            handleSubmit={handleEditSubmit}
                        />
                </Modal>
                <div className={classes.bondeau}></div>
                <div className={classes.accountBannerContent}>
                    <div className={classes.accountBannerOverview}>
                                
                        {
                            overviews.map((overview,indx)=>(
                                <>
                                <div className={classes.dividerOverview}></div>
                                <div className={classes.overviewItem} key={indx}>
                                    <span className={classes.overviewValue}>{overview.value}</span>
                                    <span className={classes.overviewName}>{overview.name}</span>
                                </div>
                                </>
                            ))
                        }
                    </div>
                    <div className={classes.bannerProfile}>
                        <Rectongles />
                        <span className={classes.profileName}>{`${user.firstname} ${user.lastname}`}</span>
                        <span className={classes.profileJob}>{user.job}</span>
                    </div>
                    <div className={classes.bannerLinks}>
                        <Button className={classes.linkEditAccount} onClick={()=>setEditVisible(true)}>
                            <span>تعديل الحساب</span>
                        </Button>
                        <ul className={classes.bannerSocialNetworks}>
                            <li className={`${classes.iconItem} ${classes.youtube}`}><FontAwesomeIcon icon={faYoutube} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.twitch}`}><FontAwesomeIcon icon={faTwitch} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.facebook}`}><FontAwesomeIcon icon={faFacebookSquare} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.dribble}`}><FontAwesomeIcon icon={faDribbble} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.instagram}`}><FontAwesomeIcon icon={faInstagram} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.discord}`}><FontAwesomeIcon icon={faDiscord} style={{color:"white"}}/></li>
                            <li className={`${classes.iconItem} ${classes.twitter}`}><FontAwesomeIcon icon={faTwitter} style={{color:"white"}}/></li>
                        </ul>

                    </div>
                </div>
            </div>
    )
}
