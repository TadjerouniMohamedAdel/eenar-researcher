import React, { useState } from 'react'
import { TextField, Button, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';
import { CircularProgress, Stepper, Step, StepLabel } from '@material-ui/core';
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Hidden } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';


export default function MultiStepsAddElement({ steps, handleSubmit, title }) {
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(0)
    const [dataToSend, setDataToSend] = useState({})

    const submit = (data) => {
        if (step !== steps.length - 1) {
            setDataToSend({ ...dataToSend, ...data })
            setStep(step + 1)
        }
        else {
            setIsLoading(true)
            handleSubmit({ ...dataToSend, ...data })
        }
    }
    let formiks = []
    steps.map((formStep, index) => {
        let values = {}
        formStep.fields.map((el, index) => { values[el.name] = el.defaultValue })
        formiks.push(
            useFormik({
                initialValues: values,
                validateOnChange: false,
                onSubmit: submit,
                validationSchema: formStep.validationSchema,
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
                        steps.map((el, index) => (
                            <>
                                <div className={`${classes.step} ${step >= index && classes.done}`}><span>{index + 1}</span></div>
                                {steps[index + 1] && <div className={classes.stepConjection}></div>}
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
                    steps[step].fields.map((field, index) => {
                        switch (field.type) {
                            case "array":
                                let values = formiks[step].values[field.name]
                                return (
                                    <Autocomplete
                                        style={{ marginTop: 28, borderRadius: 12 }}
                                        multiple
                                        autoSelect
                                        key={`crud-add-element-${index}-${step}`}
                                        onChange={(e, values) => {
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
                                    <FormControl key={`crud-add-element-${index}-${step}`} variant="outlined" className={`${classes.formInput} ${field.className}`}>
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
                                                field.choices.map((choice, index) => (
                                                    <MenuItem key={`${field.name}-choice-${index}`} value={choice.value}>{choice.label}</MenuItem>
                                                ))
                                            }

                                        </Select>
                                    </FormControl>
                                )
                                break;
                            case 'file':
                                return (
                                    <div key={`crud-add-element-${index}-${step}`}>
                                        <input
                                            style={{ display: "none" }}
                                            className={`input-align-right ${classes.formInput} ${field.className}`}
                                            name={field.name}
                                            type={field.type}
                                            hidden={true}
                                            {...field.props}
                                            onChange={(event) => { formiks[step].setFieldValue("file", event.currentTarget.files[0]); }}
                                            id={`crud-add-element-${index}-${field.name}`}
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
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            onClick={() => { document.getElementById(`crud-add-element-${index}-${field.name}`).click() }}
                                            value={formiks[step].values[field.name]?.name}
                                            label={field.label}
                                            error={formiks[step].errors[field.name]}
                                            helperText={formiks[step].errors[field.name]}
                                            variant="outlined"
                                        />
                                    </div>
                                )
                                break;
                            case "checkbox":
                                return (
                                    <div className={`${classes.formCheckbox} ${field.className}`}>
                                        <Checkbox
                                            value={formiks[step].values[field.name]}
                                            name={field.name}
                                            onChange={formiks[step].handleChange}
                                            checkedIcon={<FontAwesomeIcon style={{ fontSize: 24, color: "#118ab2" }} icon={faWindowClose} />}
                                        />
                                        <span>{field.label}</span>
                                    </div>
                                )
                                break;
                            default:
                                return (
                                    <div key={`crud-add-element-${index}-${step}`}>
                                        <TextField
                                            className={`input-align-right ${classes.formInput} ${field.className}`}
                                            name={field.name}
                                            type={field.type}
                                            {...field.props}
                                            onChange={formiks[step].handleChange}
                                            value={formiks[step].values[field.name]}
                                            id={`crud-add-element-${index}-${field.name}`}
                                            defaultValue={field.defaultValue}
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
                    {step != 0 && (
                        <Button className={classes.back} type="button" onClick={() => setStep(step - 1)}>
                            <span className="submitLabel">السابق</span>
                        </Button>
                    )}
                    <Button className={step == steps.length - 1 ? classes.submit : classes.next} type="submit" disabled={isLoading}>
                        <div>
                            {isLoading && <CircularProgress style={{ color: "#fff", width: 19, height: 19, marginLeft: 5, marginRight: 5 }} />}
                        </div>
                        <span className="submitLabel">{step == steps.length - 1 ? "حفظ" : "التالي"}</span>
                    </Button>
                </div>
            </form>

        </div>

    )
}

MultiStepsAddElement.propTypes={
    title:PropTypes.string.isRequired,
    handleSubmit:PropTypes.func.isRequired,
    steps:PropTypes.array.isRequired
}
