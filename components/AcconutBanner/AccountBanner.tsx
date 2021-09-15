import React, { useState } from 'react'
import { Button, CircularProgress, Collapse, FormControl, FormHelperText, FormLabel, IconButton, MenuItem } from '@material-ui/core'
import classes from './AccountBanner.module.css'
import { useDispatch } from 'react-redux'
import { profileInfoSchema } from '../../utils/Validation/ValidationObjects'
import axios from 'axios'
import { setUser } from '../../redux/actions/actionCreator'
import Compressor from 'compressorjs'
import { Alert, Skeleton } from '@material-ui/lab'
import { NotDefineYet, AccountBannerProps } from '../../utils/types/types'
import { overviewsdata } from '../../utils/fixtures/DevData'
import { TextField } from '@material-ui/core'
import { useFormik } from 'formik'
import { RadioGroup } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'
import { Radio } from '@material-ui/core'
import { InputLabel } from '@material-ui/core'
import { Select } from '@material-ui/core'
import { Country, State, City } from 'country-state-city';

/**
    Banner to show current user's infomation: 

    - ProfielImage : Image of the current user
    - BannerImage date: Image of the current user's banner
    - Overviews: Stats about user's activity (views,posts,friends) and his location 
    - badges: List researcher's earned badges
    - Job Name

    Also it gives access to  edit profile action
**/

