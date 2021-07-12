import MyHead from "../../../../components/MyHead/MyHead";
import classes from "../../../../styles/MyPosts.module.css";
import axios from "axios";
import ResearcherLayout from "../../../../layouts/ResearcherLayout/ResearcherLayout";
import ResearchView from "../../../../components/ResearchView/ResearchView";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MultiSectionLayout from "../../../../layouts/MultiSectionLayout/MultiSectionLayout";


export async function getStaticPaths() {
  let paths = []
  await  axios({
              method: "get",
              url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/post/all`,
              withCredentials:true,
      })
      .then((response) => {
         paths = response.data.map((item)=>{
              return {
                  params:{id:item.id.toString()}
              }
          })
      })
      .catch((error) => console.log(error));
  
  
    return {
      paths,
      fallback: 'blocking' // See the "fallback" section below
    };
}


export async function getStaticProps(context) {
  // let research =null
  let research ={

            id: "c0f2f197-c255-4671-b859-013c603e8235",
            researcherId: "02d0c96f-9bfa-4c17-964c-b4be22f83df9",
            userId: null,
            primaryAuthor: "تجروني محمد عادل",
            secondaryAuthors:[
              "لخضر بودينة",
              "نصردين والي"
            ],
            publishedDate: "2021-07-03T00:00:00.000Z",
            researcherPost:{userResearcher:{"id":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","email":"mohnagato@gmail.com","lastname":"تجروني","firstname":"محمد عادل","type":"researcher","gender":"male","center":"مركز الرؤيا للأبحاث الفلكية","job":"web developer","region":"16","status":"verified","city":"Kouba","address":"qwdwqdqwdwqdwqdqw","image":"data:image/webp;base64,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","createdAt":"2021-06-29T10:43:06.601Z","updatedAt":"2021-07-01T09:25:57.954Z","researchers":{"id":"02d0c96f-9bfa-4c17-964c-b4be22f83df9","aboutMe":null,"userId":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","birthday":null,"webSite":null,"createdAt":"2021-06-29T10:47:22.369Z","updatedAt":"2021-07-01T09:25:57.983Z"},"admins":null}},
            englishTitle: "LOREM IPSUM ARABIC VERSION",
            publishedBy: "نصردين والي",
            link: "DFZ",
            arabicDescription: "وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور\nأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد\nأكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس\nأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت\nنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا\nكيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم"
            ,arabicTitle: " نموذج لوريم ايبسوم عربي - فرانكوا اراب "
            ,englishDescription: "Pariatur quibusdam odit quod. Optio et aut. Deleniti doloribus in nesciunt blanditiis maiores aut et.Pariatur quibusdam odit quod. Optio et aut. Deleniti doloribus in nesciunt blanditiis maiores aut et.Pariatur quibusdam odit quod. Optio et aut. Deleniti doloribus in nesciunt blanditiis maiores aut et.Pariatur quibusdam odit quod. Optio et aut. Deleniti doloribus in nesciunt blanditiis maiores aut et."
            ,file: "http://192.168.1.155:5000/files/posts/02d0c96f-9bfa-4c17-964c-b4be22f83df9/LOREMIPSUMARABICVERSION.pdf"
           ,keywords :[
             "KEYWORD1",
            "keyword2",
             "keyword3",

           ],
            createdAt: "2021-06-29T12:58:32.984Z",
            updatedAt: "2021-06-29T12:58:32.984Z",
            postStatus: null,
            maxPages: 1
  }
  await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/postByid?id=${context.params.id}`,
        withCredentials:true
      })
        .then((response) => {
            research = response.data
        })
        .catch((error) => console.log(error));
  return {
    props: {
      research,
      ...await serverSideTranslations(context.locale, ["sidebar"]),
    },
    revalidate: 1, 
  }
}

export default function post({research}) {
  console.log("research",research)
  return (
    <ResearcherLayout>
      <MyHead title={`${research.arabicTitle}   - منشوراتي`} />
          <MultiSectionLayout
            
            >
              {research ?   <ResearchView  research={research}/> :
                  (
                    <div className={classes.notFound}>
                      <img src="/images/404.png" alt="" />
                      <h1>هذا المنشور غير موجود</h1>
                    </div>
              )}
          </MultiSectionLayout>
              
        
    </ResearcherLayout>
  );
}
