import React from 'react'
import { TextField,Button } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const handleSubmit = (data)=>{
    console.log(data)
}
const formDescription ="لطلب أي خدمة مع انشاء حساب بخطوة واحدة فقط, أكمل النموذج التالي"



export default function AddElement({fields,validationSchema,title}) {
    let values = {}
    fields.map((el,index)=>{values[el.name]=el.defaultValue})
    const formik = useFormik({
        initialValues:values,
        onSubmit: handleSubmit,
        validationSchema,
      });    
    
    
    return (
        <div className={classes.crudElement}>
            <h1>
            إضافة   
                {` ${title}`}
            </h1>
            <div className={classes.divider}></div>
            <div className={classes.formDescription}>
                {`يرجى ملئ المعلومات لإضافة ${title} `}
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
                        <span>حفظ</span>
                    </Button>
                </div>
            </form>

        </div>
        
    )
}
