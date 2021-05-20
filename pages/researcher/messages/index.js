import React from 'react'
import MyHead from '../../../components/MyHead/MyHead'
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BannerMenu from '../../../components/BannerMenu/BannerMenu'
import classes from '../../../styles/Messages.module.css'


const lastMesages = [
  {
    "sender":"زوبير ولقبو",
    "from":"منذ 29 دقيقة",
    "lastMessages":"جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
  {
    "sender":"بلال بوعيشة",
    "from":"منذ 29 دقيقة",
    "lastMessages":"جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
  {
    "sender":"إلياس بوجلطية",
    "from":"منذ 29 دقيقة",
    "lastMessages":"جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
  {
    "sender":"جلال الدين شعبان",
    "from":"منذ 29 دقيقة",
    "lastMessages":"جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
  {
    "sender":"أسامة الديزاينر",
    "from":"منذ 29 دقيقة",
    "lastMessages":"جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
]


export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ["sidebar"]),
    },
  })
export default function index() {
    return (
        <ResearcherLayout>
            <MyHead title="الرسائل" />
            {/* <WorkInProgress menu="الرسائل"/> */}
            <div className={classes.messagesContainer}>
              <BannerMenu
                title="الرسائل"
                description="تفاعل بشكل أفضل مع زملائك الباحثين، أرسل ملفات، صور وروابط."
                imgSrc="/images/messages-banner.png"
              />
              <h1>الرسائل</h1>
              <div className={classes.messagesBox}>
                <div className={classes.lastMessages}>
                      <div className={classes.lastMessage}>
                          <div className={classes.lastMessageSenderImage}></div>
                          <div className={classes.messageInfo}>
                              <h2>
                                زوبير ولقبو
                                <span>
                                منذ 29 دقيقة
                                </span>
                              </h2>
                          </div>
                      </div>
                </div>
                <div className={classes.divider}></div>
                <div className={classes.discussion}>
                </div>
              </div>
            </div>
        </ResearcherLayout>
    )
}
