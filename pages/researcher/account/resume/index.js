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
import { datagroups, dataarticles, datausers } from '../../../../utils/fixtures/DevData';
import MyHead from '../../../../components/MyHead/MyHead';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})

export default function index() {
  const [aboutme, setAboutMe] = useState([])
  const [badges, setBadges] = useState([])
  const [users, setUsers] = useState(datausers)
  const [articles, setArticles] = useState(dataarticles)
  const [groups, setGroups] = useState(datagroups)



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
            collectionName="education"
            validationSchema={educationSchema}
            fields={educationFields}
          />

          <ResumeMainCollection
            icon={<WorkOutlineOutlinedIcon />}
            label="الخبرة المهنية"
            collectionName="experience"
            validationSchema={experienceSchema}
            fields={expericenceFields}
          />

          <ResumeMainCollection
            icon={<CardMembershipOutlinedIcon />}
            label="الشهادات"
            collectionName="certification"
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
            validationSchema={VolunteeringSchema}
            fields={volunteeringFields}
          />
          <ResumeMainCollection label="الإنجازات">
            <ResumeSuccessItem
              label="المشاريع"
              collectionName="project"
              validationSchema={projectSchema}
              fields={projectFields}
            />
            <ResumeSuccessItem
              label="اللغات"
              collectionName="language"
              validationSchema={languageSchema}
              fields={languageFields}
            />
            <ResumeSuccessItem
              label="النشاطات و الفعاليات"
              collectionName="activity"
              validationSchema={activitySchema}
              fields={activityFields}
            />
            <ResumeSuccessItem
              label="براءات الاختراع"
              collectionName="patent"
              validationSchema={patentSchema}
              fields={patentFields}
            />
            <ResumeSuccessItem
              last
              label="التكريمات"
              collectionName="honor"
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
