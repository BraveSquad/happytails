import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './components/pages/homePage'
import Animals from './components/pages/animalsPage';
import Details from './components/details/details'

// import Reviews from './components/reviews/reviews'
import { Appointments } from './components/pages/appointments/appointments'
import Profile from './components/profile/profile'
import Welcome from './components/pages/welcomePage'
import About from './components/aboutUs/aboutus'
import InquiryPage from './components/pages/inquiryPage';

import Favorite from './components/favorite/favorite';
// import './App.css'

// import Chat from './components/chat/Chat';
// import Reviews from './components/review/reviews'

function App() {
  return (
    <Box sx={styles.mainBox}>
      <Router >
        {/* <Chat /> */}
        <Routes>
          <Route exact path='/welcome' element={<Welcome />} />
          <Route path='/' element={<Home />} />
          {/* <Route exact path='/review' element={<Reviews />} /> */}
          <Route exact path='/details' element={<Details />} />
          <Route exact path='/appointments' element={<Appointments />} />
          <Route exact path='/history' element={<Favorite />} />
          {/* <Route exact path='/schedule' element={<Schedule />} /> */}
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/animals' element={<Animals />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/inquire' element={<InquiryPage />} />

        </Routes>
      </Router>
    </Box>
  );
}

export default App;

const styles  = {
  mainBox: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
