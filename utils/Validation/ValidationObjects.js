import * as Yup from 'yup';

export const educationSchema = Yup.object().shape({
    university: Yup.string().required('يجب ملئ هذه المعلومة'),
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const experienceSchema = Yup.object().shape({
    company: Yup.string().required('يجب ملئ هذه المعلومة'),
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const certificationSchema = Yup.object().shape({
    name: Yup.string().required('يجب ملئ هذه المعلومة'),
    provider: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const VolunteeringSchema = Yup.object().shape({
    organization: Yup.string().required('يجب ملئ هذه المعلومة'),
    role: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const languageSchema =  Yup.object().shape({
    name: Yup.string().required('يجب ملئ هذه المعلومة'),
    level: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const activitySchema = Yup.object().shape({
    name: Yup.string().required('يجب ملئ هذه المعلومة'),
    role: Yup.string().required('يجب ملئ هذه المعلومة'),
    location: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const patentSchema = Yup.object().shape({
    name: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    status: Yup.string().required('يجب ملئ هذه المعلومة'),
    code:   Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const honorSchema = Yup.object().shape({
    name: Yup.string().required('يجب ملئ هذه المعلومة'),
    date: Yup.string().required('يجب ملئ هذه المعلومة'),
    center: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const projectSchema = Yup.object().shape({
    name: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
})