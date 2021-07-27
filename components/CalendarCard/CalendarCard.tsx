import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import classes from './CalendarCard.module.css'
const CalendarCard: React.FC = () => {
    const [values, setValues] = useState<Date[]>([])
    const clickDay = (value: Date) => setValues([...values, value])




    const events = [
        {
            day: "الاثنين 13",
            subEvents: [
                {
                    time: "8:30",
                    timeType: "صباحا",
                    title: "الإفطار مع نيكو",
                    description: "مرحبا جميل! أنا أقوم بإنشاء هذا الحدث لدعوتك لتناول الإفطار قبل العمل. قابلني في الكافتيريا."
                },
                {
                    time: "10:00",
                    timeType: "مساءا",
                    title: "مشاهدة الحفلة",
                    description: "أكبر حفلة لشاشات اليوتيوب! تعال وانضم إلينا في منطقة العزيز."
                },
            ]
        },
    ]

    return (
        <div className={classes.calendarCard}>
            <Calendar
                calendarType="Arabic"
                defaultValue={values.length > 0 ? values : undefined}
                locale="ar-DZ"
                allowPartialRange
                className={classes.calendar}
                onClickDay={clickDay}
            />
            <div className={classes.events}>
                {
                    events.map((event, index) => (
                        <div className={classes.event} key={`event-${index}`}>
                            <h4>{event.day}</h4>
                            <div className={classes.subEvents}>
                                {
                                    event.subEvents.map((subEvent, subIndex) => (
                                        <div className={classes.subEvent} key={`event-${index}-subEvent-${subIndex}`}>
                                            <div>
                                                <span>{subEvent.time}</span>
                                                <span>{subEvent.timeType}</span>
                                            </div>
                                            <div>
                                                <h5>{subEvent.title}</h5>
                                                <p>
                                                    {subEvent.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    )
                    )
                }
            </div>

        </div>
    )
}
export default CalendarCard
