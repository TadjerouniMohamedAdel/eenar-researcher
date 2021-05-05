/** researcher form fields */
export const aboutmeFields = [
    {name:"city",label:"المدينة",type:"text",defaultValue:"",className:""},
    {name:"center",label:"المؤسسة",type:"text",defaultValue:"",className:""},
    {name:"website",label:"الموقع",type:"text",defaultValue:"",className:""},
    {name:"aboutMe",label:"وصف",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
]

export const profileFields1=[
    {name:"lastname",label:"اللقب",type:"text",defaultValue:"",className:""},
    {name:"firstname",label:"الاسم",type:"text",defaultValue:"",className:""},
    {name:"birthday",label:"التاريخ الميلاد",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"job",label:"الوظيفة",type:"text",defaultValue:"",className:""},
]

export const profileFields2 = [
    {name:"phone",label:"الهاتف",type:"text",defaultValue:"",className:""},
    {name:"country",label:"البلد",type:"text",defaultValue:"",className:""},
    {name:"address",label:"العنوان",type:"text",defaultValue:"",className:""}
]

export const profileFields3= [
    {name:"linkedinLink",label:"رابط لينكدين",type:"text",defaultValue:"",className:""},
    {name:"facebookLink",label:"رابط الفيسبوك",type:"text",defaultValue:"",className:""},
    {name:"twitterLink",label:"رابط التويتر",type:"text",defaultValue:"",className:""},
    {name:"skypeLink",label:"رابط السكايب",type:"text",defaultValue:"",className:""},
  
]
export const  educationFields = [
    {name:"university",label:"جامعة",type:"text",defaultValue:"",className:""},
    {name:"title",label:"عنوان",type:"text",defaultValue:"",className:""},
    {name:"startDate",label:"تاريخ البدء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"endDate",label:"تاريخ الانتهاء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
]

export const expericenceFields = [
    {name:"company",label:"شركة",type:"text",defaultValue:"",className:""},
    {name:"title",label:"عنوان",type:"text",defaultValue:"",className:""},
    {name:"startDate",label:"تاريخ البدء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"endDate",label:"تاريخ الانتهاء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
]


export const certificationFields = [
    {name:"title",label:"اسم",type:"text",defaultValue:"",className:""},
    {name:"provider",label:"مزود",type:"text",defaultValue:"",className:""},
    {name:"startDate",label:"تاريخ البدء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"endDate",label:"تاريخ الانتهاء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
]


export const volunteeringFields = [
    {name:"organization",label:"منظمة",type:"text",defaultValue:"",className:""},
    {name:"role",label:"دور",type:"text",defaultValue:"",className:""},
    {name:"startDate",label:"تاريخ البدء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"endDate",label:"تاريخ الانتهاء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"description",label:"وصف",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
]

export const languageFields = [
    {name:"name",label:"اللغة",type:"text",defaultValue:"",className:""},
    {name:"level",label:"المستوى",type:"select",choices:[{label:"مبتدئ",value:"beginner"},{label:"متوسط",value:"intermediate"},{label:"متقدم",value:"advanced"},{label:"اللغة الأم",value:"native"}],defaultValue:"",className:""},
]

export const activityFields = [
    {name:"title",label:"اسم",type:"text",defaultValue:"",className:""},
    {name:"role",label:"دور",type:"text",defaultValue:"",className:""},
    {name:"location",label:"موقع",type:"text",defaultValue:"",className:""},
    {name:"startDate",label:"تاريخ البدء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"endDate",label:"تاريخ الانتهاء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
]

export const patentFields = [
    {name:"title",label:"اسم",type:"text",defaultValue:"",className:""},
    {name:"status",label:"الحالة",type:"text",defaultValue:"",className:""},
    {name:"code",label:"رمز",type:"text",defaultValue:"",className:""},
    {name:"startDate",label:"تاريخ البدء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"endDate",label:"تاريخ الانتهاء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"description",label:"وصف",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
]

export const honorFields =[
    {name:"title",label:"اسم",type:"text",defaultValue:"",className:""},
    {name:"center",label:"center",type:"text",defaultValue:"",className:""},
    {name:"date",label:"date",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"description",label:"وصف",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
]

export const projectFields = [
    {name:"title",label:"اسم",type:"text",defaultValue:"",className:""},
    {name:"startDate",label:"تاريخ البدء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"endDate",label:"تاريخ الانتهاء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"description",label:"وصف",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
]

export const postStep1=[
    {name:"primaryAuthor",label:"المؤلف الرئيسي",type:"text",defaultValue:"",className:""},
    {name:"secondaryAuthors",label:"المؤلفون المشاركون",type:"array",defaultValue:[],className:""},
    {name:"arabicTitle",label:"عنوان المنشور بالعربية",type:"text",defaultValue:"",className:""},
    {name:"englishTitle",label:"عنوان المنشور بالإنجليزية",type:"text",defaultValue:"",className:""},
    {name:"publishedBy",label:"الناشر",type:"text",defaultValue:"",className:""},
    {name:"link",label:"رابط DOI ISSN",type:"text",defaultValue:"",className:""},
]

export const postStep2=[
    {name:"arabicDescription",label:"الملخص بالعربية",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
    {name:"englishDescription",label:"الملخص بالإنجليزية",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
    {name:"publishedDate",label:"تاريخ النشر",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"file",label:"تحميل ملف المقال",type:"file",props:{accept:"application/pdf",InputLabelProps:{shrink:true}},defaultValue:null,className:"fileInput"},
    {name:"keywords",label:"الكلمات المفتاحية",type:"array",defaultValue:[],className:""},
]

export const projectStep1=[
    {name:"primaryAuthor",label:"المؤلف الرئيسي",type:"text",defaultValue:"",className:""},
    {name:"secondaryAuthors",label:"المؤلفون المشاركون",type:"array",defaultValue:[],className:""},
    {name:"arabicTitle",label:"عنوان المنشور بالعربية",type:"text",defaultValue:"",className:""},
    {name:"englishTitle",label:"عنوان المنشور بالإنجليزية",type:"text",defaultValue:"",className:""},
    {name:"supervisor",label:"المشرف",type:"text",defaultValue:"",className:""},
    {name:"center",label:"الجامعة / المؤسسة",type:"text",defaultValue:"",className:""},
]

export const projectStep2=[
    {name:"arabicDescription",label:"الملخص بالعربية",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
    {name:"englishDescription",label:"الملخص بالإنجليزية",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
    {name:"startDate",label:"تاريخ البدأ",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
    {name:"endDate",label:"تاريخ الانتهاء",type:"date",props:{InputLabelProps:{shrink:true}},defaultValue:"",className:""},
]
export const projectStep3=[
    {name:"justifications",label:"المبررات",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
    {name:"goals",label:"الأهداف",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
    {name:"previousStudies",label:"الدراسات السابقة للمشروع",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
    
]

export const projectStep4=[
    {name:"methodology",label:"منهج البحث ووسائله",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
    {name:"materials",label:"المراجع والمصادر",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
    {name:"steps",label:"مراحل البحث",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
]

export const groupFields = [
    {name:"title",label:"عنوان المجموعة",type:"text",defaultValue:"",className:""},
    {name:"slogan",label:"شعار المجموعة",type:"text",defaultValue:"",className:""},
    {name:"privacy",label:"خصوصية",type:"select",choices:[{label:"عام",value:"public"},{label:"سري",value:"private"}],defaultValue:"",className:""},
    {name:"website",label:"الموقع",type:"text",defaultValue:"",className:""},
    {name:"description",label:"وصف",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},
]

export const serviceRequestFields = [
    {name:"title",label:"عنوان الطلب",type:"text",defaultValue:"",className:""},
    {name:"primarySpeciality",label:"التخصص الأساسي",type:"select",choices:[{label:"عام",value:"public"},{label:"سري",value:"private"}],defaultValue:"",className:""},
    {name:"secondarySpeciality",label:"التخصص الفرعي",type:"text",defaultValue:"",className:""},
    {name:"description",label:"تفاصيل الطلب",type:"text",defaultValue:"",className:"autoHeight",props:{multiline:true,rowMax:4}},   
    {name:"urgentRequest",label:"طلب عاجل؟",defaultValue:false,type:"checkbox"},
    {name:"file",label:"تحميل ملف المقال",type:"file",props:{accept:"application/pdf",InputLabelProps:{shrink:true}},defaultValue:null,className:"fileInput"},
]