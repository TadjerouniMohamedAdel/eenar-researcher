import { Button, Checkbox, FormHelperText, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import RegistartionLayout from '../../../layouts/Registration/RegistrationLayout'
import classes from '../../../styles/Registration.module.css'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import { researcherRegistrationValidation } from '../../../utils/Validation/ValidationObjects'

export default function Registration() {
    const router = useRouter()
    const handleSubmit = (data)=>{
        router.push("/researcher/")
        console.log(data)
    }
    const formik = useFormik({
        initialValues:{email:'',firstName:"",lastName:"",userName:"",university:"",password:"",retypedPassword:"",address:"",region:"",city:"",isAgree:false},
        onSubmit: handleSubmit,
        validationSchema:researcherRegistrationValidation,
      }); 

    

    

    return (
        <RegistartionLayout>
        <form className={classes.registrationForm} onSubmit={formik.handleSubmit}>
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
                    value={formik.values.firstName}
                    type="text"
                    onChange={formik.handleChange} 
                    error={formik.errors.firstName}
                    helperText={formik.errors.firstName}
                    />
                <TextField
                    label="اللقب"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="lastName"
                    value={formik.values.lastName}
                    type="text"
                    onChange={formik.handleChange}
                    error={formik.errors.lastName}
                    helperText={formik.errors.lastName} 
                    />
                <TextField
                    label="إسم المستخدم"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="userName"
                    value={formik.values.userName}
                    type="text"
                    onChange={formik.handleChange} 
                    error={formik.errors.userName}
                    helperText={formik.errors.userName}
                    />
                <TextField
                    label="البريد الإلكتروني"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="email"
                    value={formik.values.email}
                    type="text"
                    onChange={formik.handleChange} 
                    error={formik.errors.email}
                    helperText={formik.errors.email}
                />
                <TextField
                    label="الجامعة / المؤسسة"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="university"
                    value={formik.values.university}
                    type="text"
                    onChange={formik.handleChange}
                    error={formik.errors.university}
                    helperText={formik.errors.university} 
                    />
                <TextField
                    label="إقليم"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="region"
                    value={formik.values.region}
                    type="text"
                    onChange={formik.handleChange} 
                    error={formik.errors.region}
                    helperText={formik.errors.region}
                />
                <TextField
                    label="مدينة"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="city"
                    value={formik.values.city}
                    type="text"
                    onChange={formik.handleChange} 
                    error={formik.errors.city}
                    helperText={formik.errors.city}
                />
                <TextField
                    label="عنوان"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="address"
                    value={formik.values.address}
                    type="text"
                    onChange={formik.handleChange} 
                    error={formik.errors.address}
                    helperText={formik.errors.address}
                />
                
                <TextField
                    label="كلمة المرور"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="password"
                    value={formik.values.password}
                    type="password"
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                    helperText={formik.errors.password} 
                    />
                <TextField
                    label="إعادة كلمة المرور"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="retypedPassword"
                    value={formik.values.retypedPassword}
                    type="password"
                    onChange={formik.handleChange} 
                    error={formik.errors.retypedPassword}
                    helperText={formik.errors.retypedPassword}
                />
                <div style={{width: "80%",display: "flex",flexDirection: "column"}}>
                    <div className={classes.isAgree}>
                        <Checkbox 
                            checked={formik.values.isAgree}
                            name="isAgree"
                            error={formik.errors.isAgree}
                            helperText={formik.errors.isAgree}
                            checkedIcon={<FontAwesomeIcon  style={{fontSize:24,color:"#118ab2"}} icon={faWindowClose}/>}
                            onChange={formik.handleChange}
                        />
                        <span> الموافقة على <a style={{textDecoration:"none",fontWeight:"bold",color:"#118ab2"}} href="#">الشروط والأحكام</a></span>
                    </div>
                    <FormHelperText style={{color:"#f44336"}} id="component-helper-text">{formik.errors.isAgree}</FormHelperText>
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
