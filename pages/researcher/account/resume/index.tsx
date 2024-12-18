import ResearcherAccountLayout from "../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import CardMembershipOutlinedIcon from "@material-ui/icons/CardMembershipOutlined";

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
import MyHead from '../../../../components/MyHead/MyHead';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MultiSectionLayout from '../../../../layouts/MultiSectionLayout/MultiSectionLayout';
import AboutMe from "../../../../components/AboutMe/AboutMe";
import { useSelector } from "react-redux";
import { GetServerSideProps, GetStaticProps } from 'next'
import { RootState } from "../../../../redux/store2";
import axios from 'axios'


export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
      await axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_API_URL}/user/user`,
          withCredentials: true,
          headers: { Cookie: context.req.headers.cookie }
      })
      return {
          
          props: {
              ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
          }
      }
  } catch (error) {
      return {
          redirect: {
              destination: "/login",
              permanent: false
          },
          props: {
              ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
          }
      }
  }

}
const ResearcherAccountResumePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - السيرة الذاتية" />
      <MultiSectionLayout>
        <AboutMe user={user} />
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
      </MultiSectionLayout>
    </ResearcherAccountLayout>
  );
}
export default ResearcherAccountResumePage