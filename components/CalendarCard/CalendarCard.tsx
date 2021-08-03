import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { eventsdata } from '../../utils/fixtures/DevData';
import classes from './CalendarCard.module.css'

/** 
    Card section to show a month calendar witch contains all researcher's events and the actions to edit delete or create a new event
 **/

const CalendarCard: React.FC = () => {
    const [values, setValues] = useState<Date[]>([])
    const clickDay = (value: Date) => setValues([...values, value])

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
                    eventsdata.map((event, index) => (
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
