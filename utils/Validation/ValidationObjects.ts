import * as Yup from 'yup';
import { NotDefineYet } from '../types/types';

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
    gender: Yup.string().oneOf(["male","female"]).required('يجب ملئ هذه المعلومة'),
})
export const researcherRegistrationValidation2 = Yup.object().shape({
    region: Yup.string().required('يجب ملئ هذه المعلومة'),
    city:Yup.string().required('يجب ملئ هذه المعلومة'),
    address: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const researcherRegistrationValidation3 = Yup.object().shape({
    job: Yup.string().required('يجب ملئ هذه المعلومة'),
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,'كلمة السر يجب أن تحتوي على الأقل 8 حروف منها رقم  	').required('يجب ملئ هذه المعلومة'),
    retypedPassword: Yup.string().oneOf([Yup.ref('password'), null], 'الكلمات السرية يجب ان تتطابق').required('يجب ملئ هذه المعلومة'),
    isAgree:Yup.bool().oneOf([true], 'يجب الموافقة على الشروط'),
})


export const aboutmeSchema = Yup.object().shape({
    aboutMe: Yup.string().required('يجب ملئ هذه المعلومة')
})

export const profileInfoSchema = Yup.object().shape({
	lastname: Yup.string().required('يجب ملئ هذه المعلومة'),
    firstname: Yup.string().required('يجب ملئ هذه المعلومة'),
    birthday: Yup.string().required('يجب ملئ هذه المعلومة'),
	country: Yup.string().required('يجب ملئ هذه المعلومة'),
	region: Yup.string().required('يجب ملئ هذه المعلومة'),
	city:Yup.string().required('يجب ملئ هذه المعلومة'),
	address: Yup.string().required('يجب ملئ هذه المعلومة'),
	gender: Yup.string().oneOf(["male","female"]).required('يجب ملئ هذه المعلومة'),
	center: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const profileCredentialsSchema = Yup.object().shape({
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,'كلمة السر يجب أن تحتوي على الأقل 8 حروف منها رقم  	'),
    newPassword: Yup.string().matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,'كلمة السر يجب أن تحتوي على الأقل 8 حروف منها رقم  	'),
    newRetypedPassword:Yup.string().oneOf([Yup.ref('newPassword'), null], 'الكلمات السرية يجب ان تتطابق').required('يجب ملئ هذه المعلومة'),
    idn:Yup.string(),
    defaultLanguage:Yup.string().oneOf(["ar","fr","en"]).required('يجب ملئ هذه المعلومة')
})


export const educationSchema = Yup.object().shape({
    university: Yup.string().required('يجب ملئ هذه المعلومة'),
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().nullable().when("startDate",(startDate:NotDefineYet, educationSchema:NotDefineYet) => startDate && educationSchema.min(startDate))
})

export const experienceSchema = Yup.object().shape({
    company: Yup.string().required('يجب ملئ هذه المعلومة'),
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().nullable().when("startDate",(startDate:NotDefineYet, experienceSchema:NotDefineYet) => startDate && experienceSchema.min(startDate))
})

export const certificationSchema = Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    provider: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().when("startDate",(startDate:NotDefineYet, certificationSchema:NotDefineYet) => startDate && certificationSchema.min(startDate)).required('يجب ملئ هذه المعلومة')
})

export const VolunteeringSchema = Yup.object().shape({
    organization: Yup.string().required('يجب ملئ هذه المعلومة'),
    role: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().nullable().when("startDate",(startDate:NotDefineYet, VolunteeringSchema:NotDefineYet) => startDate && VolunteeringSchema.min(startDate))
})

export const languageSchema =  Yup.object().shape({
    name: Yup.string().required('يجب ملئ هذه المعلومة'),
    level: Yup.string().oneOf(["beginner","intermediate","advanced","native"]).required('يجب ملئ هذه المعلومة'),
})

export const activitySchema = Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
	center: Yup.string().required('يجب ملئ هذه المعلومة'),
    role: Yup.string().required('يجب ملئ هذه المعلومة'),
    location: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().nullable().when("startDate",(startDate:NotDefineYet, activitySchema:NotDefineYet) => startDate && activitySchema.min(startDate))
})

