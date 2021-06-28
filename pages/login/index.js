import { useState } from 'react'
import { Button, Checkbox, CircularProgress, Paper, TextField } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import classes from '../../styles/Login.module.css'
import LoginLayout from '../../layouts/Login/LoginLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import { loginSchema } from '../../utils/Validation/ValidationObjects';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setUser } from '../../redux/actions/actionCreator';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useUser } from '../../utils/hooks/useUser'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ["login"]),
    },
})


export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [errorLogin, setErrorLogin] = useState(false)
    const router = useRouter()
    const { t } = useTranslation('login')
    useUser({redirectTo:null,redirectIfFound:"/researcher/"})
    const dispatch = useDispatch()


    const handleSubmit = (data) => {
        setIsLoading(true)
        console.log(data)
        axios({
            method: 'post',
            url: `/api/auth/login`,
            data,
            withCredentials: true
        })
            .then(response => {
                console.log(response.data)
                dispatch(setUser(response.data))
                setErrorLogin(null)
                router.push("/researcher/account/resume")
            })
            .catch(error => {
                setIsLoading(false)
                setErrorLogin(true)
                console.log(error.response?.message)
            })
            ;

    }

    const formik = useFormik({
        initialValues: { email: '', password: '', rememberMe: false },
        onSubmit: handleSubmit,
        validationSchema: loginSchema,
        validateOnChange: false,

    });


    return (
        <LoginLayout>
            <Paper className={classes.loginMainBase}>
                <h2 className={classes.baseTitle}>{t("title")}</h2>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        type="text"
                        variant="outlined"
                        className={classes.baseInput}
                        name="email"
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.email)}
                        helperText={formik.errors.email}
                        value={formik.values.email}
                        label={t("email")}
                    />
                    <TextField
                        type="password"
                        variant="outlined"
                        className={classes.baseInput}
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.password)}
                        helperText={formik.errors.password}
                        label={t("password")}
                    />
                    <div className={classes.basePossibleActions}>
                        <div className={classes.rememberMe}>
                            <Checkbox
                                checked={formik.values.rememberMe}
                                name="rememberMe"
                                checkedIcon={<FontAwesomeIcon icon={faWindowClose} style={{ color: "#06d6a0" }} />}
                                onChange={formik.handleChange}
                            />
                            <span className={classes.rememberMeText}>{t("remember-me")}</span>
                        </div>
                        <div className={classes.forgetPassword}>
                            <span>{t("forget-password")}</span>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className={classes.loginFormSubmit}
                        variant="contained"
                        disabled={isLoading}
                    >
                        <div>
                            {isLoading && <CircularProgress style={{ color: "#fff", width: 19, height: 19, marginLeft: 5, marginRight: 5 }} />}
                        </div>
                        <span>
                            {t("title")}
                        </span>
                    </Button>
                    <div style={{ marginTop: -10, marginBottom: 10, width: "80%" }}>
                        {
                            errorLogin && <Alert severity="error">{t("login-error")}</Alert>
                        }
                    </div>
                    <div className={classes.oauth}>
                        <div className={classes.suggestOauth}>
                            <div className={classes.hDivider}></div>
                            <span className={classes.suggestOauthSpan}>
                                {t('suggest-oauth')}
                            </span>
                            <div className={classes.hDivider}></div>
                        </div>
                        <ul className={classes.oauthLink}>
                            <li className={classes.google}><FontAwesomeIcon icon={faGoogle} style={{ color: "white" }} /></li>
                            <li className={classes.linkedin}><FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} /></li>
                            <li className={classes.twitter}><FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} /></li>
                            <li className={classes.facebook}><FontAwesomeIcon icon={faFacebookSquare} style={{ color: "white" }} /></li>
                        </ul>
                    </div>
                    <Link href="/registration" >
                        <span className={classes.goRegistration}>
                            {t('go-registration')}
                        </span>
                    </Link>
                </form>
            </Paper>
        </LoginLayout>
    )
}