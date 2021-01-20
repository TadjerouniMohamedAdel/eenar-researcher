import { Button, Checkbox, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import RegistartionLayout from '../../../layouts/Registration/RegistrationLayout'
import classes from '../../../styles/Registration.module.css'


export default function index() {
    const [user,setUser] = useState({university:"معاذ ",class:"محساس",position:"Mouadh7"})

    const handleChangeInput = (e)=>{
        switch (e.target.name) {
            case 'university':
                    setUser({...user,university:e.target.value})
                break;
            case 'class':
                    setUser({...user,class:e.target.value})
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
                    label="المؤسسة"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="university"
                    value={user.university}
                    type="text"
                    onChange={handleChangeInput} 
                    />
                <TextField
                    label="القسم"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="password"
                    value={user.class}
                    type="text"
                    onChange={handleChangeInput} 
                    />
                <TextField
                    label="المنصب"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="retypedPassword"
                    value={user.position}
                    type="text"
                    onChange={handleChangeInput} 
                />
                
                <Button
                    type="submit"
                    variant="outlined"
                    className={[classes.registrationSubmit ,classes.step1]}
                >
                    <span>متابعة</span>
                </Button>
            </div>
        </form>
       </RegistartionLayout>
    )
}
