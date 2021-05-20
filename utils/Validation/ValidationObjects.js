import * as Yup from 'yup';
const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];


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
    phone: Yup.string().matches( /^(00213|\+213|0)(5|6|7)[0-9]{8}$/,"الهاتف غير صحيح"),
    country: Yup.string().oneOf(countryList),
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
    firstname: Yup.string().required('يجب ملئ هذه المعلومة'),
    email: Yup.string().email("هذا البريد الإلكتروني غير صحيح").required('يجب ملئ هذه المعلومة'),
    gender: Yup.string().oneOf(["male","female"]).required('يجب ملئ هذه المعلومة'),
    lastname: Yup.string().required('يجب ملئ هذه المعلومة'),
    password: Yup.string().required('يجب ملئ هذه المعلومة'),
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
