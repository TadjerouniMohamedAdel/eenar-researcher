import { useState } from 'react'
import { Button, IconButton } from '@material-ui/core'
import classes from './AccountBanner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookSquare, faTwitter, faSkype } from '@fortawesome/free-brands-svg-icons'
import Modal from '../Modal/Modal'
import { profileFields1, profileFields2, profileFields3 } from '../../utils/form/Fields'
import { useSelector, useDispatch } from 'react-redux'
import { profileSchema1, profileSchema2, profileSchema3 } from '../../utils/Validation/ValidationObjects'
import axios from 'axios'
import { setUser } from '../../redux/actions/actionCreator'
import MultiStepsEditElement from '../CrudModal/MultiStepsEditElement'
import EditIcon from '@material-ui/icons/Edit';
import Compressor from 'compressorjs'
import { Skeleton } from '@material-ui/lab'

const overviews = [
    { name: "المنشورات", value: "0" }, { name: "الأصدقاء", value: "0" }, { name: "الزيارات", value: "0" }
]

const Rectongles = () => (
    <div className={classes.Rectangle9}>
        <div className={classes.Path2980}>
            <div className={classes.Rectangle11}>
                <div className={classes.Rectangle12}></div>
            </div>
        </div>
    </div>
)

export default function AccountBanner() {
    const [editVisible, setEditVisible] = useState(false)
    const [isLoadingImage, setIsLoadingImage] = useState(false)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()


    /** edit profile user info */
    const handleEditSubmit = (data) => {
        data.researchers = { ...data.researchers, birthday: data.birthday }
        console.log("edit profil", data)
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


    /** edit image user */
    const editProfileImage = (e) => {
        setIsLoadingImage(true)
        let file = e.currentTarget.files[0]
        new Compressor(file, {
            quality: 0.8,
            width: 200,
            height: 200,
            convertSize: 50000,
            success(result) {
                const reader = new FileReader()
                reader.readAsDataURL(result)
                reader.onloadend = function () {
                    const base64data = reader.result
                    axios({
                        method: 'put',
                        url: `/api/user/edit`,
                        data: { ...user, image: base64data }
                    }).then(response => {
                        console.log("respnse", response.data)
                        dispatch(setUser(response.data))
                        setEditVisible(false)
                        setIsLoadingImage(false)
                    }).catch(error => {
                        console.log(error)
                        setIsLoadingImage(false)
                    })
                }
            },
            error(err) {
                console.log(err.message)
                setIsLoadingImage(false)
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
                    item={{ ...user, birthday: user.researchers.birthday }}
                    title="الحساب"
                    handleSubmit={handleEditSubmit}
                    steps={[{ fields: profileFields1, validationSchema: profileSchema1 }, { fields: profileFields2, validationSchema: profileSchema2 }, { fields: profileFields3, validationSchema: profileSchema3 }]}
                />
            </Modal>
            <div className={classes.bondeau}>
                <img src="/images/account-banner-placeholder.webp" alt="" />
            </div>
            <div className={classes.accountBannerContent}>
                <div className={classes.accountBannerOverview}>
                    <div>
                        <div className={classes.overviewItem}>
                            <span className={classes.overviewValue}><img src="https://www.countryflags.io/dz/flat/64.png" alt="" /></span>
                            <span className={classes.overviewName}>الجزائر</span>
                        </div>
                    </div>
                    {
                        overviews.map((overview, indx) => (
                            <div key={indx}>
                                <div className={classes.dividerOveriew}></div>
                                <div className={classes.overviewItem} key={indx}>
                                    <span className={classes.overviewValue}>{overview.value}</span>
                                    <span className={classes.overviewName}>{overview.name}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={classes.bannerProfile}>
                    {
                        isLoadingImage ? (
                            <Skeleton variant="rect" className={classes.Rectangle9} />

                        )


                            : user.image != "" && user.image ? (
                                <div className={classes.Rectangle9}>
                                    <div className={classes.Path2980}>
                                        <img src={user.image} alt="" className={classes.Rectangle9} />
                                    </div>
                                </div>
                            ) : (

                                <Rectongles />
                            )
                    }
                    <IconButton className={classes.editProfile} onClick={() => { document.getElementById(`edit-image-user`).click() }}>
                        <EditIcon className={classes.editProfileIcon} style={{ fontSize: 21 }} />
                    </IconButton>
                    <input
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg,image/webp"
                        name="image"
                        id="edit-image-user"
                        hidden
                        onChange={editProfileImage}
                    />
                    <span className={classes.profileName}>{`${user.lastname} ${user.firstname}`}</span>
                    <span className={classes.profileJob}>{user.job}</span>
                </div>
                <div className={classes.bannerLinks}>
                    <ul className={classes.badges}>
                        <li><img src="/images/badge1.png" alt="" /></li>
                        <li><img src="/images/badge2.png" alt="" /></li>
                        <li><img src="/images/badge4.png" alt="" /></li>
                    </ul>
                </div>
            </div>
            <Button className={classes.linkEditAccount} onClick={() => setEditVisible(true)}>
                <span>تعديل الحساب</span>
            </Button>
        </div>
    )
}
