import { useState } from 'react'
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
  volunteerungFields,
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


export default function index() {
  const [aboutme,setAboutMe] = useState(dataaboutme)
  const [badges,setBadges] = useState(databadges)
  const [users,setUsers] = useState(datausers)
  const [educations,setEducations] = useState(dataeducations)
  const [experiences,setExperiences] = useState(dataexperiences)
  const [certifications,setCertifications] = useState(datacertifications)
  const [volunteerings,setVolunteerings] = useState(datavolunteerings)
  const [projects,setProjects] = useState(dataprojects)
  const [languages,setLanguages] = useState(datalanguages)
  const [activities,setActivities] = useState(dataactivities)
  const [patents,setPatents] = useState(datapatents)
  const [honors,setHonors] = useState(datahonors)
  const [articles,setArticles] = useState(dataarticles)
  const [groups,setGroups] = useState(datagroups)
  
  return (
    <ResearcherAccountLayout>
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
                validationSchema={educationSchema}
                fields={educationFields}
            />

            <ResumeMainCollection
                icon={<WorkOutlineOutlinedIcon />}
                label="الخبرة المهنية"
                collections={experiences}
                validationSchema={experienceSchema}
                fields={expericenceFields}
            />

            <ResumeMainCollection
                icon={<CardMembershipOutlinedIcon />}
                label="الشهادات"
                collections={certifications}
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
                validationSchema={VolunteeringSchema}
                fields={volunteerungFields}
            />
            <ResumeMainCollection label="الإنجازات">
                <ResumeSuccessItem
                    label="المشاريع"
                    items={projects}
                    validationSchema={projectSchema}
                    fields={projectFields}
                />
                <ResumeSuccessItem
                    label="اللغات"
                    items={languages}
                    validationSchema={languageSchema}
                    fields={languageFields}
                />
                <ResumeSuccessItem
                    label="النشاطات و الفعاليات"
                    validationSchema={activitySchema}
                    fields={activityFields}
                    items={activities}
                />
                <ResumeSuccessItem
                    label="براءات الاختراع"
                    items={patents}
                    validationSchema={patentSchema}
                    fields={patentFields}
                />
                <ResumeSuccessItem
                    last
                    label="التكريمات"
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
