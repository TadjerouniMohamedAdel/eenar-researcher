import { Button, Checkbox, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import RegistartionLayout from '../../../layouts/Registration/RegistrationLayout'
import classes from '../../../styles/Registration.module.css'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Registration() {
    const [user,setUser] = useState({firstName:"معاذ",lastName:"محساس",userName:"إسم المستخدم",university:"Mouadh7",password:"123456",retypedPassword:"123456",isAgree:true})

    const handleChangeInput = (e)=>{
        switch (e.target.name) {
            case 'firstName':
                setUser({...user,firstName:e.target.value})
                break;
            case 'lastName':
                    setUser({...user,lastName:e.target.value})
                break;
            case 'userName':
                    setUser({...user,userName:e.target.value})
                break;
            case 'university':
                    setUser({...user,university:e.target.value})
                break;
            case 'password':
                    setUser({...user,password:e.target.value})
                break;
            case 'retypedPassword':
                    setUser({...user,retypedPassword:e.target.value})
                break;
        
            default:
                break;
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return (
        <RegistartionLayout>
        <form className={classes.registrationForm} onSubmit={handleSubmit}>
            <h2 className={classes.registrationFormTitle}>التسجيل كباحث</h2>
            <p className={classes.registrationFormDescription}>
                إنظم إلى أكبر شبكة بحثية عربية تجمع بين الباحثين  
            </p>
            <ul className={classes.registrationFormSteps}>
                <li>إطّلع على آخر الأبحاث في مجالك</li>
                <li>كوّن شبكتك البحثية وانشر أبحاثك </li>
                <li>إستفد من حلول واستشارات</li>
            </ul>
            <div className={classes.formFields}>
                <TextField
                    label="الإسم"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="firstName"
                    value={user.firstName}
                    type="text"
                    onChange={handleChangeInput} 
                    />
                <TextField
                    label="اللقب"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="lastName"
                    value={user.lastName}
                    type="text"
                    onChange={handleChangeInput} 
                    />
                <TextField
                    label="إسم المستخدم"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="userName"
                    value={user.userName}
                    type="text"
                    onChange={handleChangeInput} 
                    />
                <TextField
                    label="الجامعة / المؤسسة"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="university"
                    value={user.university}
                    type="text"
                    onChange={handleChangeInput} 
                    />
                <TextField
                    label="كلمة المرور"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="password"
                    value={user.password}
                    type="password"
                    onChange={handleChangeInput} 
                    />
                <TextField
                    label="إعادة كلمة المرور"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="retypedPassword"
                    value={user.retypedPassword}
                    type="password"
                    onChange={handleChangeInput} 
                />
                <div className={classes.isAgree}>
                    <Checkbox 
                        checked={user.isAgree}
                        name="is_agree"
                        checkedIcon={<FontAwesomeIcon  style={{fontSize:24,color:"#118ab2"}} icon={faWindowClose}/>}
                        onChange={(e)=>setUser({...user,isAgree:!user.isAgree})}
                    />
                    <span> الموافقة على <a style={{textDecoration:"none",fontWeight:"bold",color:"#118ab2"}} href="#">الشروط والأحكام</a></span>
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.registrationSubmit}
                >
                    <span>سجل الآن</span>
                </Button>
            </div>
        </form>
        </RegistartionLayout>
    )
}
