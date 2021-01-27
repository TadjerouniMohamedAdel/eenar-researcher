import * as Yup from 'yup';


export const loginSchema = Yup.object().shape({
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    password: Yup.string().required('يجب ملئ هذه المعلومة'),
})


/**  researcher form validation **/

export const aboutmeSchema = Yup.object().shape({
    date: Yup.string().required('يجب ملئ هذه المعلومة'),
    city: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
    job: Yup.string().required('يجب ملئ هذه المعلومة'),
    city: Yup.string().required('يجب ملئ هذه المعلومة'),
    website: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const profileSchema = Yup.object().shape({
    lastName: Yup.string().required('يجب ملئ هذه المعلومة'),
    firstName: Yup.string().required('يجب ملئ هذه المعلومة'),
    job: Yup.string().required('يجب ملئ هذه المعلومة'),
    birthday: Yup.string().required('يجب ملئ هذه المعلومة'),
    nationality: Yup.string().required('يجب ملئ هذه المعلومة'),
})

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