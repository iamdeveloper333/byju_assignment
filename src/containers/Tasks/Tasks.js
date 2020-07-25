import React, { Component } from 'react';  
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 

class Tasks extends Component { 
  render() {
    return ( 
      <div className="calender_view">
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth" 
            fixedWeekCount={false}
            showNonCurrentDates={false}
            events={[
              { title: '2 Tasks are due', date: '2020-07-18' },
              { title: '1 Tasks are due', date: '2020-07-20' },
              { title: '3 Tasks are due', date: '2020-07-21' },
              { title: '4 Tasks are due', date: '2020-07-24' },
              { title: '2 Tasks are due', date: '2020-08-06' },
            ]}
        />
      </div> 
    )
  }
}
 
export default Tasks;