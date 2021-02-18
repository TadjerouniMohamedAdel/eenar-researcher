import {useEffect, useState} from 'react'
import {Button, Link} from '@material-ui/core'
import classes from './AccountBanner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faFacebookSquare,faTwitter,faTwitch, faDribbble, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import Modal from '../Modal/Modal'
import EditElement from '../CrudModal/EditElement'
import { profileFields } from '../../utils/form/Fields'
import { useSelector } from 'react-redux'
import { profileSchema } from '../../utils/Validation/ValidationObjects'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/actions/actionCreator'

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
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    
    const handleEditSubmit = (data)=>{
        axios({
            method:'put',
            url:`${process.env.NEXT_PUBLIC_API_URL}/user/edit`,
            data
        }).then(response=>{
            console.log("respnse",response.data)
            dispatch(setUser(response.data))
            setEditVisible(false)
        }).catch(error=>{
            console.log(error)
        })


    }

    
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
                        <span className={classes.profileName}>{`${user.lastname} ${user.firstname}`}</span>
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
