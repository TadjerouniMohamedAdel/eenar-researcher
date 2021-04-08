import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkInProgress from '../../../../components/WorkInProgress/WorkInProgress'
import MyHead from '../../../../components/MyHead/MyHead'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})

export default function index() {
  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - الحائط" />
      <WorkInProgress menu="الحائط" />
    </ResearcherAccountLayout>
  )
}
