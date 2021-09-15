import React,{ useState } from 'react'
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
import { faPaperPlane, faImage } from '@fortawesome/free-solid-svg-icons'
import { datamessages } from '../../../utils/fixtures/DevData'
import { GetServerSideProps, GetStaticProps } from 'next'
import axios from 'axios'
const easing = [0.6, -0.05, 0.01, 0.99];
const animLayout = {
  initial: { opacity: 0, transition: { duration: 0.6, delay: 0 } },
  animate: { opacity: 1, transition: { duration: 0.6, delay: 0 } },
};

const lastMessages = datamessages


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
const ResearcherAccountMessagesPage: React.FC = () => {
  const [active, setActive] = useState(3)
  return (
    <ResearcherLayout>
      <MyHead title="الرسائل" />
      <WorkInProgress menu="الرسائل"/>
      {/* <div className={classes.messagesContainer}>
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
                    <div className={classes.lastMessageSenderImage}>
                      <img src={message.image} alt="" />
                    </div>
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
                <div className={classes.senderImage}>
                  <img src={lastMessages[active].image} alt="" />
                </div>
                <h1>
                  {lastMessages[active].sender}
                  <span className={`${lastMessages[active].active && classes.online}`}>{lastMessages[active].active ? "متصل" : "غير متصل"}</span>
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
                lastMessages[active].messages.map((message, index) => (
                  <div className={`${classes.message} ${!message.fromSender && classes.myMessage}`} key={`message-${index}`}>
                    { message.fromSender && ((!lastMessages[active].messages[index - 1] || (!lastMessages[active].messages[index - 1].fromSender && lastMessages[active].messages[index].fromSender)) && <div className={classes.senderImage}><img src={lastMessages[active].image} alt="" /></div>)}
                    <div className={`${classes.messageContent} ${!message.fromSender && classes.myMessage}`}>
                      {message.message}
                    </div>
                  </div>
                ))
              }
            </div>
            <div className={classes.writeMessage}>
              <FormControl variant="outlined" style={{ width: "80%" }}>
                <OutlinedInput
                  placeholder="أكتب رسالة.."
                  multiline
                  rowsMax={2}
                  onChange={() => { }}
                  style={{ borderRadius: 8 }}
                  endAdornment={<InputAdornment position="end"><IconButton ><FontAwesomeIcon icon={faImage} style={{ color: "#cfcfd9" }} /></IconButton></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </FormControl>
              <IconButton
                onClick={() => { console.log("dsfs") }}
                className={classes.sendMessageButton}
              >
                <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white", fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div> */}
    </ResearcherLayout>
  )
}

export default ResearcherAccountMessagesPage;