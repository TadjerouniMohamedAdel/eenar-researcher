import { useState } from 'react'
import MyHead from '../../../components/MyHead/MyHead'
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BannerMenu from '../../../components/BannerMenu/BannerMenu'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import classes from '../../../styles/Messages.module.css'
import { motion } from 'framer-motion'
import { Button, FormControl, IconButton, InputAdornment, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faImage } from '@fortawesome/free-solid-svg-icons'


const easing = [0.6, -0.05, 0.01, 0.99];
const animLayout = {
  initial: { opacity: 0, transition: { duration: 0.6, delay: 0 } },
  animate: { opacity: 1, transition: { duration: 0.6, delay: 0 } },
};

const lastMessages = [
  {
    "sender": "زوبير ولقبو",
    "from": "منذ 29 دقيقة",
    "lastMessage": "جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
  {
    "sender": "بلال بوعيشة",
    "from": "منذ 29 دقيقة",
    "lastMessage": "جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
  {
    "sender": "إلياس بوجلطية",
    "from": "منذ 29 دقيقة",
    "lastMessage": "جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
  {
    "sender": "جلال الدين شعبان",
    "from": "منذ 29 دقيقة",
    "lastMessage": "جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
  {
    "sender": "أسامة الديزاينر",
    "from": "منذ 29 دقيقة",
    "lastMessage": "جيد جدا، سنقوم بعقد اجتماع معهم في المكان.."
  },
]

const messages = [
  {
    fromSender: true,
    message: "مرحبا معاذ كيف تجري الأمور مع العمل؟",
    date: "السبت على 10:15 صباحا",
  },
  {
    fromSender: false,
    message: "أهلا إلياس",
    date: "10:20 صباحا"
  },
  {
    fromSender: false,
    message: `العمل يجري بشكل جيد فقط
    أواجه بعض العراقيل في بعض الأمور الفلانية والأمور الأخرى.`,
    date: "10:20 صباحا"
  },
  {
    fromSender: true,
    message: "مرحبا معاذ كيف تجري الأمور مع العمل؟",
    date: "10:20 صباحا"
  },
  {
    fromSender: true,
    message: `سنقوم بالأشياء الفلانية والأشياء الفلانية الأخرى والأشياء التي ليست أخرى..
    ثم نحاول مع الأشياء التي هي أخرى لكنها ليست فلانية..`,
    date: "10:20 صباحا"
  },
  {
    fromSender: true,
    message: "بعدها ننتقل مباشرة للشيء الفلاني.",
    date: "10:20 صباحا"
  },
]


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})
export default function index() {
  const [active, setActive] = useState(3)
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
            <div className={classes.lastMessagesItems}>
              {
                lastMessages.map((message, index) => (
                  <div key={`last-message-${index}`} className={`${classes.lastMessage} ${active === index && classes.active}`} onClick={() => setActive(index)}>
                    {active === index && <motion.div variants={animLayout} exit="initial" initial="initial" animate="animate" className={classes.activeIndicator}></motion.div>}
                    <div className={classes.lastMessageSenderImage}></div>
                    <div className={classes.messageInfo}>
                      <h2>
                        {message.sender}
                        <span>
                          {message.from}
                        </span>
                      </h2>
                      <h3>
                        {message.lastMessage}
                      </h3>
                    </div>
                  </div>

                ))
              }
            </div>
            <div className={classes.lastMessagesFilter}>
              <FormControl variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder="إبحث في الرسائل"
                  onChange={() => { }}
                  style={{ width: 328, height: 48, borderRadius: 8 }}
                  endAdornment={<InputAdornment position="end"><SearchIcon style={{ color: "#cfcfd9" }} /></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className={classes.divider}></div>
          <div className={classes.discussion}>
            <div className={classes.senderHeader}>
              <div className={classes.senderInfo}>
                <div className={classes.senderImage}></div>
                <h1>
                  إلياس بوجلطية
                  <span>متصل</span>
                </h1>
              </div>
              <div>
                <IconButton onClick={() => { }}>
                  <MoreHorizOutlinedIcon className={classes.actionSectionIcon} />
                </IconButton>
              </div>
            </div>
            <div className={classes.messages}>
              {
                messages.map((message, index) => (
                  <div className={`${classes.message} ${!message.fromSender && classes.myMessage}`} key={`message-${index}`}>
                    { (!messages[index - 1] || (!messages[index - 1].fromSender && messages[index].fromSender)) && <div className={classes.senderImage}></div>}
                    <div className={`${classes.messageContent} ${!message.fromSender && classes.myMessage}`}>
                      {message.message}
                    </div>
                  </div>
                ))
              }
            </div>
            <div className={classes.writeMessage}>
              <FormControl variant="outlined" style={{width:"80%"}}>
                <OutlinedInput
                  placeholder="إبحث في الرسائل"
                  onChange={() => { }}
                  style={{ borderRadius: 8 }}
                  endAdornment={<InputAdornment position="end"><IconButton ><FontAwesomeIcon icon={faImage} style={{ color: "#cfcfd9" }} /></IconButton></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </FormControl>
              <IconButton onClick={() => { }} variant="contained" className={classes.sendMessageButton}>
                <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white",fontSize:20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </ResearcherLayout>
  )
}
