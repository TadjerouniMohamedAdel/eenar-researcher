import React, { useState } from 'react'
import { TextField, Button, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core'
import classes from './CrudModal.module.css'
import { useFormik } from 'formik';
import { CircularProgress } from '@material-ui/core';
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import { AddElementProps, NotDefineYet } from '../../utils/types/types';


const AddElement:React.FC<AddElementProps> = ({ fields, handleSubmit, validationSchema, title })=> {
    const [isLoading, setIsLoading] = useState(false)
    let values:NotDefineYet = {}
    fields.map((el, index) => { values[el.name] = el.defaultValue })

    const submit = (data:NotDefineYet) => {
        setIsLoading(true)
        handleSubmit(data)
    }

    const formik = useFormik({
        initialValues: values,
        validateOnChange: false,
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
                    fields.map((field, index) => {
                        switch (field.type) {
                            case "array":
                                let values = formik.values[field.name]
                                return (
                                    <Autocomplete
                                        style={{ marginTop: 28, borderRadius: 12 }}
                                        multiple
                                        autoSelect
                                        key={`crud-add-element-${index}`}
                                        onChange={(e, values) => {
                                            formik.values[field.name] = values
                                        }}
                                        freeSolo
                                        defaultValue={values}
                                        id={`crud-add-element-${index}`}
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
                                    <FormControl variant="outlined" className={`${classes.formInput} ${field.className}`}>
                                        <InputLabel id="demo-simple-select-outlined-label">{field.label}</InputLabel>
                                        <Select
                                            value={formik.values[field.name]}
                                            name={field.name}
                                            onChange={formik.handleChange}
                                            label={field.name}
                                            error={Boolean(formik.errors[field.name])}

                                        >
                                            {
                                                field.choices?.map((choice, index) => (
                                                    <MenuItem key={`${field.name}-choice-${index}`} value={choice.value}>{choice.label}</MenuItem>
                                                ))
                                            }

                                        </Select>
                                    </FormControl>
                                )
                                break;
                            case "checkbox":
                                return (
                                    <div className={`${classes.formCheckbox} ${field.className}`}>
                                        <Checkbox
                                            value={formik.values[field.name]}
                                            name={field.name}
                                            onChange={formik.handleChange}
                                            checkedIcon={<FontAwesomeIcon style={{ fontSize: 24, color: "#118ab2" }} icon={faWindowClose} />}
                                        />
                                        <span>{field.label}</span>
                                    </div>
                                )
                                break;

                            default:
                                return (
                                    <div
                                        key={`crud-add-element-${index}`}
                                    >
                                        <TextField
                                            className={`input-align-right ${classes.formInput} ${field.className}`}
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
                                )
                                break;
                        }
                    }
                    )
                }
                <div className={classes.submitContainer}>
                    <Button className={classes.submit} type="submit" disabled={isLoading} >
                        <div>
                            {isLoading && <CircularProgress style={{ color: "#fff", width: 19, height: 19, marginLeft: 5, marginRight: 5 }} />}
                        </div>
                        <span className="submitLabel">حفظ</span>
                    </Button>
                </div>
            </form>

        </div>

    )
}
export default AddElement