import React from 'react'
import { TextField,Button } from '@material-ui/core'
import classes from './CrudModal.module.css'

const fields =[
    {
        label:"عنوان الطلب",
        type:"text",
    },
    {
        label:"الخدمة",
        type:"text",
    },
    {
        label:"التخصص الأساسي",
        type:"text",

    }
]
const handleSubmit = (e)=>{
    e.preventDefault()
}
const title="طلب خدمة"

const values = [

]
const formDescription ="لطلب أي خدمة مع انشاء حساب بخطوة واحدة فقط, أكمل النموذج التالي"
export default function AddElement({values,validationSchema}) {
    return (
        <div className={classes.crudElement}>
            <h1>{title}</h1>
            <div className={classes.divider}></div>
            <div className={classes.formDescription}>
                {formDescription}
            </div>
            <form className={classes.form} onSubmit={handleSubmit}>
                {
                    fields.map((field,index)=>(
                        <div 
                            key={`crud-add-element-${index}`}
                        >
                            <TextField
                                className={classes.formInput}
                                name={field.label}
                                type={field.type}
                                id={`crud-add-element-${index}-${field.label}`}
                                label={field.label}
                                error={false}
                                helperText=""
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
