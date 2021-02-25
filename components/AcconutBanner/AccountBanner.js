import {useEffect, useState} from 'react'
import {Button, IconButton, Link} from '@material-ui/core'
import classes from './AccountBanner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faFacebookSquare,faTwitter,faTwitch, faDribbble, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import Modal from '../Modal/Modal'
import EditElement from '../CrudModal/EditElement'
import { profileFields1, profileFields2 } from '../../utils/form/Fields'
import { useSelector } from 'react-redux'
import { profileSchema1, profileSchema2 } from '../../utils/Validation/ValidationObjects'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/actions/actionCreator'
import MultiStepsEditElement from '../CrudModal/MultiStepsEditElement'
import EditIcon from '@material-ui/icons/Edit';
import Compressor from 'compressorjs'

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
        data.researchers={birthday:data.birthday}
        console.log("edit profil",data)
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
    


    const editProfileImage = (e)=>{
        let file = e.currentTarget.files[0]
        new Compressor(file, {
            quality: 0.8,
            width: 200,
            height: 200,
            convertSize: 50000,
            success (result) {
              const reader = new FileReader()
              reader.readAsDataURL(result)
              reader.onloadend = function () {
                const base64data = reader.result
                axios({
                    method:'put',
                    url:`${process.env.NEXT_PUBLIC_API_URL}/user/edit`,
                    data:{...user,image:base64data}
                }).then(response=>{
                    console.log("respnse",response.data)
                    dispatch(setUser(response.data))
                    setEditVisible(false)
                }).catch(error=>{
                    console.log(error)
                })
              }
            },
            error (err) {
              console.log(err.message)
            }
          })
    }
    
    return (
        <div className={classes.accountBanner}>
                <Modal
                    visible={editVisible}
                    setVisible={setEditVisible}
                >
                    <MultiStepsEditElement
                        item={{...user,birthday:user.researchers.birthday}}
                        title="الحساب"
                        handleSubmit={handleEditSubmit}                            
                        steps={[{fields:profileFields1,validationSchema:profileSchema1},{fields:profileFields2,validationSchema:profileSchema2}]}
                    />
                </Modal>
                <div className={classes.bondeau}></div>
                <div className={classes.accountBannerContent}>
                    <div className={classes.accountBannerOverview}>
                                
                        {
                            overviews.map((overview,indx)=>(
                                <>
                                <div className={classes.dividerOveriew}></div>
                                <div className={classes.overviewItem} key={indx}>
                                    <span className={classes.overviewValue}>{overview.value}</span>
                                    <span className={classes.overviewName}>{overview.name}</span>
                                </div>
                                </>
                            ))
                        }
                    </div>
                    <div className={classes.bannerProfile}>
                        {
                            user.image!="" && user.image ? (
                                    <img src={user.image} alt="" className={classes.Rectangle9} />
                            ):(

                                <Rectongles />
                            )
                        }
                        <IconButton className={classes.editProfile} onClick={()=>{document.getElementById(`edit-image-user`).click()}}>
                            <EditIcon className={classes.editProfileIcon} style={{fontSize:21}} />
                        </IconButton>
                        <input 
                            type="file" 
                            name="image" 
                            id="edit-image-user" 
                            hidden
                            onChange={editProfileImage}
                        />
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
