import { Button, Checkbox, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import RegistartionLayout from '../../../layouts/Registration/RegistrationLayout'
import classes from '../../../styles/Registration.module.css'
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import { centerRegistrationStep1,centerRegistrationStep2 } from '../../../utils/Validation/ValidationObjects'


export default function index() {
    const [step,setStep] = useState(0)
    const router = useRouter()
    
    const handleSubmit = (data)=>{
        console.log(data)
        setStep(1)
    }
    
    const formik = useFormik({
        initialValues:{centerName:'',region:"",city:"",address:"",class:'',job:""},
        onSubmit: handleSubmit,
        validationSchema:centerRegistrationStep1,
      });
      const handleSubmit2 = (data)=>{
        console.log(data)
    }
    
    const formik2 = useFormik({
        initialValues:{firstName:"",lastName:"",email:"",password:"",retypedPassword:""},
        onSubmit: handleSubmit2,
        validationSchema:centerRegistrationStep2,
    });

    

    return (
       <RegistartionLayout>
           {
               step === 0 ?
               (
                   
                    <form className={classes.registrationForm} onSubmit={formik.handleSubmit}>
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
                            name="centerName"
                            value={formik.values.centerName}
                            type="text"
                            onChange={formik.handleChange} 
                            error={formik.errors.centerName}
                            helperText={formik.errors.centerName}
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
                            label="القسم"
                            variant="outlined"
                            className={classes.registrationInput}
                            name="class"
                            value={formik.values.class}
                            type="text"
                            onChange={formik.handleChange} 
                            error={formik.errors.class}
                            helperText={formik.errors.class}
                            />
                        <TextField
                            label="المنصب"
                            variant="outlined"
                            className={classes.registrationInput}
                            name="job"
                            value={formik.values.job}
                            type="text"
                            onChange={formik.handleChange} 
                            error={formik.errors.job}
                            helperText={formik.errors.job}
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

               ):(
                <form className={classes.registrationForm} onSubmit={formik2.handleSubmit}>
                    <h2 className={classes.registrationFormTitle}>التسجيل كمركز أبحاث</h2>
                    <div className={classes.formFields}>
                        <TextField
                            label="الإسم"
                            variant="outlined"
                            className={classes.registrationInput}
                            name="firstName"
                            value={formik2.values.firstName}
                            type="text"
                            onChange={formik2.handleChange} 
                            error={formik2.errors.firstName}
                            helperText={formik2.errors.firstName}
                            />
                        <TextField
                            label="اللقب"
                            variant="outlined"
                            className={classes.registrationInput}
                            name="lastName"
                            value={formik2.values.lastName}
                            type="text"
                            onChange={formik2.handleChange} 
                            error={formik2.errors.lastName}
                            helperText={formik2.errors.lastName}
                        />
                        <TextField
                            label="إيميل المؤسسة"
                            variant="outlined"
                            className={classes.registrationInput}
                            name="email"
                            type="text"
                            onChange={formik2.handleChange}
                            value={formik2.values.email}
                            error={formik2.errors.email}
                            helperText={formik2.errors.email} 
                        />
                        <TextField
                            label="كلمة المرور"
                            variant="outlined"
                            className={classes.registrationInput}
                            name="password"
                            value={formik2.values.password}
                            type="password"
                            onChange={formik2.handleChange} 
                            error={formik2.errors.password}
                            helperText={formik2.errors.password}
                        />
                        <TextField
                            label="إعادة كلمة المرور"
                            variant="outlined"
                            className={classes.registrationInput}
                            name="retypedPassword"
                            value={formik2.values.retypedPassword}
                            type="password"
                            onChange={formik2.handleChange}
                            error={formik2.errors.retypedPassword}
                            helperText={formik2.errors.retypedPassword} 
                        />
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
                                onClick={()=>setStep(0)}
                                className={[classes.registrationSubmit ,classes.step1]}
                            >
                                <span>العودة</span>
                            </Button>

                        </div>
                    </div>
                </form>
               )
           }
       </RegistartionLayout>
    )
}
