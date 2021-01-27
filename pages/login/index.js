import React,{useState} from 'react'
import { Button, Checkbox, Paper, TextField } from '@material-ui/core'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faFacebookSquare,faTwitter,faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import classes from '../../styles/Login.module.css'
import LoginLayout from '../../layouts/Login/LoginLayout'
import Link  from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import { loginSchema } from '../../utils/Validation/ValidationObjects';


export default function Login() {
    const router = useRouter()

    const handleSubmit = (data)=>{
        console.log(data)
        router.push("/researcher")

	}
    
    const formik = useFormik({
        initialValues:{email:'',password:'',rememberMe:false},
        onSubmit: handleSubmit,
        validationSchema:loginSchema,
      });   

	
	
	return (
		<LoginLayout>
			<Paper className={classes.loginMainBase}>
            <h2 className={classes.baseTitle}>تسجيل الدخول</h2>
            <form  onSubmit={formik.handleSubmit}>
                <TextField
                    type="text"
                    variant="outlined"
                    className={classes.baseInput}
                    name="email"
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    helperText={formik.errors.email}
                    value={formik.values.email}
                    label="إسم المستخدم أو الإيميل"
                />
                <TextField
                    type="password"
                    variant="outlined"
                    className={classes.baseInput}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                    helperText={formik.errors.password}
                    label="كلمة المرور"
                />
                <div className={classes.basePossibleActions}>
                    <div className={classes.rememberMe}>
                        <Checkbox 
                            checked={formik.values.rememberMe}
                            name="rememberMe"
                            checkedIcon={<FontAwesomeIcon icon={faWindowClose} style={{color:"#06d6a0"}} />}
                            onChange={formik.handleChange}
                        />
                        <span className={classes.rememberMeText}>تذكرني</span>
                    </div>
                    <div className={classes.forgetPassword}>
                        <span>نسيت كلمة المرور؟</span>
                    </div>
                </div>
                <Button
                    type="submit"
                    className={classes.loginFormSubmit}
                    variant="contained"
                >
                    <span>
                        تسجيل الدخول                                    
                    </span>
                </Button> 
                <div className={classes.oauth}>
                    <div className={classes.suggestOauth}>
                        <div className={classes.hDivider}></div>
                        <span className={classes.suggestOauthSpan}>
                            سجل الدخول عن طريق شبكات التواصل        
                        </span>
                        <div className={classes.hDivider}></div>
                    </div>
                    <ul className={classes.oauthLink}>
                        <li className={classes.youtube}><FontAwesomeIcon icon={faYoutube} style={{color:"white"}}/></li>
                        <li className={classes.twitch}><FontAwesomeIcon icon={faTwitch} style={{color:"white"}}/></li>
                        <li className={classes.twitter}><FontAwesomeIcon icon={faTwitter} style={{color:"white"}}/></li>
                        <li className={classes.facebook}><FontAwesomeIcon icon={faFacebookSquare} style={{color:"white"}}/></li>
                    </ul>
                </div>
                <Link href="/registration" >
                        <span className={classes.goRegistration}>
                                 ليس لديك حساب؟  
                        </span>
                </Link>
            </form>
		</Paper>
		</LoginLayout>
	)
}