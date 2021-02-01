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

export default function index() {
  const [aboutme,setAboutMe] = useState([])
  const [badges,setBadges] = useState([])
  const [users,setUsers] = useState(datausers)
  const [educations,setEducations] = useState([])
  const [experiences,setExperiences] = useState([])
  const [certifications,setCertifications] = useState([])
  const [volunteerings,setVolunteerings] = useState([])
  const [projects,setProjects] = useState([])
  const [languages,setLanguages] = useState([])
  const [activities,setActivities] = useState([])
  const [patents,setPatents] = useState([])
  const [honors,setHonors] = useState([])
  const [articles,setArticles] = useState(dataarticles)
  const [groups,setGroups] = useState(datagroups)
  
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        axios.defaults.withCredentials = true;
        axios.get(`https://eenar-backend.herokuapp.com/researcher/education?researcherId=${user.researchers.id}`,{withCredentials: true})
              .then((response)=>{
                  console.log(response.data)
              })
              .catch(error=>{
                console.log(error)
              })
        axios.get(`https://eenar-backend.herokuapp.com/researcher/activity?researcherId=${user.researchers.id}`,{withCredentials: true})
        .then((response)=>{
            console.log(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
        axios.get(`https://eenar-backend.herokuapp.com/researcher/experience?researcherId=${user.researchers.id}`,{withCredentials: true})
        .then((response)=>{
            console.log(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
        axios.get(`https://eenar-backend.herokuapp.com/researcher/language?researcherId=${user.researchers.id}`,{withCredentials: true})
        .then((response)=>{
            console.log(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
        axios.get(`https://eenar-backend.herokuapp.com/researcher/patent?researcherId=${user.researchers.id}`,{withCredentials: true})
        .then((response)=>{
            console.log(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
        axios.get(`https://eenar-backend.herokuapp.com/researcher/honor?researcherId=${user.researchers.id}`,{withCredentials: true})
        .then((response)=>{
            console.log(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
        axios.get(`https://eenar-backend.herokuapp.com/researcher/project?researcherId=${user.researchers.id}`,{withCredentials: true})
        .then((response)=>{
            console.log(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
        axios.get(`https://eenar-backend.herokuapp.com/researcher/volunteering?researcherId=${user.researchers.id}`,{withCredentials: true})
        .then((response)=>{
            console.log(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
        axios.get(`https://eenar-backend.herokuapp.com/researcher/certificate?researcherId=${user.researchers.id}`,{withCredentials: true})
        .then((response)=>{
            console.log(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
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
                setCollections={setEducations}
                validationSchema={educationSchema}
                fields={educationFields}
            />

            <ResumeMainCollection
                icon={<WorkOutlineOutlinedIcon />}
                label="الخبرة المهنية"
                collections={experiences}
                setCollections={setExperiences}
                validationSchema={experienceSchema}
                fields={expericenceFields}
            />

            <ResumeMainCollection
                icon={<CardMembershipOutlinedIcon />}
                label="الشهادات"
                collections={certifications}
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
                collections={volunteerings}
                setCollections={setVolunteerings}
                validationSchema={VolunteeringSchema}
                fields={volunteeringFields}
            />
            <ResumeMainCollection label="الإنجازات">
                <ResumeSuccessItem
                    label="المشاريع"
                    items={projects}
                    setItems={setProjects}
                    validationSchema={projectSchema}
                    fields={projectFields}
                />
                <ResumeSuccessItem
                    label="اللغات"
                    items={languages}
                    setItems={setLanguages}
                    validationSchema={languageSchema}
                    fields={languageFields}
                />
                <ResumeSuccessItem
                    label="النشاطات و الفعاليات"
                    validationSchema={activitySchema}
                    fields={activityFields}
                    items={activities}
                    setItems={setActivities}
                />
                <ResumeSuccessItem
                    label="براءات الاختراع"
                    setItems={setPatents}
                    items={patents}
                    validationSchema={patentSchema}
                    fields={patentFields}
                />
                <ResumeSuccessItem
                    last
                    label="التكريمات"
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
