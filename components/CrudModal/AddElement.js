import React from 'react'
import { TextField,Button } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';

export default function AddElement({fields,handleSubmit,validationSchema,title}) {
    let values = {}
    fields.map((el,index)=>{values[el.name]=el.defaultValue})
    console.log(values)
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
                                className={`${classes.formInput} ${field.className}`}
                                name={field.name}
                                type={field.type}
                                {...field.props}
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
