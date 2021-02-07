import React,{useState} from 'react'
import { TextField,Button, Select, MenuItem, FormControl, InputLabel, CircularProgress } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';

export default function EditElement({item,fields,handleSubmit,validationSchema,title}) {
    const [isLoading,setIsLoading] = useState(false)

    const submit = (data)=>{
        setIsLoading(true)
        handleSubmit(data)
    }

    const formik = useFormik({
        initialValues:item,
        validateOnChange:false,
        onSubmit: submit,
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
                    fields.map((field,index)=>
                    (
                        field.type == "select" ?
                        (
                            <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">{field.label}</InputLabel>
                            <Select
                                value={formik.values[field.name]}
                                name={field.name}
                                onChange={formik.handleChange}
                                label={field.name}

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
                                    className={`input-align-right ${classes.formInput} ${field.className}`}
                                    name={field.name}
                                    type={field.type}
                                    {...field.props}
                                    onChange={formik.handleChange}
                                    value={field.type=="date"&&formik.values[field.name]?formik.values[field.name].split("T")[0]:formik.values[field.name]}
                                    id={`crud-add-element-${index}-${field.name}`}
                                    label={field.label}
                                    error={formik.errors[field.name]}
                                    helperText={formik.errors[field.name]}
                                    variant="outlined"
                                />
                            </div>
                        )
                    ))
                }
                <div className={classes.submitContainer}>
                    <Button className={classes.submit} type="submit" disabled={isLoading}>
                        <div>
                            {isLoading  && <CircularProgress style={{color:"#fff",width:19,height:19,marginLeft:5,marginRight:5}} />}
                        </div>
                        <span>حفظ</span>
                    </Button>
                </div>
            </form>

        </div>
        
    )
}