const AccountBanner: React.FC<AccountBannerProps> = ({ user, editable }) => {
    const [isLoadingImage, setIsLoadingImage] = useState(false)
    const [newProfileImage, setNewProfileImage] = useState<null | string | ArrayBuffer>(null)
    const [newProfileBanner, setNewProfileBanner] = useState<null | string | ArrayBuffer>(null)
    const dispatch = useDispatch()
    const countryList = Country.getAllCountries()
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const Rectongles: React.FC<{ img: string, gender: string }> = ({ img, gender }) => (
        <div className={classes.Rectangle9}>
            <div className={classes.Path2980}>
                <img src={img !== "" && img !=="null" && img !== null ? img : `/images/${gender}-placeholder.jpg`} alt="" />
            </div>
        </div>
    )


    /** edit profile user info */
    const handleEditSubmit = (data: NotDefineYet) => {
        setIsLoadingSubmit(true)
        data.researchers = { ...data.researchers, birthday: data.birthday }
        if (newProfileImage !== "" && newProfileImage !== null) data = { ...data, image: newProfileImage }
        if (newProfileBanner !== "" && newProfileBanner !== null) data = { ...data, imageBanner: newProfileBanner }
        console.log("edit profil", data)
        axios({
            method: 'put',
            url: `/api/user/edit`,
            data
        }).then(response => {
            console.log("respnse", response.data)
            document.getElementById("account-banner")?.scrollIntoView({ block: "start", behavior: 'smooth' })
            dispatch(setUser(response.data))
            setIsSuccess(true)
            setTimeout(() => {
                setIsSuccess(false)
            }, 5000);
        }).catch(error => {
            console.log(error)
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 5000);
        })
            .finally(() => {
                setIsLoadingSubmit(false)
            })
    }

    const formik = useFormik({
        initialValues: { ...user, birthday: user.researchers.birthday,idn:user.idn|| "",defaultLanguage:user.defaultLanguage|| "ar" },
        onSubmit: handleEditSubmit,
        validateOnChange: false,
        validationSchema: profileInfoSchema,
    });

    /** edit image user */
    const editProfileImage = (e: NotDefineYet) => {
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
                    setNewProfileImage(base64data)
                    setIsLoadingImage(false)
                }
            },
            error(err) {
                console.log(err.message)
                setIsLoadingImage(false)
            }
        })
    }

    /** edit banner user */
    const editProfileBanner = (e: NotDefineYet) => {
        let file = e.currentTarget.files[0]
        new Compressor(file, {
            quality: 0.8,
            width: 1000,
            convertSize: 50000,
            success(result) {
                const reader = new FileReader()
                reader.readAsDataURL(result)
                reader.onloadend = function () {
                    const base64data = reader.result
                    setNewProfileBanner(base64data)
                }
            },
            error(err) {
                console.log(err.message)
            }
        })
    }

    return (
        <div className={classes.accountBanner} id="account-banner">
            <div className={classes.bondeau}>
                <img src={`${newProfileBanner || user.imageBanner || "/images/account-banner-placeholder.webp"}`} alt="" />
                {
                    editable && (
                        <Button type="button" className={classes.editBannerImage} onClick={() => { document.getElementById(`edit-banner-user`)?.click() }}>
                            <i className={`ri-camera-line`}></i>
                            <span>غير غلاف الملف</span>
                        </Button>

                    )
                }
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
                        overviewsdata.map((overview, indx) => (
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

                        ) : <Rectongles img={`${newProfileImage ?? user.image}`} gender={user.gender} />
                    }
                    {
                        editable && (
                            <IconButton className={classes.editProfileImage} onClick={() => { document.getElementById(`edit-image-user`)?.click() }}>
                                <i className={`ri-camera-line ${classes.editProfileIcon}`} style={{ fontSize: 21 }}></i>
                            </IconButton>
                        )
                    }
                    <input
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg,image/webp"
                        name="image"
                        id="edit-image-user"
                        hidden
                        onChange={editProfileImage}
                    />
                    <input
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg,image/webp"
                        name="image"
                        id="edit-banner-user"
                        hidden
                        onChange={editProfileBanner}
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
            {
                editable && (
                    <div className={classes.editProfileInfo}>
                        <h1>تعديل الملف الشخصي</h1>
                        <Collapse in={isSuccess} className={classes.alertContainer}>
                            <Alert severity="success" color="success" onClose={() => setIsSuccess(false)} className={classes.successAlert}>
                                تعديل الملف الشخصي تم بنجاح
                            </Alert>
                        </Collapse>
                        <Collapse in={isError} className={classes.alertContainer}>
                            <Alert severity="error" color="error" onClose={() => setIsError(false)} className={classes.successAlert}>
                                لم  يتم تعديل الملف الشخصي
                            </Alert>
                        </Collapse>


                        <form className={classes.editProfileInfoForm} onSubmit={formik.handleSubmit}>
                            <TextField
                                label="الإسم"
                                variant="outlined"
                                className={classes.editProfileInput}
                                name="firstname"
                                value={formik.values.firstname}
                                type="text"
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.firstname)}
                                helperText={formik.errors.firstname}
                            />
                            <TextField
                                label="اللقب"
                                variant="outlined"
                                className={classes.editProfileInput}
                                name="lastname"
                                value={formik.values.lastname}
                                type="text"
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.lastname)}
                                helperText={formik.errors.lastname}
                            />
                            <TextField
                                label="الجامعة / المؤسسة"
                                variant="outlined"
                                className={classes.editProfileInput}
                                name="center"
                                value={formik.values.center}
                                type="text"
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.center)}
                                helperText={formik.errors.center}
                            />
                            <TextField
                                label="الوظيفة"
                                variant="outlined"
                                className={`input-align-right ${classes.editProfileInput}`}
                                name="job"
                                value={formik.values.job}
                                InputLabelProps={{ shrink: true }}
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.job)}
                                helperText={formik.errors.job}
                            />
                            <TextField
                                label="التاريخ الميلاد"
                                variant="outlined"
                                className={`input-align-right ${classes.editProfileInput}`}
                                name="birthday"
                                value={formik.values["birthday"] ? formik.values["birthday"].split("T")[0] : formik.values["birthday"]}
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.birthday)}
                                helperText={formik.errors.birthday}
                            />
                            <FormControl variant="outlined" className={classes.editProfileInput}>
                                <InputLabel id="demo-simple-select-outlined-label">الجنس</InputLabel>
                                <Select
                                    value={formik.values.gender}
                                    name="gender"
                                    onChange={formik.handleChange}
                                    label="الجنس"
                                    error={Boolean(formik.errors.gender)}

                                >
                                    <MenuItem value={"female"}>إمرأة</MenuItem>
                                    <MenuItem value={"male"}>رجل</MenuItem>


                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.editProfileInput}>
                                <InputLabel id="demo-simple-select-outlined-label">البلد</InputLabel>
                                <Select
                                    value={formik.values.country}
                                    name="country"
                                    onChange={formik.handleChange}
                                    label="البلد"
                                    error={Boolean(formik.errors.country)}
                                >
                                    {
                                        countryList.map((country, index) => (
                                            <MenuItem key={`country-choice-${index}`} value={country.isoCode}>{country.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.editProfileInput}>
                                <InputLabel id="demo-simple-select-outlined-label">إقليم</InputLabel>
                                <Select
                                    value={formik.values.region}
                                    name="region"
                                    onChange={formik.handleChange}
                                    label="إقليم"
                                    error={Boolean(formik.errors.region)}

                                >
                                    {
                                        State.getStatesOfCountry(formik.values.country).map((state, index) => (
                                            <MenuItem key={`state-choice-${index}`} value={state.isoCode}>{state.name}</MenuItem>
                                        ))
                                    }
                                </Select>

                            </FormControl>

                            <FormControl variant="outlined" className={classes.editProfileInput}>
                                <InputLabel id="demo-simple-select-outlined-label">مدينة</InputLabel>
                                <Select
                                    value={formik.values.city}
                                    name="city"
                                    onChange={formik.handleChange}
                                    label="مدينة"
                                    error={Boolean(formik.errors.city)}

                                >
                                    {
                                        City.getCitiesOfState(formik.values.country, formik.values.region).map((city, index) => (
                                            <MenuItem key={`city-choice-${index}`} value={city.name}>{city.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <TextField
                                label="العنوان"
                                variant="outlined"
                                className={classes.editProfileInput}
                                name="address"
                                value={formik.values.address}
                                type="text"
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.address)}
                                helperText={formik.errors.address}
                            />
                            <TextField
                                label="رقم التعريف الدولي"
                                variant="outlined"
                                className={classes.editProfileInput}
                                name="idn"
                                value={formik.values.idn}
                                type="text"
                                onChange={formik.handleChange}
                                error={Boolean(formik.errors.idn)}
                                helperText={formik.errors.idn}
                            />
                            <FormControl variant="outlined" className={classes.editProfileInput}>
                                <InputLabel id="demo-simple-select-outlined-label">لغة الواجهة</InputLabel>
                                <Select
                                    value={formik.values.defaultLanguage}
                                    name="defaultLanguage"
                                    onChange={formik.handleChange}
                                    label="لغة الواجهة"
                                    error={Boolean(formik.errors.defaultLanguage)}

                                >
                                    <MenuItem value={"ar"}>العربية</MenuItem>
                                    <MenuItem value={"en"}>English</MenuItem>
                                    <MenuItem value={"fr"}>Français</MenuItem>


                                </Select>
                            </FormControl>
                            <div className={classes.formSubmit}>
                                <Button type="submit" className={classes.submitButton} disabled={isLoadingSubmit}>
                                    {isLoadingSubmit && <CircularProgress style={{ color: "#fff", width: 19, height: 19, position: "relative", left: 10 }} />}
                                    تأكيد
                                </Button>
                            </div>
                        </form>

                    </div>
                )
            }

        </div>
    )
}

export default AccountBanner;