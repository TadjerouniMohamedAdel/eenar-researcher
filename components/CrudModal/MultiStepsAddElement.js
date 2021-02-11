import React,{ useState } from 'react'
import { TextField,Button, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';
import { CircularProgress , Stepper , Step , StepLabel  } from '@material-ui/core';
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";


export default function MultiStepsAddElement({steps,handleSubmit,title}) {
    const [isLoading,setIsLoading] = useState(false)
    const [step,setStep] = useState(0)
              
    const submit = (data)=>{
        if(step !== steps.length -1) setStep(step+1)
        else{
            console.log("executed submit",data)
            setIsLoading(true)
            handleSubmit(data)
        }
    }
    let formiks =[]
    steps.map((formStep,index)=>{
            let values = {}
            formStep.fields.map((el,index)=>{values[el.name]=el.defaultValue})
            formiks.push(
                useFormik({
                    initialValues:values,
                    validateOnChange:false,
                    onSubmit: submit,
                    validationSchema:formStep.validationSchema,
                  }) 
            )
    })    
    
    
    
    return (
        <div className={classes.crudElement}>
            <h1>
                <span>
                    إضافة   
                    {` ${title}`}
                </span>
                <div className={classes.stepper}>
                    {
                        steps.map((el,index)=>(
                            <>
                            <div className={`${classes.step} ${step >= index&& classes.done}`}><span>{index+1}</span></div>
                            {steps[index+1] && <div className={classes.stepConjection}></div>}
                            </>
                        ))
                    }
                </div>

            </h1>
            <div className={classes.divider}></div>
            <div className={classes.formDescription}>
                {`يرجى ملئ المعلومات لإضافة ${title} `}
            </div>
            <form className={classes.form} onSubmit={formiks[step].handleSubmit}>
                {
                    steps[step].fields.map((field,index)=>{
                        switch (field.type) {
                            case "array":
                                let values = formiks[step].values[field.name]
                                console.log(values)
                                return (
                                        <Autocomplete
                                            style={{marginTop:28,borderRadius:12}}
                                            multiple
                                            autoSelect
                                            key={`crud-add-element-${index}-${step}`}
                                            onChange={(e,values)=>{
                                                formiks[step].values[field.name] = values
                                            }}
                                            freeSolo
                                            name={field.name}
                                            defaultValue={values}
                                            id={`crud-add-element-${index}-${step}`}
                                            options={[]}
                                            renderTags={(value, getTagProps) =>
                                                value.map((option, index) => (
                                                <Chip
                                                    variant="outlined"
                                                    label={option}
                                                    {...getTagProps({ index })}
                                                />
                                                ))
                                            }
                                            renderInput={(params) => (
                                                <TextField  
                                                    className={`${field.className}`} 
                                                    {...params}
                                                    label={field.label} 
                                                    variant="outlined" 
                                                    />
                                            )}
                                        />
                                );
                                break;
                            case "select":
                                return (
                                    <FormControl  key={`crud-add-element-${index}-${step}`} variant="outlined"  className={`${classes.formInput} ${field.className}`}>
                                        <InputLabel id="demo-simple-select-outlined-label">{field.label}</InputLabel>
                                        <Select
                                            value={formiks[step].values[field.name]}
                                            name={field.name}
                                            onChange={formiks[step].handleChange}
                                            label={field.name}
                                            error={formiks[step].errors[field.name]}
                                            helperText={formiks[step].errors[field.name]}

                                        >
                                            {
                                                field.choices.map((choice,index)=>(
                                                    <MenuItem key={`${field.name}-choice-${index}`} value={choice.value}>{choice.label}</MenuItem>
                                                ))
                                            }
                                            
                                        </Select>
                                    </FormControl>
                                )
                                break;
                        
                            default:
                                return (
                                    <div  key={`crud-add-element-${index}-${step}`}>
                                        <TextField
                                            className={`input-align-right ${classes.formInput} ${field.className}`}
                                            name={field.name}
                                            type={field.type}
                                            {...field.props}
                                            onChange={formiks[step].handleChange}
                                            value={formiks[step].values[field.name]}
                                            id={`crud-add-element-${index}-${field.name}`}
                                            label={field.label}
                                            error={formiks[step].errors[field.name]}
                                            helperText={formiks[step].errors[field.name]}
                                            variant="outlined"
                                        />
                                    </div>
                                )
                                break;
                            }
                        })
                    }
                    
                <div className={classes.submitContainer}>
                    {step !=0 && (
                    <Button className={classes.back} type="button" onClick={()=>setStep(step-1)}>
                        <span className="submitLabel">السابق</span>
                    </Button>
                    )}
                    <Button className={step == steps.length -1 ? classes.submit : classes.next} type="submit" disabled={isLoading}>
                        <div>
                            {isLoading  && <CircularProgress style={{color:"#fff",width:19,height:19,marginLeft:5,marginRight:5}} />}
                        </div>
                        <span className="submitLabel">{step == steps.length -1 ? "حفظ" : "التالي"}</span>
                    </Button>
                </div>
            </form>

        </div>
        
    )
}
