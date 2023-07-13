import {Calendar} from 'react-big-calendar';


// eslint-disable-next-line react/prop-types
export const CalendarComp = ({localizer, events}) => {
    
    return(
    <Calendar
        localizer={localizer}
        events={events}
        startAccessor= "start"
        endAccessor= "end"
        style={{ height: 500 }}
      />)
}
