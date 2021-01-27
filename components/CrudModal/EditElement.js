import React from 'react'
import { TextField,Button } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';




export default function EditElement({item,fields,handleSubmit,validationSchema,title}) {
    const formik = useFormik({
        initialValues:item,
        onSubmit: handleSubmit,
        validationSchema,
      });    
    
    
    return (
        <div className={classes.crudElement}>
            <h1>
            تعديل   
                {` ${title}`}
            </h1>
            <div className={classes.divider}></div>
            <div className={classes.formDescription}>
                {`يرجى ملئ المعلومات لتعديل ${title} `}
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
