import React,{useState} from 'react'
import { TextField,Button, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';
import { CircularProgress } from '@material-ui/core';


export default function AddElement({fields,handleSubmit,validationSchema,title}) {
    const [isLoading,setIsLoading] = useState(false)
    let values = {}
    fields.map((el,index)=>{values[el.name]=el.defaultValue})
    console.log(values)
    
    const submit = (data)=>{
        setIsLoading(true)
        handleSubmit(data)
    }
    
    const formik = useFormik({
        initialValues:values,
        onSubmit: submit,
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
                    fields.map((field,index)=>
                    field.type == "select" ?
                    (
                         <FormControl  variant="outlined"  className={`${classes.formInput} ${field.className}`}>
                            <InputLabel id="demo-simple-select-outlined-label">{field.label}</InputLabel>
                            <Select
                                value={formik.values[field.name]}
                                name={field.name}
                                onChange={formik.handleChange}
                                label={field.name}
                                error={formik.errors[field.name]}
                                helperText={formik.errors[field.name]}

                            >
                                {
                                    field.choices.map((choice,index)=>(
                                        <MenuItem key={`${field.name}-choice-${index}`} value={choice.value}>{choice.label}</MenuItem>
                                    ))
                                }
                                
                            </Select>
                        </FormControl>
                    )
                    
                    :(
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
                    <Button className={classes.submit} type="submit" disabled={isLoading} >
                        <div>
                            {isLoading  && <CircularProgress style={{color:"#fff",width:19,height:19,marginLeft:5,marginRight:5}} />}
                        </div>
                        <span className="submitLabel">حفظ</span>
                    </Button>
                </div>
            </form>

        </div>
        
    )
}
