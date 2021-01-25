import React from 'react'
import { TextField,Button } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const fields =[
    {
        name:"address",
        label:"عنوان الطلب",
        type:"text",
    },
    {
        name:"service",
        label:"الخدمة",
        type:"text",
    },
    {
        name:"speciality",
        label:"التخصص الأساسي",
        type:"text",
    } 
]
const handleSubmit = (data)=>{
    console.log(data)
}
const title="طلب خدمة"

const values = {service:"إسم الخدمة",speciality:"علم الإجرام",address:"إعداد خطة البحث"}
const formDescription ="لطلب أي خدمة مع انشاء حساب بخطوة واحدة فقط, أكمل النموذج التالي"

const validationSchema = Yup.object({
    address: Yup.string().required('يجب ملئ هذه المعلومة'),
    service: Yup.string().required('يجب ملئ هذه المعلومة'),
    speciality: Yup.string().required('يجب ملئ هذه المعلومة'),
  })



export default function AddElement(props) {
    
    const formik = useFormik({
        initialValues:values,
        onSubmit: handleSubmit,
        validationSchema,
      });    
    
    
    return (
        <div className={classes.crudElement}>
            <h1>{title}</h1>
            <div className={classes.divider}></div>
            <div className={classes.formDescription}>
                {formDescription}
            </div>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                {
                    fields.map((field,index)=>(
                        <div 
                            key={`crud-add-element-${index}`}
                        >
                            <TextField
                                className={classes.formInput}
                                name={field.name}
                                type={field.type}
                                onChange={formik.handleChange}
                                value={formik.values[field.name]}
                                id={`crud-add-element-${index}-${field.name}`}
                                label={field.label}
                                error={formik.errors[field.name]}
                                helperText={formik.errors[field.name]}
                                variant="outlined"
                            />
                        </div>
                    ))
                }
                <div className={classes.submitContainer}>
                    <Button className={classes.submit} type="submit">
                        <span>التالي</span>
                    </Button>
                </div>
            </form>

        </div>
        
    )
}
