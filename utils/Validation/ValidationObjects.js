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
    password: Yup.string().required('يجب ملئ هذه المعلومة'),
    retypedPassword: Yup.string().oneOf([Yup.ref('password'), null], 'الكلمات السرية يجب ان تتطابق').required('يجب ملئ هذه المعلومة'),
    isAgree:Yup.bool().oneOf([true], 'يجب الموافقة على الشروط'),
})


export const aboutmeSchema = Yup.object().shape({
    aboutMe: Yup.string().required('يجب ملئ هذه المعلومة')
})

export const profileSchema1 = Yup.object().shape({
    lastname: Yup.string().required('يجب ملئ هذه المعلومة'),
    firstname: Yup.string().required('يجب ملئ هذه المعلومة'),
    birthday: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const profileSchema2 = Yup.object().shape({
    phone: Yup.string(),
    country: Yup.string(),
    address: Yup.string().required('يجب ملئ هذه المعلومة'),
})
export const profileSchema3 = Yup.object().shape({
    linkedinLink: Yup.string(),
    facebookLink: Yup.string(),
    twitterLink: Yup.string(),
    skypeLink: Yup.string(),
})

export const educationSchema = Yup.object().shape({
    university: Yup.string().required('يجب ملئ هذه المعلومة'),
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().when("startDate",(startDate, educationSchema) => startDate && educationSchema.min(startDate)).required('يجب ملئ هذه المعلومة'),
})

export const experienceSchema = Yup.object().shape({
    company: Yup.string().required('يجب ملئ هذه المعلومة'),
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().when("startDate",(startDate, experienceSchema) => startDate && experienceSchema.min(startDate)).required('يجب ملئ هذه المعلومة')
})

export const certificationSchema = Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    provider: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().when("startDate",(startDate, certificationSchema) => startDate && certificationSchema.min(startDate)).required('يجب ملئ هذه المعلومة')
})

export const VolunteeringSchema = Yup.object().shape({
    organization: Yup.string().required('يجب ملئ هذه المعلومة'),
    role: Yup.string().required('يجب ملئ هذه المعلومة'),
    description: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().when("startDate",(startDate, VolunteeringSchema) => startDate && VolunteeringSchema.min(startDate)).required('يجب ملئ هذه المعلومة')
})

export const languageSchema =  Yup.object().shape({
    name: Yup.string().required('يجب ملئ هذه المعلومة'),
    level: Yup.string().oneOf(["beginner","intermediate","advanced","native"]).required('يجب ملئ هذه المعلومة'),
})

export const activitySchema = Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    role: Yup.string().required('يجب ملئ هذه المعلومة'),
    location: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().when("startDate",(startDate, activitySchema) => startDate && activitySchema.min(startDate)).required('يجب ملئ هذه المعلومة')
})

export const patentSchema = Yup.object().shape({
    title: Yup.string().required('يجب ملئ هذه المعلومة'),
    startDate: Yup.date().required('يجب ملئ هذه المعلومة'),
    endDate: Yup.date().when("startDate",(startDate, patentSchema) => startDate && patentSchema.min(startDate)).required('يجب ملئ هذه المعلومة'),
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
    endDate: Yup.date().when("startDate",(startDate, projectSchema) => startDate && projectSchema.min(startDate)).required('يجب ملئ هذه المعلومة'),
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
    // file: Yup.string().required('يجب ملئ هذه المعلومة'),
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
    endDate: Yup.date().when("startDate",(startDate, projectSchemaStep2) => startDate && projectSchemaStep2.min(startDate))
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
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    firstname: Yup.string().required('يجب ملئ هذه المعلومة'),
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    lastname: Yup.string().required('يجب ملئ هذه المعلومة'),
    password: Yup.string().required('يجب ملئ هذه المعلومة'),
    retypedPassword: Yup.string().oneOf([Yup.ref('password'), null], 'الكلمات السرية يجب ان تتطابق').required('يجب ملئ هذه المعلومة'),
})

