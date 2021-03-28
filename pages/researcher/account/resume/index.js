import { useState,useEffect } from 'react'
import ResearcherAccountLayout from "../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import CardMembershipOutlinedIcon from "@material-ui/icons/CardMembershipOutlined";
import classes from "../../../../styles/Resume.module.css";
import AboutMe from "../../../../components/AboutMe/AboutMe";
import BadgesCard from "../../../../components/BadgesCard/BadgesCard";
import MyNetwork from "../../../../components/MyNetwork/MyNetwork";
import LearnNow from "../../../../components/LearnNow/LearnNow";
import LastArticles from "../../../../components/LastArticles/LastArticles";
import MyGroups from "../../../../components/MyGroups/MyGroups";
import ResumeMainCollection from "../../../../components/ResumeMainCollection/ResumeMainCollection";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResumeSuccessItem from "../../../../components/ResumeSuccessItem/ResumeSuccessItem";
import {
  activityFields,
  certificationFields,
  educationFields,
  expericenceFields,
  honorFields,
  languageFields,
  patentFields,
  projectFields,
  volunteeringFields,
} from "../../../../utils/form/Fields";
import {
  activitySchema,
  educationSchema,
  projectSchema,
  experienceSchema,
  honorSchema,
  languageSchema,
  patentSchema,
  VolunteeringSchema,
  certificationSchema,
} from "../../../../utils/Validation/ValidationObjects";
import { dataaboutme,datagroups,dataarticles,datahonors,datapatents,dataactivities,datalanguages,dataprojects,databadges,datausers,dataeducations,dataexperiences,datacertifications,datavolunteerings } from '../../../../utils/fixtures/DevData';
import MyHead from '../../../../components/MyHead/MyHead';
import axios from 'axios'
import { useSelector } from 'react-redux'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ["sidebar"]),
    },
  })

export default function index() {
  const [aboutme,setAboutMe] = useState([])
  const [badges,setBadges] = useState([])
  const [users,setUsers] = useState(datausers)
  const [educations,setEducations] = useState([])
  const [isLoadingEducation,setIsLoadingEducation] = useState(true)
  const [experiences,setExperiences] = useState([])
  const [isLoadingExperince,setIsLoadingExperience] = useState(true)
  const [certifications,setCertifications] = useState([])
  const [isLoadingCertification,setIsLoadingCertification] = useState(true)
  const [volunteerings,setVolunteerings] = useState([])
  const [isLoadingVolunteering,setIsLoadingVolunteering] = useState(true)
  const [projects,setProjects] = useState([])
  const [languages,setLanguages] = useState([])
  const [activities,setActivities] = useState([])
  const [patents,setPatents] = useState([])
  const [honors,setHonors] = useState([])
  const [articles,setArticles] = useState(dataarticles)
  const [groups,setGroups] = useState(datagroups)
  const user = useSelector((state) => state.user)
  
    useEffect(()=>{
        axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/education?researcherId=${user.researchers.id}`,
          data: {}
        })
          .then(response=>{setEducations(response.data);setIsLoadingEducation(false)})
          .catch(error=>console.log(error))
        ;
        axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/experience?researcherId=${user.researchers.id}`,
          data: {}
        })
          .then(response=>{setExperiences(response.data);setIsLoadingExperience(false)})
          .catch(error=>console.log(error))
        ;
        
        axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/activity?researcherId=${user.researchers.id}`,
          data: {}
        })
          .then(response=>setActivities(response.data))
          .catch(error=>console.log(error))
        ;
        axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/volunteering?researcherId=${user.researchers.id}`,
          data: {}
        })
          .then(response=>{setVolunteerings(response.data);setIsLoadingVolunteering(false)})
          .catch(error=>console.log(error))
        ;
        axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/certification?researcherId=${user.researchers.id}`,
          data: {}
        })
          .then(response=>{setCertifications(response.data);setIsLoadingCertification(false)})
          .catch(error=>console.log(error))
        ;
        axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/honor?researcherId=${user.researchers.id}`,
          data: {}
        })
          .then(response=>setHonors(response.data))
          .catch(error=>console.log(error))
        ;
        axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/project?researcherId=${user.researchers.id}`,
          data: {}
        })
          .then(response=>setProjects(response.data))
          .catch(error=>console.log(error))
        ;
        axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/patent?researcherId=${user.researchers.id}`,
          data: {}
        })
          .then(response=>setPatents(response.data))
          .catch(error=>console.log(error))
        ;
        axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_API_URL}/researcher/language?researcherId=${user.researchers.id}`,
          data: {}
        })
          .then(response=>setLanguages(response.data))
          .catch(error=>console.log(error))
        ;
      },[])   

      
  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - السيرة الذاتية" />
      <div className={classes.resumeContainer}>
        
        <div className={classes.sideSection}>
            <AboutMe aboutme={aboutme} />
            <BadgesCard badges={badges} />
            <MyNetwork users={users} />
        </div>

        <div className={classes.mainSection}>
            <ResumeMainCollection
                icon={<SchoolOutlinedIcon />}
                label="المؤهلات الاكاديمية"
                collections={educations}
                isLoading={isLoadingEducation}
                collectionName="education"
                setCollections={setEducations}
                validationSchema={educationSchema}
                fields={educationFields}
            />

            <ResumeMainCollection
                icon={<WorkOutlineOutlinedIcon />}
                label="الخبرة المهنية"
                collections={experiences}
                isLoading={isLoadingExperince}
                collectionName="experience"
                setCollections={setExperiences}
                validationSchema={experienceSchema}
                fields={expericenceFields}
            />

            <ResumeMainCollection
                icon={<CardMembershipOutlinedIcon />}
                label="الشهادات"
                collections={certifications}
                isLoading={isLoadingCertification}
                collectionName="certification"
                setCollections={setCertifications}
                validationSchema={certificationSchema}
                fields={certificationFields}
            />

            <ResumeMainCollection
                icon={
                  <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  style={{ fontSize: "1.5rem" }}
                  />
                }
                label="العمل التطوعي"
                collectionName="volunteering"
                collections={volunteerings}
                setCollections={setVolunteerings}
                isLoading={isLoadingVolunteering}
                validationSchema={VolunteeringSchema}
                fields={volunteeringFields}
            />
            <ResumeMainCollection label="الإنجازات">
                <ResumeSuccessItem
                    label="المشاريع"
                    items={projects}
  
                    collectionName="project"
                    setItems={setProjects}
                    validationSchema={projectSchema}
                    fields={projectFields}
                />
                <ResumeSuccessItem
                    label="اللغات"
                    items={languages}
  
                    collectionName="language"
                    setItems={setLanguages}
                    validationSchema={languageSchema}
                    fields={languageFields}
                />
                <ResumeSuccessItem
                    label="النشاطات و الفعاليات"
  
                    collectionName="activity"
                    validationSchema={activitySchema}
                    fields={activityFields}
                    items={activities}
                    setItems={setActivities}
                />
                <ResumeSuccessItem
                    label="براءات الاختراع"
  
                    collectionName="patent"
                    setItems={setPatents}
                    items={patents}
                    validationSchema={patentSchema}
                    fields={patentFields}
                />
                <ResumeSuccessItem
                    last
                    label="التكريمات"
  
                    collectionName="honor"
                    setItems={setHonors}
                    items={honors}
                    validationSchema={honorSchema}
                    fields={honorFields}
                />
            </ResumeMainCollection>
        </div>
        <div className={classes.sideSection}>
          <LearnNow />
          <LastArticles articles={articles} />
          <MyGroups groups={groups} />
        </div>
      </div>
    </ResearcherAccountLayout>
  );
}
