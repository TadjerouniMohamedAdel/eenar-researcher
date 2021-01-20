import React,{useState} from 'react'
import { Button, Checkbox, Paper, TextField } from '@material-ui/core'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faFacebookSquare,faTwitter,faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import classes from '../../styles/Login.module.css'
import LoginLayout from '../../layouts/Login/LoginLayout'


export default function Login() {
	const [email,setEmail] = useState("معاذ محساس")
    const [password,setPassword] = useState("123456")
    const [rememberMe,setRememberMe] = useState(true)

	const handleChange =(e)=>{
		switch (e.target.name) {
			case "email":
					setEmail(e.target.value)
				break;

			case "password":
					setPassword(e.target.value)
				break;
		
			default:
				break;
		}
	}
	const handleSubmit = (e)=>{
		e.preventDefault()
	} 
	
	return (
		<LoginLayout>
			<Paper className={classes.loginMainBase}>
            <h2 className={classes.baseTitle}>تسجيل الدخول</h2>
            <form  onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    variant="outlined"
                    className={classes.baseInput}
                    name="email"
                    onChange={handleChange}
                    value={email}
                    label="إسم المستخدم أو الإيميل"
                />
                <TextField
                    type="password"
                    variant="outlined"
                    className={classes.baseInput}
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="كلمة المرور"
                />
                <div className={classes.basePossibleActions}>
                    <div className={classes.rememberMe}>
                        <Checkbox 
                            checked={rememberMe}
                            name="remember_me"
                            checkedIcon={<FontAwesomeIcon icon={faWindowClose} style={{color:"#06d6a0"}} />}
                            onChange={(e)=>setRememberMe(!rememberMe)}
                        />
                        <span>تذكرني</span>
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
                <a href="#" className={classes.goRegistration}>
                        ليس لديك حساب؟  
                </a>
            </form>
		</Paper>
		</LoginLayout>
	)
}