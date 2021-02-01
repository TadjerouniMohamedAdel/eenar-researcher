import * as Yup from 'yup';



/* General form validation */
export const loginSchema = Yup.object().shape({
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    password: Yup.string().required('يجب ملئ هذه المعلومة'),
})



/**  researcher form validation **/

export const researcherRegistrationValidation1 = Yup.object().shape({
    firstname: Yup.string().required('يجب ملئ هذه المعلومة'),
    lastname: Yup.string().required('يجب ملئ هذه المعلومة'),
    center: Yup.string().required('يجب ملئ هذه المعلومة'),
    gender: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const researcherRegistrationValidation2 = Yup.object().shape({
    region: Yup.string().required('يجب ملئ هذه المعلومة'),
    city:Yup.string().required('يجب ملئ هذه المعلومة'),
    address: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const researcherRegistrationValidation3 = Yup.object().shape({
    job: Yup.string().required('يجب ملئ هذه المعلومة'),
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    password: Yup.string().required('يجب ملئ هذه المعلومة'),
    retypedPassword: Yup.string().oneOf([Yup.ref('password'), null], 'الكلمات السرية يجب ان تتطابق').required('يجب ملئ هذه المعلومة'),
    isAgree:Yup.bool().oneOf([true], 'يجب الموافقة على الشروط'),
})


export const aboutmeSchema = Yup.object().shape({
    date: Yup.string().required('يجب ملئ هذه المعلومة'),
    city: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
    job: Yup.string().required('يجب ملئ هذه المعلومة'),
    city: Yup.string().required('يجب ملئ هذه المعلومة'),
    website: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const profileSchema = Yup.object().shape({
    lastname: Yup.string().required('يجب ملئ هذه المعلومة'),
    firstname: Yup.string().required('يجب ملئ هذه المعلومة'),
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
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
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
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    role: Yup.string().required('يجب ملئ هذه المعلومة'),
    location: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const patentSchema = Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    status: Yup.string().required('يجب ملئ هذه المعلومة'),
    code:   Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const honorSchema = Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    date: Yup.string().required('يجب ملئ هذه المعلومة'),
    center: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const projectSchema = Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
})


/**  researche center form validation **/
export const centerRegistrationStep1 = Yup.object().shape({
    region: Yup.string().required('يجب ملئ هذه المعلومة'),
    city: Yup.string().required('يجب ملئ هذه المعلومة'),
    address: Yup.string().required('يجب ملئ هذه المعلومة'),
    centerName: Yup.string().required('يجب ملئ هذه المعلومة'),
    class: Yup.string().required('يجب ملئ هذه المعلومة'),
    job: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const centerRegistrationStep2 = Yup.object().shape({
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    firstname: Yup.string().required('يجب ملئ هذه المعلومة'),
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    lastname: Yup.string().required('يجب ملئ هذه المعلومة'),
    password: Yup.string().required('يجب ملئ هذه المعلومة'),
    retypedPassword: Yup.string().oneOf([Yup.ref('password'), null], 'الكلمات السرية يجب ان تتطابق').required('يجب ملئ هذه المعلومة'),
})
