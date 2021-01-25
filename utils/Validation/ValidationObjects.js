import * as Yup from 'yup';

export const educationSchema = Yup.object({
    university: Yup.string().required('Required'),
    title: Yup.string().required('Required'),
    startDate: Yup.string().required('Required'),
    endDate: Yup.string().required('Required'),
})

export const experienceSchema = Yup.object({
    company: Yup.string().required('Required'),
    title: Yup.string().required('Required'),
    startDate: Yup.string().required('Required'),
    endDate: Yup.string().required('Required'),
})

export const certificationSchema = Yup.object({
    name: Yup.string().required('Required'),
    provider: Yup.string().required('Required'),
    startDate: Yup.string().required('Required'),
    endDate: Yup.string().required('Required'),
})

export const VolunteeringSchema = Yup.object({
    organization: Yup.string().required('Required'),
    role: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    startDate: Yup.string().required('Required'),
    endDate: Yup.string().required('Required'),
})

export const languageSchema =  Yup.object({
    name: Yup.string().required('Required'),
    level: Yup.string().required('Required'),
})

export const activitySchema = Yup.object({
    name: Yup.string().required('Required'),
    role: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
    startDate: Yup.string().required('Required'),
    endDate: Yup.string().required('Required'),
})

export const patentSchema = Yup.object({
    name: Yup.string().required('Required'),
    startDate: Yup.string().required('Required'),
    endDate: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
    code:   Yup.string().required('Required'),
    description: Yup.string().required('Required'),
})

export const honorSchema = Yup.object({
    name: Yup.string().required('Required'),
    date: Yup.string().required('Required'),
    center: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
})
