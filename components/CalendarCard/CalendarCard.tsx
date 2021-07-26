import React,{ useState } from 'react'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import classes from './CalendarCard.module.css'
const  CalendarCard:React.FC = () =>{
    const [values,setValues]  = useState([new Date])
    const clickDay = (value:Date, event:MouseEvent) => setValues([...values,value])
    return (
        <div className={classes.calendarCard}>
            <Calendar
                calendarType="Arabic"
                value={values}
                locale="ar-DZ"
                className={classes.calendar}
                onClickDay={clickDay}
            />
        </div>
    )
}
export default CalendarCard
