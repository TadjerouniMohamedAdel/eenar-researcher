import React from 'react'
import MyHead from '../../../components/MyHead/MyHead'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MultiSectionLayout from '../../../layouts/MultiSectionLayout/MultiSectionLayout'
import BannerMenu from '../../../components/BannerMenu/BannerMenu'
import classes from '../../../styles/Services.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import ServiceCard from '../../../components/ServiceCard/ServiceCard'
import ServiceCardSkeleton from '../../../components/ServiceCard/ServiceCardSkeleton'


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})
export default function index() {
  return (
    <ResearcherLayout>
      <MyHead title="الخدمات البحثية" />
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
              next={() => {}}
              inverse={false}
              hasMore={false}
            >
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCardSkeleton />
            </InfiniteScroll>
          </div>
        </MultiSectionLayout>
      </div>

    </ResearcherLayout>
  )
}
