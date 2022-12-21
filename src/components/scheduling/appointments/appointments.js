import React, { useState, useEffect } from 'react';
import { Box, CardMedia, Card } from '@mui/material';
import { CalendarHeader } from '../calendarHeader/calendarHeader';
import { Day } from '../day/day';
import { NewEvent } from '../newEvent/newEvent';
import { DeleteEvent } from '../deleteEvent/deleteEvent';
import { GetDates } from '../hooks/getDates';
import axios from 'axios';
import { useSelector } from 'react-redux'
import Dog from '../../../assets/images/beanie.jpg'
import '../../scheduling/style.css';


export const Appointments = (props) => {
  // console.log('APPT PROPS======================>', props)
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  // const [newTitle, setNewTitle] = useState();
  const [newDate, setNewDate] = useState();
  // const [events, setEvents] = useState(
  //   localStorage.getItem('events') ?
  //     JSON.parse(localStorage.getItem('events')) :
  //     []
  // );
  const userAppts = useSelector(state => state.calendar.userAppts);
  const [events, setEvents] = useState(userAppts ? userAppts : []);



  console.log('events', userAppts)
  const handleCreateAppointment = async (newAppt) => {
    if (props.auth0.isAuthenticated) {
      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'POST',
        baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
        url: '/appt',
        data: newAppt
      };
      const apptResponse = await axios(config);
      console.log('Review from DB: ', apptResponse.data);
    }
  };

  const { user } = props.auth0;
  const handleSubmit = (event) => {

    // console.log('newAPPT', event)
    const newApptPost = {
      userName: user.given_name,
      email: user.email,
      title: event,
      date: newDate
    };
    // console.log('APPPPPTTT!!::', newApptPost);
    handleCreateAppointment(newApptPost);

  };




  const eventForDate = date => events.find(e => e.date === date);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));

  }, [events]);

  const { days, dateDisplay } = GetDates(events, nav);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10, backgroundImage: `url:${Dog}`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', }}>
        <CardMedia image={Dog}
          component='image'
          sx={{
            // border: '3px solid pink',
            height: '600px',
            width: '400px',
            borderRadius: '4px',
            marginTop: 4,
            marginRight: 3
          }} />
        <div id="container" >

          <CalendarHeader
            dateDisplay={dateDisplay}
            onNext={() => setNav(nav + 1)}
            onBack={() => setNav(nav - 1)}
          />

          <div id="weekdays">
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </div>

          <div id="calendar">
            {days.map((d, index) => (
              <Day
                key={index}
                day={d}
                onClick={() => {
                  if (d.value !== 'padding') {
                    setNewDate(d.date)
                    console.log('d.date',)
                    setClicked(d.date);
                  }
                }}
              />
            ))}
          </div>
        </div>

        {
          clicked && !eventForDate(clicked) &&
          <NewEvent
            onClose={() => setClicked(null)}

            onSave={title => {
              handleSubmit(title)
              setEvents([...events, { title, date: clicked }]);
              setClicked(null);
            }}
          />
        }

        {
          clicked && eventForDate(clicked) &&
          <DeleteEvent
            eventText={eventForDate(clicked).title}
            onClose={() => setClicked(null)}
            onDelete={() => {
              setEvents(events.filter(e => e.date !== clicked));
              setClicked(null);
            }}

          />
        }

      </Box>
    </Box>
  );
};
