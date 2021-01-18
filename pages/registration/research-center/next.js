import { Button, Checkbox, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import RegistartionLayout from '../../../layouts/Registration/RegistrationLayout'
import classes from '../../../styles/Registration.module.css'
export default function RegistrationFormStep2() {
    const [user,setUser] = useState({firstName:"معاذ",lastName:"محساس",email:"mouadh@cleverzone.io",password:"123456",retypedPassword:"123456",isAgree:true})

    const handleChangeInput = (e)=>{
        switch (e.target.name) {
            case 'firstName':
                setUser({...user,firstName:e.target.value})
                break;
            case 'lastName':
                    setUser({...user,lastName:e.target.value})
                break;
            case 'email':
                    setUser({...user,email:e.target.value})
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
                <h2 className={classes.registrationFormTitle}>التسجيل كمركز أبحاث</h2>
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
                        label="إيميل المؤسسة"
                        variant="outlined"
                        className={classes.registrationInput}
                        name="userName"
                        value={user.email}
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
