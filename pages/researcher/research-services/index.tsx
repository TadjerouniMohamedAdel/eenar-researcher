import React,{ useState } from 'react'
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
import EmptyList from '../../../components/EmptyList/EmptyList'
import { GetServerSideProps, GetStaticProps } from 'next'
import axios from 'axios'
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress'

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
const ResercherResearchServicePage:React.FC=()=> {
  const [addVisible, setAddVisible] = useState(false);
  const services = ["","","","",""]

  return (
    <ResearcherLayout>
      <MyHead title="الخدمات البحثية" />
      <WorkInProgress menu="الخدمات البحثية" />
       {/* <Modal visible={addVisible} setVisible={setAddVisible}>
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
          
        >
          <div id="scrollableDivResearchs">
            <InfiniteScroll
              dataLength={10}
              className={classes.servicesList}
              next={() => { }}
              inverse={false}
              hasMore={false}
              loader={<div>Loading ...</div>}
            >
              {
                services.length === 0 ? (
                  <EmptyList />
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
      </div> */}

    </ResearcherLayout>
  )
}
export default ResercherResearchServicePage;