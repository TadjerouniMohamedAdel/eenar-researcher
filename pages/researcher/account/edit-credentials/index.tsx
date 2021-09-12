import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import MyHead from '../../../../components/MyHead/MyHead';
import ResearcherLayout from '../../../../layouts/ResearcherLayout/ResearcherLayout';
import { RootState } from '../../../../redux/store2';
import axios from 'axios'
import classes from '../../../../styles/EditCredentials.module.css'
import { NotDefineYet } from '../../../../utils/types/types';
import { useFormik } from 'formik';
import { FormControl, MenuItem, TextField, Collapse, InputLabel, Select, Button, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab'


export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        await axios({
            method: "get",
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/user`,
            withCredentials: true,
            headers: { Cookie: context.req.headers.cookie }
        })
        return {

            props: {
                ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            },
            props: {
                ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
            }
        }
    }
}
const ResearcherAccountEditCredentialsPage: NextPage = () => {
    const user = useSelector((state: RootState) => state.user)
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleSubmit = (data: NotDefineYet) => {

    }


    const formik = useFormik({
        initialValues: { ...user, password: "" },
        onSubmit: handleSubmit,
        validateOnChange: false,
        // validationSchema: profileInfoSchema,
    });
    return (
        <ResearcherLayout>
            <MyHead title="الملف الشخصي  - اعدادات الحساب" />
            <div className={classes.editCredentialsContainer}>
                <h1>اعدادات الحساب</h1>
                <Collapse in={isSuccess} className={classes.alertContainer}>
                    <Alert severity="success" color="success" onClose={() => setIsSuccess(false)} className={classes.successAlert}>
                        تعديل الإعدادات تم بنجاح
                    </Alert>
                </Collapse>
                <Collapse in={isError} className={classes.alertContainer}>
                    <Alert severity="error" color="error" onClose={() => setIsError(false)} className={classes.successAlert}>
                        لم يتم تعديل الإعدادات
                    </Alert>
                </Collapse>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        label="البريد الالكتروني"
                        variant="outlined"
                        className={classes.editCredentialsInput}
                        name="email"
                        value={formik.values.email}
                        type="text"
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.email)}
                        helperText={formik.errors.email}
                    />
                    <TextField
                        label="كلمة المرور الحالية"
                        variant="outlined"
                        className={classes.editCredentialsInput}
                        name="password"
                        value={formik.values.password}
                        type="password"
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.password)}
                        helperText={formik.errors.password}
                    />
                    <TextField
                        label="كلمة المرور الجديدة"
                        variant="outlined"
                        className={classes.editCredentialsInput}
                        name="newPassword"
                        value={formik.values.newPassword}
                        type="password"
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.newPassword)}
                        helperText={formik.errors.newPassword}
                    />
                    <TextField
                        label="تأكيد كلمة المرور"
                        variant="outlined"
                        className={classes.editCredentialsInput}
                        name="newRetypedPassword"
                        value={formik.values.newRetypedPassword}
                        type="password"
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.newRetypedPassword)}
                        helperText={formik.errors.newRetypedPassword}
                    />
                    <TextField
                        label="رقم التعريف الدولي"
                        variant="outlined"
                        className={classes.editCredentialsInput}
                        name="idn"
                        value={formik.values.idn}
                        type="text"
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.idn)}
                        helperText={formik.errors.idn}
                    />
                    <FormControl variant="outlined" className={classes.editCredentialsInput}>
                        <InputLabel id="demo-simple-select-outlined-label">لغة الواجهة</InputLabel>
                        <Select
                            value={formik.values.city}
                            name="city"
                            onChange={formik.handleChange}
                            label="لغة الواجهة"
                            error={Boolean(formik.errors.city)}

                        >
                            <MenuItem value={"ar"}>العربية</MenuItem>
                            <MenuItem value={"en"}>English</MenuItem>
                            <MenuItem value={"fr"}>Français</MenuItem>


                        </Select>
                    </FormControl>
                    <div className={classes.formSubmit}>
                        <Button type="submit" className={classes.submitButton} disabled={isLoadingSubmit}>
                            {isLoadingSubmit && <CircularProgress style={{ color: "#fff", width: 19, height: 19, position: "relative", left: 10 }} />}
                            تأكيد
                        </Button>
                    </div>
                </form>
            </div>
        </ResearcherLayout>
    )
}

export default ResearcherAccountEditCredentialsPage;