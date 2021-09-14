import React from 'react'
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import WorkInProgress from '../../../../components/WorkInProgress/WorkInProgress'
import MyHead from '../../../../components/MyHead/MyHead'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import classes from '../../../../styles/Score.module.css'
import ScoreStatCard from '../../../../components/ScoreStatCard/ScoreStatCard'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PieChart, Pie, Cell, Sector, Label } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { generalScoreStats, monthChartStat, summarizeScoreStats,friendsActivity } from '../../../../utils/fixtures/DevData'
import { LinearProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { GetServerSideProps, GetStaticProps } from 'next'
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

const data = [
  { name: 'Group B', value: 200 },
  { name: 'Group C', value: 230 },
];
const COLORS = ['#615dfa', '#3ad2fe'];


const ResearcherAccountScorePage:React.FC = ()=> {

  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - الرصيد" />
      {/* <WorkInProgress menu="الرصيد" /> */}
      <div className={classes.scoreContainer}>
        <div className={classes.scoreGeneralStats}>
          {
            generalScoreStats.map((score, index) => (
              <ScoreStatCard
                key={`index=${index}`}
                score={score}
              />
            ))
          }
        </div>
        <div className={classes.monthStats}>
          <div className={classes.monthStatsHeader}>
            <h1>
              التقرير الشهري
                </h1>
            <div className={classes.monthStatsHeaderControl}>
              <div className={classes.statColor}>
                <span></span>
                <span>الزيارات</span>
              </div>
              <div className={classes.statColor}>
                <span></span>
                <span>المشاهدات</span>
              </div>
              <div className={classes.monthSwitcher}>
                <span>
                  أوت 2020
              </span>
                <ExpandMoreIcon className={classes.switchIcon} />
              </div>
            </div>

          </div>
          <div className={classes.chartStat}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthChartStat}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid x={4} width="10%" /> */}
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis orientation="right" tickLine={false} axisLine={false} tickMargin={40} tickCount={10} />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="المشاهدات" background={{ fill: "#e8e8ef", radius: 4 }} radius={[0, 0, 4, 4]} stackId="a" fill="#118ab2" barSize={18} />
                <Bar dataKey="الزيارات" stackId="a" fill="#3ad2fe" radius={[4, 4, 0, 0]} barSize={18} />
              </BarChart>
            </ResponsiveContainer>

          </div>
          <div className={classes.monthSummarize}>
            <div key={`summarize-score-stats-noindex`} className={classes.monthSummarizeItem}>
              <PieChart width={150} height={150}>
                <Pie
                  nameKey="النسبة"
                  data={data}
                  innerRadius={40}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <span className={classes.monthSummarizeChartLabel}>النسبة</span>
            </div>
            {
              summarizeScoreStats.map((stat, index) => (
                <div key={`summarize-score-stats-${index}`} className={classes.monthSummarizeItem}>
                  <span className={classes.monthSummarizeItemValue}>
                    {stat.value}
                    {stat.unit}
                  </span>
                  <span className={classes.monthSummarizeItemLabel}>
                    {stat.label}
                  </span>
                </div>
              ))
            }
          </div>

        </div>
        <div className={classes.rowStats}>
          <div className={classes.rowStatScore}>
            <h2>الرصيد</h2>
            <div className={classes.rowStatScoreChart}>
              <PieChart width={250} height={250}>
                <Pie
                  innerRadius={85}
                  data={data}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <h2>
                85%
                <span>
                  رصيدي
                </span>
              </h2>
            </div>
            <div className={classes.rowStatScoreChartData}>
              <div className={classes.rowStatDataItem}>
                <div className={classes.color}></div>
                <div className={classes.value}>5.2K</div>
                <div className={classes.label}>منشورات</div>
              </div>
              <div className={classes.divider}></div>
              <div className={classes.rowStatDataItem}>
                <div className={`${classes.color} ${classes.color2}`}></div>
                <div className={classes.value}>18.3K</div>
                <div className={classes.label}>قراءات</div>
              </div>
            </div>
          </div>
          <div className={classes.friendsActivity}>
            <h2>
              أفضل نشاطات الأصدقاء
            </h2>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>الصديق</TableCell>
                    <TableCell>التفاعل</TableCell>
                    <TableCell>التعليقات</TableCell>
                    <TableCell>المشاركات</TableCell>
                    <TableCell>الردود</TableCell>
                    <TableCell>مشاهدات المنشورات</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    friendsActivity.map((activity,index)=>(
                    <TableRow key={`activity-friend-${index}`}>
                        <TableCell>
                          <div className={classes.friendInfo}>
                              <div className={classes.friendImageContainer}>
                                <img src={activity.image} alt="" />
                              </div>
                              <div className={classes.friendInfoContent}>
                                <h4>{activity.friend}</h4> 
                                <span>
                                    صديق منذ 
                                    &nbsp;
                                    {activity.from}
                                </span>
                                
                              </div>
                          </div>
                        </TableCell>
                        <TableCell>{activity.reactions}</TableCell>
                        <TableCell>{activity.comments}</TableCell>
                        <TableCell>{activity.shares}</TableCell>
                        <TableCell>{activity.responses}</TableCell>
                        <TableCell>
                            <div className={classes.friendViews}>
                              <LinearProgress variant="determinate" value={activity.views} />
                              <span>{activity.views}%</span>
                            </div>
                        </TableCell>
                    </TableRow>

                    ))
                  }
                </TableBody>
              </Table>
          </div>
        </div>
      </div>
    </ResearcherAccountLayout>
  )
}

export default ResearcherAccountScorePage;