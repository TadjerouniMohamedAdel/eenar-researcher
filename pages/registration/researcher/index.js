import { Button, Checkbox, FormHelperText, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import RegistartionLayout from '../../../layouts/Registration/RegistrationLayout'
import classes from '../../../styles/Registration.module.css'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import Alert from '@material-ui/lab/Alert';

import { researcherRegistrationValidation1, researcherRegistrationValidation2, researcherRegistrationValidation3 } from '../../../utils/Validation/ValidationObjects'
import axios from 'axios'
export default function Registration() {
    const [step,setStep] = useState(0)
    const [showAlertSuccess,setShowAlertSuccess] = useState(false)
    const [user,setUser] = useState({image:"",type:"researcher",firstname:"",gender:"",lastname:"",center:"",address:"",job:"",region:"",city:"",email:'',password:"",retypedPassword:"",isAgree:false})
    const router = useRouter()
    let data={}
    const handleSubmit = (data)=>{
        
        if(step<2) {
            setUser({...user,...data})
            setStep(step+1)
        }
        else{

            console.log({...user,...data})
            axios.post("https://eenar-backend.herokuapp.com/user/addUser", {...user,...data})
              .then(function (response) {
                console.log(response);
                setShowAlertSuccess(true)
                setTimeout(() => {
                    setShowAlertSuccess(false)
                    router.push("/login")
                }, 3000);
              })
              .catch(function (error) {
                console.log(error)
              })
        }
    }
    const formik1 = useFormik({
        initialValues:{firstname:"",lastname:"",gender:"",center:""},
        onSubmit: handleSubmit,
        validationSchema:researcherRegistrationValidation1,
      });
    
    const formik2 = useFormik({
        initialValues:{address:"",region:"",city:""},
        onSubmit: handleSubmit,
        validationSchema:researcherRegistrationValidation2,
      });
    
      const formik3 = useFormik({
        initialValues:{email:'',password:"",retypedPassword:"",isAgree:false},
        onSubmit: handleSubmit,
        validationSchema:researcherRegistrationValidation3,
      });
    

    const showStep1 = ()=>{
        return(
            <div className={classes.formFields}>
                <TextField
                    label="الإسم"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="firstname"
                    value={formik1.values.firstname}
                    type="text"
                    onChange={formik1.handleChange} 
                    error={formik1.errors.firstname}
                    helperText={formik1.errors.firstname}
                    />
                <TextField
                    label="اللقب"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="lastname"
                    value={formik1.values.lastname}
                    type="text"
                    onChange={formik1.handleChange}
                    error={formik1.errors.lastname}
                    helperText={formik1.errors.lastname} 
                />
                <TextField
                    label="الجامعة / المؤسسة"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="center"
                    value={formik1.values.center}
                    type="text"
                    onChange={formik1.handleChange}
                    error={formik1.errors.center}
                    helperText={formik1.errors.center} 
                    />
                <TextField
                    label="الجنس"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="gender"
                    value={formik1.values.gender}
                    type="text"
                    onChange={formik1.handleChange}
                    error={formik1.errors.gender}
                    helperText={formik1.errors.gender} 
                    />
                
                <Button
                    type="submit"
                    variant="outlined"
                    className={[classes.registrationSubmit ,classes.step1]}
                >
                    <span>متابعة</span>
                </Button>
            </div>
        )
    }

    const showStep2 = ()=>{
        return(
            <div className={classes.formFields}>
                <TextField
                    label="إقليم"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="region"
                    value={formik2.values.region}
                    type="text"
                    onChange={formik2.handleChange} 
                    error={formik2.errors.region}
                    helperText={formik2.errors.region}
                />
                <TextField
                    label="مدينة"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="city"
                    value={formik2.values.city}
                    type="text"
                    onChange={formik2.handleChange} 
                    error={formik2.errors.city}
                    helperText={formik2.errors.city}
                />
                <TextField
                    label="عنوان"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="address"
                    value={formik2.values.address}
                    type="text"
                    onChange={formik2.handleChange} 
                    error={formik2.errors.address}
                    helperText={formik2.errors.address}
                />
                
                <div className={classes.registrationAction}>
                    <Button
                            type="submit"
                            variant="outlined"
                            className={[classes.registrationSubmit ,classes.step1]}
                        >
                            <span>متابعة</span>
                    </Button>
                            <Button
                                type="button"
                                variant="outlined"
                                onClick={()=>setStep(step-1)}
                                className={[classes.registrationSubmit ,classes.step1]}
                            >
                                <span>العودة</span>
                            </Button>

                </div>
            </div>
        )
    }

    const showStep3 = ()=>(
        <div className={classes.formFields}>
                <TextField
                    label="المنصب"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="job"
                    key="job"
                    value={formik3.values.job}
                    type="text"
                    onChange={formik3.handleChange} 
                    error={formik3.errors.job}
                    helperText={formik3.errors.job}
                />
                <TextField
                    label="البريد الإلكتروني"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="email"
                    value={formik3.values.email}
                    type="text"
                    onChange={formik3.handleChange} 
                    error={formik3.errors.email}
                    helperText={formik3.errors.email}
                />
                <TextField
                    label="كلمة المرور"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="password"
                    value={formik3.values.password}
                    type="password"
                    onChange={formik3.handleChange}
                    error={formik3.errors.password}
                    helperText={formik3.errors.password} 
                    />
                <TextField
                    label="إعادة كلمة المرور"
                    variant="outlined"
                    className={classes.registrationInput}
                    name="retypedPassword"
                    value={formik3.values.retypedPassword}
                    type="password"
                    onChange={formik3.handleChange} 
                    error={formik3.errors.retypedPassword}
                    helperText={formik3.errors.retypedPassword}
                />
                <div style={{width: "80%",display: "flex",flexDirection: "column"}}>
                    <div className={classes.isAgree}>
                        <Checkbox 
                            checked={formik3.values.isAgree}
                            name="isAgree"
                            error={formik3.errors.isAgree}
                            helperText={formik3.errors.isAgree}
                            checkedIcon={<FontAwesomeIcon  style={{fontSize:24,color:"#118ab2"}} icon={faWindowClose}/>}
                            onChange={formik3.handleChange}
                        />
                        <span> الموافقة على <a style={{textDecoration:"none",fontWeight:"bold",color:"#118ab2"}} href="#">الشروط والأحكام</a></span>
                    </div>
                    <FormHelperText style={{color:"#f44336"}} id="component-helper-text">{formik3.errors.isAgree}</FormHelperText>
                </div>
                <div className={classes.registrationAction}>
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.registrationSubmit}
                    >
                        <span>سجل الآن</span>
                    </Button>
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={()=>setStep(step-1)}
                        className={[classes.registrationSubmit ,classes.step1]}
                    >
                        <span>العودة</span>
                    </Button>

                </div>
            </div>
    )

    

    return (
        <RegistartionLayout>
        <form className={classes.registrationForm} onSubmit={step==0?formik1.handleSubmit:step==1?formik2.handleSubmit:formik3.handleSubmit}>
            <h2 className={classes.registrationFormTitle}>التسجيل كباحث</h2>
            <p className={classes.registrationFormDescription}>
                إنظم إلى أكبر شبكة بحثية عربية تجمع بين الباحثين  
            </p>
            <ul className={classes.registrationFormSteps}>
                <li>إطّلع على آخر الأبحاث في مجالك</li>
                <li>كوّن شبكتك البحثية وانشر أبحاثك </li>
                <li>إستفد من حلول واستشارات</li>
            </ul>
            {
                step == 0 ? showStep1(): step==1?showStep2():showStep3()
            }
            {showAlertSuccess &&(
                    <Alert severity="success">تم  التسجيل بنجاح ، يمكنكم إستعمال المنصة بعد قبول الحساب</Alert>

            )}
        </form>
        </RegistartionLayout>
    )
}