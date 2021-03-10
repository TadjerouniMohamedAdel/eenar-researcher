import React,{useState} from 'react'
import { TextField,Button, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';
import { CircularProgress , Stepper , Step , StepLabel  } from '@material-ui/core';
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";


export default function MultiStepsEditElement({item,steps,handleSubmit,title}) {
    const [isLoading,setIsLoading] = useState(false)
    const [step,setStep] = useState(0)
    const [dataToSend,setDataToSend] = useState({})
    const submit = (data)=>{
        if(step !== steps.length -1){
            setDataToSend({...dataToSend,...data})
            setStep(step+1)
        }
        else{
            setIsLoading(true)
            handleSubmit({...dataToSend,...data})
        }
    }
    let formiks =[]
    steps.map((formStep,index)=>{
                let values = {id:item.id}
                formStep.fields.map((el,index)=>{values[el.name]=item[el.name]})            
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
                تعديل   
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
            {`يرجى ملئ المعلومات لتعديل ${title} `}
            </div>
            <form className={classes.form} onSubmit={formiks[step].handleSubmit}>
                {
                    steps[step].fields.map((field,index)=>{
                        switch (field.type) {
                            case "array":
                                let values = formiks[step].values[field.name]
                                return (
                                        <Autocomplete
                                            multiple
                                            autoSelect
                                            key={`crud-edit-element-${index}-${step}`}
                                            onChange={(e,values)=>{
                                                formiks[step].values[field.name] = values
                                            }}
                                            freeSolo
                                            name={field.name}
                                            defaultValue={values?values:[]}
                                            id={`crud-edit-element-${index}-${step}`}
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
                                                <TextField  className={`${classes.formInput} ${field.className}`} {...params} label={field.label} variant="outlined" />
                                            )}
                                        />
                                );
                                break;
                            case "select":
                                return(
                                    <FormControl  key={`crud-edit-element-${index}-${step}`}  variant="outlined"  className={`${classes.formInput} ${field.className}`}>
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
                                case 'file':
                                    return (
                                        <div  key={`crud-edit-element-${index}-${step}`}>
                                            <input
                                                style={{display:"none"}}
                                                className={`input-align-right ${classes.formInput} ${field.className}`}
                                                name={field.name}
                                                type={field.type}
                                                {...field.props}
                                                onChange={(event) => {formiks[step].setFieldValue("file", event.currentTarget.files[0]);}}          
                                                id={`crud-edit-element-${index}-${field.name}`}
                                                label={field.label}
                                                error={formiks[step].errors[field.name]}
                                                helperText={formiks[step].errors[field.name]}
                                                variant="outlined"
                                            />
                                             <TextField
                                                className={`input-align-right ${classes.formInput} ${field.className}`}
                                                name={field.name}
                                                type="text"
                                                {...field.props}
                                                placeholder={"الملف لا يتعدى 25 ميغابايت / الصيغ المقبولة: pdf, docs"}
                                                onClick={()=>{document.getElementById(`crud-edit-element-${index}-${field.name}`).click()}}
                                                value={formiks[step].values[field.name]?.name ?? formiks[step].values[field.name]}
                                                label={field.label}
                                                error={formiks[step].errors[field.name]}
                                                helperText={formiks[step].errors[field.name]}
                                                variant="outlined"
                                            />
                                        </div>
                                    )
                                break;
                        
                            default:
                                return(
                                    <div 
                                        key={`crud-edit-element-${index}-${step}`}
                                    >
                                        <TextField
                                            className={`input-align-right ${classes.formInput} ${field.className}`}
                                            name={field.name}
                                            type={field.type}
                                            {...field.props}
                                            onChange={formiks[step].handleChange}
                                            value={field.type=="date"&&formiks[step].values[field.name]?formiks[step].values[field.name].split("T")[0]:formiks[step].values[field.name]}
                                            id={`crud-edit-element-${index}-${field.name}`}
                                            label={field.label}
                                            error={formiks[step].errors[field.name]}
                                            helperText={formiks[step].errors[field.name]}
                                            variant="outlined"
                                        />
                                    </div>
                                )
                                break;
                        }
                    }
                    
                    )
                }
                <div className={classes.submitContainer}>
                    {step !=0 && (
                    <Button className={classes.back} type="button" onClick={()=>setStep(step-1)}>
                        <span className="submitLabel">السابق</span>
                    </Button>
                    )}
                    <Button className={step == steps.length -1 ? classes.submit : classes.next} type="submit" disabled={isLoading} >
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
