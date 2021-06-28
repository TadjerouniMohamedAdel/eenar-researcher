import { Button, Checkbox, CircularProgress, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core'
import { useState } from 'react'
import RegistartionLayout from '../../../layouts/Registration/RegistrationLayout'
import classes from '../../../styles/Registration.module.css'
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import { centerRegistrationStep1, centerRegistrationStep2 } from '../../../utils/Validation/ValidationObjects'
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function index() {
    const [step, setStep] = useState(0)
    const [centerUser, setCenterUser] = useState({ gender: "", type: "center", center: '', region: "", city: "", address: "", class: '', job: "", firstname: "", lastname: "", email: "", password: "", retypedPassword: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [errorRegistration, setErrorRegistration] = useState(null)
    const [showAlertSuccess, setShowAlertSuccess] = useState(false)
    const router = useRouter()

    let data = {}

    /** submit function for forms */
    const handleSubmit = (data) => {

        if (step < 1) {
            setCenterUser({ ...centerUser, ...data })
            setStep(step + 1)
        }
        else {
            setIsLoading(true)
            console.log({ ...centerUser, ...data })
            axios.post(`/api/user/addUser`, { ...centerUser, ...data })
                .then(function (response) {
                    console.log(response);
                    setShowAlertSuccess(true)
                    setTimeout(() => {
                        setShowAlertSuccess(false)
                        router.push("/login")
                        setIsLoading(false)
                    }, 3000);
                })
                .catch(function (error) {
                    console.log(error)
                    setErrorRegistration(true)
                    console.log("error", error, { ...error })
                    setIsLoading(false)
                })
        }
    }

    /* forms builder  with formiks*/
    const formik = useFormik({
        initialValues: { center: '', region: "", city: "", address: "", class: '', job: "" },
        onSubmit: handleSubmit,
        validateOnChange: false,
        validationSchema: centerRegistrationStep1,
    });


    const formik2 = useFormik({
        initialValues: { firstname: "", lastname: "", email: "", password: "", retypedPassword: "" },
        onSubmit: handleSubmit,
        validateOnChange: false,
        validationSchema: centerRegistrationStep2,
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
                                    name="center"
                                    value={formik.values.center}
                                    type="text"
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.errors.center)}
                                    helperText={formik.errors.center}
                                />
                                <TextField
                                    label="الولاية"
                                    variant="outlined"
                                    className={classes.registrationInput}
                                    name="region"
                                    value={formik.values.region}
                                    type="text"
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.errors.region)}
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
                                    error={Boolean(formik.errors.city)}
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
                                    error={Boolean(formik.errors.address)}
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
                                    error={Boolean(formik.errors.class)}
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
                                    error={Boolean(formik.errors.job)}
                                    helperText={formik.errors.job}
                                />
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    className={`${classes.registrationSubmit} ${classes.step1}`}
                                >
                                    <span>متابعة</span>
                                </Button>
                            </div>
                        </form>

                    ) : (
                        <form className={classes.registrationForm} onSubmit={formik2.handleSubmit}>
                            <h2 className={classes.registrationFormTitle}>التسجيل كمركز أبحاث</h2>
                            <div className={classes.formFields}>
                                <TextField
                                    label="الإسم"
                                    variant="outlined"
                                    className={classes.registrationInput}
                                    name="firstname"
                                    value={formik2.values.firstname}
                                    type="text"
                                    onChange={formik2.handleChange}
                                    error={Boolean(formik2.errors.firstname)}
                                    helperText={formik2.errors.firstname}
                                />
                                <TextField
                                    label="اللقب"
                                    variant="outlined"
                                    className={classes.registrationInput}
                                    name="lastname"
                                    value={formik2.values.lastname}
                                    type="text"
                                    onChange={formik2.handleChange}
                                    error={Boolean(formik2.errors.lastname)}
                                    helperText={formik2.errors.lastname}
                                />
                                <FormControl component="fieldset" className={classes.registrationInput} style={{ marginBottom: 10 }}>
                                    <FormLabel component="legend">الجنس</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender"
                                        value={formik2.values.gender}
                                        onChange={formik2.handleChange}
                                    >
                                        <div style={{ display: "flex" }}>
                                            <FormControlLabel value="male" control={<Radio />} label="رجل" />
                                            <FormControlLabel value="female" control={<Radio />} label="إمرأة" />
                                        </div>
                                    </RadioGroup>
                                    <FormHelperText style={{ marginTop: -5 }}>{formik2.errors.gender}</FormHelperText>
                                </FormControl>
                                <TextField
                                    label="إيميل المؤسسة"
                                    variant="outlined"
                                    className={classes.registrationInput}
                                    name="email"
                                    type="text"
                                    onChange={formik2.handleChange}
                                    value={formik2.values.email}
                                    error={Boolean(formik2.errors.email)}
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
                                    error={Boolean(formik2.errors.password)}
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
                                    error={Boolean(formik2.errors.retypedPassword)}
                                    helperText={formik2.errors.retypedPassword}
                                />
                                <div className={classes.registrationAction}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className={classes.registrationSubmit}
                                    >
                                        <div>
                                            {isLoading && <CircularProgress style={{ color: "#fff", width: 19, height: 19, marginLeft: 5, marginRight: 5 }} />}
                                        </div>
                                        <span>سجل الآن</span>
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outlined"
                                        onClick={() => setStep(0)}
                                        className={`${classes.registrationSubmit} ${classes.step1}`}
                                    >
                                        <span>العودة</span>
                                    </Button>

                                </div>
                                <div style={{ marginTop: -10, marginBottom: 10, width: "80%" }}>
                                    {
                                        errorRegistration && <Alert severity="error">يرجى التحقق من معلومات الحساب</Alert>
                                    }
                                </div>
                            </div>
                            {showAlertSuccess && (
                                <Alert severity="success">تم  التسجيل بنجاح ، يمكنكم إستعمال المنصة بعد قبول الحساب</Alert>

                            )}
                        </form>
                    )
            }
        </RegistartionLayout>
    )
}