export const patentSchema = Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
	center: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().when("startDate",(startDate:NotDefineYet, patentSchema:NotDefineYet) => startDate && patentSchema.min(startDate)).required('يجب ملئ هذه المعلومة'),
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
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().nullable().when("startDate",(startDate:NotDefineYet, projectSchema:NotDefineYet) => startDate && projectSchema.min(startDate)),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const postSchemaStep1 = Yup.object().shape({
    primaryAuthor: Yup.string().required('يجب ملئ هذه المعلومة'),
    // secondaryAuthors: Yup.string().required('يجب ملئ هذه المعلومة'),
    arabicTitle: Yup.string().required('يجب ملئ هذه المعلومة'),
    englishTitle: Yup.string().required('يجب ملئ هذه المعلومة'),
    publishedBy: Yup.string().required('يجب ملئ هذه المعلومة'),
    link: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const postSchemaStep2 = Yup.object().shape({
    arabicDescription: Yup.string().required('يجب ملئ هذه المعلومة'),
    englishDescription: Yup.string().required('يجب ملئ هذه المعلومة'),
    publishedDate: Yup.string().required('يجب ملئ هذه المعلومة'),
    file: Yup.mixed().required('يجب ملئ هذه المعلومة'),
    // keywords: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const projectSchemaStep1 = Yup.object().shape({
    primaryAuthor: Yup.string().required('يجب ملئ هذه المعلومة'),
    // secondaryAuthors: Yup.string().required('يجب ملئ هذه المعلومة'),
    arabicTitle: Yup.string().required('يجب ملئ هذه المعلومة'),
    englishTitle: Yup.string().required('يجب ملئ هذه المعلومة'),
    // supervisor: Yup.string().required('يجب ملئ هذه المعلومة'),
    center: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const projectSchemaStep2 = Yup.object().shape({
    arabicDescription: Yup.string().required('يجب ملئ هذه المعلومة'),
    englishDescription: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date(),
    endDate: Yup.date().when("startDate",(startDate:NotDefineYet, projectSchemaStep2:NotDefineYet) => startDate && projectSchemaStep2.min(startDate))
})

export const projectSchemaStep3 = Yup.object().shape({
    justifications: Yup.string().required('يجب ملئ هذه المعلومة'),
    goals: Yup.string().required('يجب ملئ هذه المعلومة'),
    previousStudies: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const projectSchemaStep4 = Yup.object().shape({
    methodology: Yup.string().required('يجب ملئ هذه المعلومة'),
    materials: Yup.string().required('يجب ملئ هذه المعلومة'),
    steps: Yup.string().required('يجب ملئ هذه المعلومة'),
})


/**  researche center form validation **/
export const centerRegistrationStep1 = Yup.object().shape({
    region: Yup.string().required('يجب ملئ هذه المعلومة'),
    city: Yup.string().required('يجب ملئ هذه المعلومة'),
    address: Yup.string().required('يجب ملئ هذه المعلومة'),
    center: Yup.string().required('يجب ملئ هذه المعلومة'),
    class: Yup.string().required('يجب ملئ هذه المعلومة'),
    job: Yup.string().required('يجب ملئ هذه المعلومة'),
})

export const centerRegistrationStep2 = Yup.object().shape({
    firstname: Yup.string().required('يجب ملئ هذه المعلومة'),
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    gender: Yup.string().oneOf(["male","female"]).required('يجب ملئ هذه المعلومة'),
    lastname: Yup.string().required('يجب ملئ هذه المعلومة'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,'كلمة السر يجب أن تحتوي على الأقل 8 حروف منها رقم   	').required('يجب ملئ هذه المعلومة'),
    retypedPassword: Yup.string().oneOf([Yup.ref('password'), null], 'الكلمات السرية يجب ان تتطابق').required('يجب ملئ هذه المعلومة'),
})
export const groupSchema =  Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    slogan: Yup.string().required('يجب ملئ هذه المعلومة'),
    privacy: Yup.string().oneOf(["public","private"]).required('يجب ملئ هذه المعلومة'),
    website: Yup.string(),
    description: Yup.string(),
})
export const serviceRequestSchema =  Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    primarySpeciality: Yup.string().required('يجب ملئ هذه المعلومة'),
    secondarySpeciality: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
})
