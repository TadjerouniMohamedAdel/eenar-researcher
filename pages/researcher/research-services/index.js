import { useState } from 'react'
import MyHead from '../../../components/MyHead/MyHead'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MultiSectionLayout from '../../../layouts/MultiSectionLayout/MultiSectionLayout'
import BannerMenu from '../../../components/BannerMenu/BannerMenu'
import classes from '../../../styles/Services.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import ServiceCard from '../../../components/ServiceCard/ServiceCard'
import ServiceCardSkeleton from '../../../components/ServiceCard/ServiceCardSkeleton'
import AddElement from '../../../components/CrudModal/AddElement'
import Modal from '../../../components/Modal/Modal'
import { serviceRequestFields } from '../../../utils/form/Fields'
import { serviceRequestSchema } from '../../../utils/Validation/ValidationObjects'


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})
export default function index() {
  const [addVisible, setAddVisible] = useState(false);
  const services = ["","","","",""]

  return (
    <ResearcherLayout>
      <MyHead title="الخدمات البحثية" />
      <Modal visible={addVisible} setVisible={setAddVisible}>
        <AddElement
          title="طلب خدمة"
          handleSubmit={() => { }}
          validationSchema={serviceRequestSchema}
          fields={serviceRequestFields}
        />
      </Modal>
      <div className={classes.servicesContainer}>
        <BannerMenu
          title="الخدمات البحثية"
          description="تفاعل بشكل أفضل مع زملائك الباحثين، أرسل ملفات، صور وروابط."
          imgSrc="/images/services-banner.png"
        />
        <h1>مجمع الأبحاث</h1>
        <MultiSectionLayout
          hasTwoSection={false}
        >
          <div id="scrollableDivResearchs">
            <InfiniteScroll
              dataLength={10}
              className={classes.servicesList}
              next={() => { }}
              inverse={false}
              hasMore={false}
            >
              {
                services.length === 0 ? (
                  <div className={classes.empty}>
                    <img src="/images/empty.png" alt="empty-list" />
                    <h3>لا تحتوي هذه القائمة على بيانات</h3>
                  </div>
                )

                  :
                  services.map((service, index) => (
                    <ServiceCard setAddVisible={setAddVisible} key={index} />
                    
                    ))
                  }
                  <ServiceCardSkeleton />
            </InfiniteScroll>
          </div>
        </MultiSectionLayout>
      </div>

    </ResearcherLayout>
  )
}
