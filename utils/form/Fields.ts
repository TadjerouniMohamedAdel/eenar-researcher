import ISO6391 from 'iso-639-1';



const getLanguages = () => {
	const languagesCodes = ISO6391.getAllCodes()
	console.log(languagesCodes)
	const languages = languagesCodes.map(lan => (
		{ value: lan, label: ISO6391.getNativeName(lan) }
	))
	return languages
}
const countryListAllIsoData = [
	{ "value": "Afghanistan", "label": "Afghanistan" },
	{ "value": "Albania", "label": "Albania" },
	{ "value": "Algeria", "label": "Algeria" },
	{ "value": "American Samoa", "label": "American Samoa" },
	{ "value": "Andorra", "label": "Andorra" },
	{ "value": "Angola", "label": "Angola" },
	{ "value": "Anguilla", "label": "Anguilla" },
	{ "value": "Antarctica", "label": "Antarctica" },
	{ "value": "Antigua and Barbuda", "label": "Antigua and Barbuda" },
	{ "value": "Argentina", "label": "Argentina" },
	{ "value": "Armenia", "label": "Armenia" },
	{ "value": "Aruba", "label": "Aruba" },
	{ "value": "Australia", "label": "Australia" },
	{ "value": "Austria", "label": "Austria" },
	{ "value": "Azerbaijan", "label": "Azerbaijan" },
	{ "value": "Bahamas (the)", "label": "Bahamas (the)" },
	{ "value": "Bahrain", "label": "Bahrain" },
	{ "value": "Bangladesh", "label": "Bangladesh" },
	{ "value": "Barbados", "label": "Barbados" },
	{ "value": "Belarus", "label": "Belarus" },
	{ "value": "Belgium", "label": "Belgium" },
	{ "value": "Belize", "label": "Belize" },
	{ "value": "Benin", "label": "Benin" },
	{ "value": "Bermuda", "label": "Bermuda" },
	{ "value": "Bhutan", "label": "Bhutan" },
	{ "value": "Bolivia (Plurinational State of)", "label": "Bolivia (Plurinational State of)" },
	{ "value": "Bonaire, Sint Eustatius and Saba", "label": "Bonaire, Sint Eustatius and Saba" },
	{ "value": "Bosnia and Herzegovina", "label": "Bosnia and Herzegovina" },
	{ "value": "Botswana", "label": "Botswana" },
	{ "value": "Bouvet Island", "label": "Bouvet Island" },
	{ "value": "Brazil", "label": "Brazil" },
	{ "value": "British Indian Ocean Territory (the)", "label": "British Indian Ocean Territory (the)" },
	{ "value": "Brunei Darussalam", "label": "Brunei Darussalam" },
	{ "value": "Bulgaria", "label": "Bulgaria" },
	{ "value": "Burkina Faso", "label": "Burkina Faso" },
	{ "value": "Burundi", "label": "Burundi" },
	{ "value": "Cabo Verde", "label": "Cabo Verde" },
	{ "value": "Cambodia", "label": "Cambodia" },
	{ "value": "Cameroon", "label": "Cameroon" },
	{ "value": "Canada", "label": "Canada" },
	{ "value": "Cayman Islands (the)", "label": "Cayman Islands (the)" },
	{ "value": "Central African Republic (the)", "label": "Central African Republic (the)" },
	{ "value": "Chad", "label": "Chad" },
	{ "value": "Chile", "label": "Chile" },
	{ "value": "China", "label": "China" },
	{ "value": "Christmas Island", "label": "Christmas Island" },
	{ "value": "Cocos (Keeling) Islands (the)", "label": "Cocos (Keeling) Islands (the)" },
	{ "value": "Colombia", "label": "Colombia" },
	{ "value": "Comoros (the)", "label": "Comoros (the)" },
	{ "value": "Congo (the Democratic Republic of the)", "label": "Congo (the Democratic Republic of the)" },
	{ "value": "Congo (the)", "label": "Congo (the)" },
	{ "value": "Cook Islands (the)", "label": "Cook Islands (the)" },
	{ "value": "Costa Rica", "label": "Costa Rica" },
	{ "value": "Croatia", "label": "Croatia" },
	{ "value": "Cuba", "label": "Cuba" },
	{ "value": "Curaçao", "label": "Curaçao" },
	{ "value": "Cyprus", "label": "Cyprus" },
	{ "value": "Czechia", "label": "Czechia" },
	{ "value": "Côte d'Ivoire", "label": "Côte d'Ivoire" },
	{ "value": "Denmark", "label": "Denmark" },
	{ "value": "Djibouti", "label": "Djibouti" },
	{ "value": "Dominica", "label": "Dominica" },
	{ "value": "Dominican Republic (the)", "label": "Dominican Republic (the)" },
	{ "value": "Ecuador", "label": "Ecuador" },
	{ "value": "Egypt", "label": "Egypt" },
	{ "value": "El Salvador", "label": "El Salvador" },
	{ "value": "Equatorial Guinea", "label": "Equatorial Guinea" },
	{ "value": "Eritrea", "label": "Eritrea" },
	{ "value": "Estonia", "label": "Estonia" },
	{ "value": "Eswatini", "label": "Eswatini" },
	{ "value": "Ethiopia", "label": "Ethiopia" },
	{ "value": "Falkland Islands (the) [Malvinas]", "label": "Falkland Islands (the) [Malvinas]" },
	{ "value": "Faroe Islands (the)", "label": "Faroe Islands (the)" },
	{ "value": "Fiji", "label": "Fiji" },
	{ "value": "Finland", "label": "Finland" },
	{ "value": "France", "label": "France" },
	{ "value": "French Guiana", "label": "French Guiana" },
	{ "value": "French Polynesia", "label": "French Polynesia" },
	{ "value": "French Southern Territories (the)", "label": "French Southern Territories (the)" },
	{ "value": "Gabon", "label": "Gabon" },
	{ "value": "Gambia (the)", "label": "Gambia (the)" },
	{ "value": "Georgia", "label": "Georgia" },
	{ "value": "Germany", "label": "Germany" },
	{ "value": "Ghana", "label": "Ghana" },
	{ "value": "Gibraltar", "label": "Gibraltar" },
	{ "value": "Greece", "label": "Greece" },
	{ "value": "Greenland", "label": "Greenland" },
	{ "value": "Grenada", "label": "Grenada" },
	{ "value": "Guadeloupe", "label": "Guadeloupe" },
	{ "value": "Guam", "label": "Guam" },
	{ "value": "Guatemala", "label": "Guatemala" },
	{ "value": "Guernsey", "label": "Guernsey" },
	{ "value": "Guinea", "label": "Guinea" },
	{ "value": "Guinea-Bissau", "label": "Guinea-Bissau" },
	{ "value": "Guyana", "label": "Guyana" },
	{ "value": "Haiti", "label": "Haiti" },
	{ "value": "Heard Island and McDonald Islands", "label": "Heard Island and McDonald Islands" },
	{ "value": "Holy See (the)", "label": "Holy See (the)" },
	{ "value": "Honduras", "label": "Honduras" },
	{ "value": "Hong Kong", "label": "Hong Kong" },
	{ "value": "Hungary", "label": "Hungary" },
	{ "value": "Iceland", "label": "Iceland" },
	{ "value": "India", "label": "India" },
	{ "value": "Indonesia", "label": "Indonesia" },
	{ "value": "Iran (Islamic Republic of)", "label": "Iran (Islamic Republic of)" },
	{ "value": "Iraq", "label": "Iraq" },
	{ "value": "Ireland", "label": "Ireland" },
	{ "value": "Isle of Man", "label": "Isle of Man" },
	{ "value": "Italy", "label": "Italy" },
	{ "value": "Jamaica", "label": "Jamaica" },
	{ "value": "Japan", "label": "Japan" },
	{ "value": "Jersey", "label": "Jersey" },
	{ "value": "Jordan", "label": "Jordan" },
	{ "value": "Kazakhstan", "label": "Kazakhstan" },
	{ "value": "Kenya", "label": "Kenya" },
	{ "value": "Kiribati", "label": "Kiribati" },
	{ "value": "Korea (the Democratic People's Republic of)", "label": "Korea (the Democratic People's Republic of)" },
	{ "value": "Korea (the Republic of)", "label": "Korea (the Republic of)" },
	{ "value": "Kuwait", "label": "Kuwait" },
	{ "value": "Kyrgyzstan", "label": "Kyrgyzstan" },
	{ "value": "Lao People's Democratic Republic (the)", "label": "Lao People's Democratic Republic (the)" },
	{ "value": "Latvia", "label": "Latvia" },
	{ "value": "Lebanon", "label": "Lebanon" },
	{ "value": "Lesotho", "label": "Lesotho" },
	{ "value": "Liberia", "label": "Liberia" },
	{ "value": "Libya", "label": "Libya" },
	{ "value": "Liechtenstein", "label": "Liechtenstein" },
	{ "value": "Lithuania", "label": "Lithuania" },
	{ "value": "Luxembourg", "label": "Luxembourg" },
	{ "value": "Macao", "label": "Macao" },
	{ "value": "Madagascar", "label": "Madagascar" },
	{ "value": "Malawi", "label": "Malawi" },
	{ "value": "Malaysia", "label": "Malaysia" },
	{ "value": "Maldives", "label": "Maldives" },
	{ "value": "Mali", "label": "Mali" },
	{ "value": "Malta", "label": "Malta" },
	{ "value": "Marshall Islands (the)", "label": "Marshall Islands (the)" },
	{ "value": "Martinique", "label": "Martinique" },
	{ "value": "Mauritania", "label": "Mauritania" },
	{ "value": "Mauritius", "label": "Mauritius" },
	{ "value": "Mayotte", "label": "Mayotte" },
	{ "value": "Mexico", "label": "Mexico" },
	{ "value": "Micronesia (Federated States of)", "label": "Micronesia (Federated States of)" },
	{ "value": "Moldova (the Republic of)", "label": "Moldova (the Republic of)" },
	{ "value": "Monaco", "label": "Monaco" },
	{ "value": "Mongolia", "label": "Mongolia" },
	{ "value": "Montenegro", "label": "Montenegro" },
	{ "value": "Montserrat", "label": "Montserrat" },
	{ "value": "Morocco", "label": "Morocco" },
	{ "value": "Mozambique", "label": "Mozambique" },
	{ "value": "Myanmar", "label": "Myanmar" },
	{ "value": "Namibia", "label": "Namibia" },
	{ "value": "Nauru", "label": "Nauru" },
	{ "value": "Nepal", "label": "Nepal" },
	{ "value": "Netherlands (the)", "label": "Netherlands (the)" },
	{ "value": "New Caledonia", "label": "New Caledonia" },
	{ "value": "New Zealand", "label": "New Zealand" },
	{ "value": "Nicaragua", "label": "Nicaragua" },
	{ "value": "Niger (the)", "label": "Niger (the)" },
	{ "value": "Nigeria", "label": "Nigeria" },
	{ "value": "Niue", "label": "Niue" },
	{ "value": "Norfolk Island", "label": "Norfolk Island" },
	{ "value": "Northern Mariana Islands (the)", "label": "Northern Mariana Islands (the)" },
	{ "value": "Norway", "label": "Norway" },
	{ "value": "Oman", "label": "Oman" },
	{ "value": "Pakistan", "label": "Pakistan" },
	{ "value": "Palau", "label": "Palau" },
	{ "value": "Palestine, State of", "label": "Palestine, State of" },
	{ "value": "Panama", "label": "Panama" },
	{ "value": "Papua New Guinea", "label": "Papua New Guinea" },
	{ "value": "Paraguay", "label": "Paraguay" },
	{ "value": "Peru", "label": "Peru" },
	{ "value": "Philippines (the)", "label": "Philippines (the)" },
	{ "value": "Pitcairn", "label": "Pitcairn" },
	{ "value": "Poland", "label": "Poland" },
	{ "value": "Portugal", "label": "Portugal" },
	{ "value": "Puerto Rico", "label": "Puerto Rico" },
	{ "value": "Qatar", "label": "Qatar" },
	{ "value": "Republic of North Macedonia", "label": "Republic of North Macedonia" },
	{ "value": "Romania", "label": "Romania" },
	{ "value": "Russian Federation (the)", "label": "Russian Federation (the)" },
	{ "value": "Rwanda", "label": "Rwanda" },
	{ "value": "Réunion", "label": "Réunion" },
	{ "value": "Saint Barthélemy", "label": "Saint Barthélemy" },
	{ "value": "Saint Helena, Ascension and Tristan da Cunha", "label": "Saint Helena, Ascension and Tristan da Cunha" },
	{ "value": "Saint Kitts and Nevis", "label": "Saint Kitts and Nevis" },
	{ "value": "Saint Lucia", "label": "Saint Lucia" },
	{ "value": "Saint Martin (French part)", "label": "Saint Martin (French part)" },
	{ "value": "Saint Pierre and Miquelon", "label": "Saint Pierre and Miquelon" },
	{ "value": "Saint Vincent and the Grenadines", "label": "Saint Vincent and the Grenadines" },
	{ "value": "Samoa", "label": "Samoa" },
	{ "value": "San Marino", "label": "San Marino" },
	{ "value": "Sao Tome and Principe", "label": "Sao Tome and Principe" },
	{ "value": "Saudi Arabia", "label": "Saudi Arabia" },
	{ "value": "Senegal", "label": "Senegal" },
	{ "value": "Serbia", "label": "Serbia" },
	{ "value": "Seychelles", "label": "Seychelles" },
	{ "value": "Sierra Leone", "label": "Sierra Leone" },
	{ "value": "Singapore", "label": "Singapore" },
	{ "value": "Sint Maarten (Dutch part)", "label": "Sint Maarten (Dutch part)" },
	{ "value": "Slovakia", "label": "Slovakia" },
	{ "value": "Slovenia", "label": "Slovenia" },
	{ "value": "Solomon Islands", "label": "Solomon Islands" },
	{ "value": "Somalia", "label": "Somalia" },
	{ "value": "South Africa", "label": "South Africa" },
	{ "value": "South Georgia and the South Sandwich Islands", "label": "South Georgia and the South Sandwich Islands" },
	{ "value": "South Sudan", "label": "South Sudan" },
	{ "value": "Spain", "label": "Spain" },
	{ "value": "Sri Lanka", "label": "Sri Lanka" },
	{ "value": "Sudan (the)", "label": "Sudan (the)" },
	{ "value": "Surilabel", "label": "Surilabel" },
	{ "value": "Svalbard and Jan Mayen", "label": "Svalbard and Jan Mayen" },
	{ "value": "Sweden", "label": "Sweden" },
	{ "value": "Switzerland", "label": "Switzerland" },
	{ "value": "Syrian Arab Republic", "label": "Syrian Arab Republic" },
	{ "value": "Taiwan", "label": "Taiwan" },
	{ "value": "Tajikistan", "label": "Tajikistan" },
	{ "value": "Tanzania, United Republic of", "label": "Tanzania, United Republic of" },
	{ "value": "Thailand", "label": "Thailand" },
	{ "value": "Timor-Leste", "label": "Timor-Leste" },
	{ "value": "Togo", "label": "Togo" },
	{ "value": "Tokelau", "label": "Tokelau" },
	{ "value": "Tonga", "label": "Tonga" },
	{ "value": "Trinidad and Tobago", "label": "Trinidad and Tobago" },
	{ "value": "Tunisia", "label": "Tunisia" },
	{ "value": "Turkey", "label": "Turkey" },
	{ "value": "Turkmenistan", "label": "Turkmenistan" },
	{ "value": "Turks and Caicos Islands (the)", "label": "Turks and Caicos Islands (the)" },
	{ "value": "Tuvalu", "label": "Tuvalu" },
	{ "value": "Uganda", "label": "Uganda" },
	{ "value": "Ukraine", "label": "Ukraine" },
	{ "value": "United Arab Emirates (the)", "label": "United Arab Emirates (the)" },
	{ "value": "United Kingdom of Great Britain and Northern Ireland (the)", "label": "United Kingdom of Great Britain and Northern Ireland (the)" },
	{ "value": "United States Minor Outlying Islands (the)", "label": "United States Minor Outlying Islands (the)" },
	{ "value": "United States of America (the)", "label": "United States of America (the)" },
	{ "value": "Uruguay", "label": "Uruguay" },
	{ "value": "Uzbekistan", "label": "Uzbekistan" },
	{ "value": "Vanuatu", "label": "Vanuatu" },
	{ "value": "Venezuela (Bolivarian Republic of)", "label": "Venezuela (Bolivarian Republic of)" },
	{ "value": "Viet Nam", "label": "Viet Nam" },
	{ "value": "Virgin Islands (British)", "label": "Virgin Islands (British)" },
	{ "value": "Virgin Islands (U.S.)", "label": "Virgin Islands (U.S.)" },
	{ "value": "Wallis and Futuna", "label": "Wallis and Futuna" },
	{ "value": "Western Sahara", "label": "Western Sahara" },
	{ "value": "Yemen", "label": "Yemen" },
	{ "value": "Zambia", "label": "Zambia" },
	{ "value": "Zimbabwe", "label": "Zimbabwe" },
	{ "value": "Åland Islands", "label": "Åland Islands" }
];
/** researcher form fields */
export const aboutmeFields = [
	{ name: "city", label: "المدينة", type: "text", defaultValue: "", className: "" },
	{ name: "center", label: "المؤسسة", type: "text", defaultValue: "", className: "" },
	{ name: "website", label: "الموقع", type: "text", defaultValue: "", className: "" },
	{ name: "aboutMe", label: "وصف", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
]

export const profileFields1 = [
	{ name: "lastname", label: "اللقب", type: "text", defaultValue: "", className: "" },
	{ name: "firstname", label: "الاسم", type: "text", defaultValue: "", className: "" },
	{ name: "birthday", label: "التاريخ الميلاد", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "job", label: "الوظيفة", type: "text", defaultValue: "", className: "" },
]

export const profileFields2 = [
	{ name: "phone", label: "الهاتف", type: "text", defaultValue: "", className: "" },
	{ name: "country", label: "البلد", type: "select", choices: countryListAllIsoData, defaultValue: "", className: "" },
	{ name: "address", label: "العنوان", type: "text", defaultValue: "", className: "" }
]


export const profileFields3 = [
	{ name: "linkedinLink", label: "رابط لينكدين", type: "text", defaultValue: "", className: "" },
	{ name: "facebookLink", label: "رابط الفيسبوك", type: "text", defaultValue: "", className: "" },
	{ name: "twitterLink", label: "رابط التويتر", type: "text", defaultValue: "", className: "" },
	{ name: "skypeLink", label: "رابط السكايب", type: "text", defaultValue: "", className: "" },

]
export const educationFields = [
	{ name: "university", label: "جامعة", type: "text", defaultValue: "", className: "" },
	{ name: "title", label: "عنوان", type: "text", defaultValue: "", className: "" },
	{ name: "startDate", label: "تاريخ البدء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "endDate", label: "تاريخ الانتهاء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: null, className: "" },
]

export const expericenceFields = [
	{ name: "company", label: "شركة", type: "text", defaultValue: "", className: "" },
	{ name: "title", label: "عنوان", type: "text", defaultValue: "", className: "" },
	{ name: "startDate", label: "تاريخ البدء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "endDate", label: "تاريخ الانتهاء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: null, className: "" },
]


export const certificationFields = [
	{ name: "title", label: "اسم", type: "text", defaultValue: "", className: "" },
	{ name: "provider", label: "مزود", type: "text", defaultValue: "", className: "" },
	{ name: "startDate", label: "تاريخ البدء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "endDate", label: "تاريخ الانتهاء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
]


export const volunteeringFields = [
	{ name: "organization", label: "منظمة", type: "text", defaultValue: "", className: "" },
	{ name: "role", label: "دور", type: "text", defaultValue: "", className: "" },
	{ name: "startDate", label: "تاريخ البدء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "endDate", label: "تاريخ الانتهاء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: null, className: "" },
	{ name: "description", label: "وصف", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
]

export const languageFields = [
	{ name: "name", label: "اللغة", type: "select", choices: getLanguages(), defaultValue: "", className: "" },
	{ name: "level", label: "المستوى", type: "select", choices: [{ label: "مبتدئ", value: "beginner" }, { label: "متوسط", value: "intermediate" }, { label: "متقدم", value: "advanced" }, { label: "اللغة الأم", value: "native" }], defaultValue: "", className: "" },
]

export const activityFields = [
	{ name: "title", label: "اسم", type: "text", defaultValue: "", className: "" },
	{ name: "center", label: "المؤسسة", type: "text", defaultValue: "", className: "" },
	{ name: "role", label: "دور", type: "text", defaultValue: "", className: "" },
	{ name: "location", label: "موقع", type: "text", defaultValue: "", className: "" },
	{ name: "startDate", label: "تاريخ البدء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "endDate", label: "تاريخ الانتهاء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: null, className: "" },
]

export const patentFields = [
	{ name: "title", label: "اسم", type: "text", defaultValue: "", className: "" },
	{ name: "center", label: "المؤسسة", type: "text", defaultValue: "", className: "" },
	{ name: "status", label: "الحالة", type: "text", defaultValue: "", className: "" },
	{ name: "code", label: "رمز", type: "text", defaultValue: "", className: "" },
	{ name: "startDate", label: "تاريخ البدء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "endDate", label: "تاريخ الانتهاء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "description", label: "وصف", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
]

export const honorFields = [
	{ name: "title", label: "اسم", type: "text", defaultValue: "", className: "" },
	{ name: "center", label: "center", type: "text", defaultValue: "", className: "" },
	{ name: "date", label: "date", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "description", label: "وصف", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
]

export const projectFields = [
	{ name: "title", label: "اسم", type: "text", defaultValue: "", className: "" },
	{ name: "startDate", label: "تاريخ البدء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "endDate", label: "تاريخ الانتهاء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: null, className: "" },
	{ name: "description", label: "وصف", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
]

export const postStep1 = [
	{ name: "arabicTitle", label: "عنوان المنشور بالعربية", type: "text", defaultValue: "", className: "" },
	{ name: "authorArabicNames", label: "الباحثون المشاركون", type: "array", defaultValue: [], className: "" },
	{ name: "arabicDescription", label: "الملخص بالعربية", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
	{ name: "arabicKeyword", label: "الكلمات المفتاحية", type: "array", defaultValue: [], className: "" },
]


export const postStep2 = [
	{ name: "englishTitle", label: "عنوان المنشور بالإنجليزية", type: "text", defaultValue: "", className: "" },
	{ name: "authorNames", label: "الباحثون المشاركون بالانجليزية", type: "array", defaultValue: [], className: "" },
	{ name: "englishDescription", label: "الملخص بالإنجليزية", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
	{ name: "keywords", label: "الكلمات المفتاحية بالانجليزية", type: "array", defaultValue: [], className: "" },
]

export const postStep3 = [
	{ name: "image", label: "صورة توضيحية", type: "file", props: { accept: "application/pdf", InputLabelProps: { shrink: true } }, defaultValue: null, className: "fileInput" },
	{ name: "publishedBy", label: "الناشر", type: "text", defaultValue: "", className: "" },
	{ name: "linkDOI", label: "رابط DOI", type: "text", defaultValue: "", className: "" },
	{ name: "ISSN", label: "رابط ISSN", type: "text", defaultValue: "", className: "" },
	{ name: "file", label: "رابط ملف المشروع", type: "file", props: { accept: "application/pdf", InputLabelProps: { shrink: true } }, defaultValue: null, className: "fileInput" },
]

export const projectStep1 = [
	{ name: "primaryAuthor", label: "المؤلف الرئيسي", type: "text", defaultValue: "", className: "" },
	{ name: "secondaryAuthors", label: "المؤلفون المشاركون", type: "array", defaultValue: [], className: "" },
	{ name: "arabicTitle", label: "عنوان المنشور بالعربية", type: "text", defaultValue: "", className: "" },
	{ name: "englishTitle", label: "عنوان المنشور بالإنجليزية", type: "text", defaultValue: "", className: "" },
	{ name: "supervisor", label: "المشرف", type: "text", defaultValue: "", className: "" },
	{ name: "center", label: "الجامعة / المؤسسة", type: "text", defaultValue: "", className: "" },
]

export const projectStep2 = [
	{ name: "arabicDescription", label: "الملخص بالعربية", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
	{ name: "englishDescription", label: "الملخص بالإنجليزية", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
	{ name: "startDate", label: "تاريخ البدأ", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
	{ name: "endDate", label: "تاريخ الانتهاء", type: "date", props: { InputLabelProps: { shrink: true } }, defaultValue: "", className: "" },
]
export const projectStep3 = [
	{ name: "justifications", label: "المبررات", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
	{ name: "goals", label: "الأهداف", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
	{ name: "previousStudies", label: "الدراسات السابقة للمشروع", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },

]

export const projectStep4 = [
	{ name: "methodology", label: "منهج البحث ووسائله", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
	{ name: "materials", label: "المراجع والمصادر", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
	{ name: "steps", label: "مراحل البحث", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
]

export const groupFields = [
	{ name: "title", label: "عنوان المجموعة", type: "text", defaultValue: "", className: "" },
	{ name: "slogan", label: "شعار المجموعة", type: "text", defaultValue: "", className: "" },
	{ name: "privacy", label: "خصوصية", type: "select", choices: [{ label: "عام", value: "public" }, { label: "سري", value: "private" }], defaultValue: "", className: "" },
	{ name: "website", label: "الموقع", type: "text", defaultValue: "", className: "" },
	{ name: "description", label: "وصف", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
]

export const serviceRequestFields = [
	{ name: "title", label: "عنوان الطلب", type: "text", defaultValue: "", className: "" },
	{ name: "primarySpeciality", label: "التخصص الأساسي", type: "select", choices: [{ label: "عام", value: "public" }, { label: "سري", value: "private" }], defaultValue: "", className: "" },
	{ name: "secondarySpeciality", label: "التخصص الفرعي", type: "text", defaultValue: "", className: "" },
	{ name: "description", label: "تفاصيل الطلب", type: "text", defaultValue: "", className: "autoHeight", props: { multiline: true, rowMax: 4 } },
	{ name: "urgentRequest", label: "طلب عاجل؟", defaultValue: false, type: "checkbox",className:"" },
	{ name: "file", label: "تحميل ملف المقال", type: "file", props: { accept: "application/pdf", InputLabelProps: { shrink: true } }, defaultValue: null, className: "fileInput" },
]