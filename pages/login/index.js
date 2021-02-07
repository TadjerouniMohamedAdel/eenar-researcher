import React,{useState} from 'react'
import { Button, Checkbox, CircularProgress, Paper, TextField } from '@material-ui/core'
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
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux'

import axios from 'axios'
import { setUser } from '../../redux/actions/actionCreator';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Login() {
    const [isLoading,setIsLoading] = useState(false)
    const [errorLogin,setErrorLogin] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    const handleSubmit = (data)=>{
        setIsLoading(true)
        console.log(data)
        axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            data,
            // withCredentials:true
          })
            .then(response=>{
                console.log(response.data)
                dispatch(setUser(response.data))
                setErrorLogin(null)
                router.push("/researcher/account/resume")
            })
            .catch(error=>{
                setIsLoading(false)
                setErrorLogin(true)
                console.log(error.response.message)
            })
          ;
          
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
                    disabled={isLoading}
                >
                        <div>
                            {isLoading  && <CircularProgress style={{color:"#fff",width:19,height:19,marginLeft:5,marginRight:5}} />}
                        </div>
                    <span>
                        تسجيل الدخول                                    
                    </span>
                </Button> 
                <div style={{marginTop:-10,marginBottom:10,width:"80%"}}>
                    {
                        errorLogin&&       <Alert severity="error">يرجى التحقق من معلومات الحساب</Alert>
                    }
                </div>
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