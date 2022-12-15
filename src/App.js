import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';
import Details from './components/details/details'
import { withAuth0 } from '@auth0/auth0-react';
// import Reviews from './components/reviews/reviews'
import { Appointments } from './components/pages/appointments/appointments'
import Profile from './components/profile/profile'
import About from './components/pages/aboutUsPage'
import Favorite from './components/favorite/favorite';
import Home from './components/pages/homePage'
import Animals from './components/pages/animalsPage';
import Welcome from './components/pages/welcomePage'
import InquiryPage from './components/pages/inquiryPage';
// import './App.css'

// import Chat from './components/chat/Chat';
// import Reviews from './components/review/reviews'

function App(props) {
  console.log('PROPPIES', props)





  let handleGetUser = async () => {

    // if (props.auth0.isAuthenticated) {
    const res = await props.auth0.getIdTokenClaims();
    console.log('res', res)
    const jwt = res.__raw;

    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'POST',
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      url: '/user',
      data: props.auth0
    };
    const rest = await axios(config);
    console.log('USER CONFIG', rest.data);
    // }
  };
  handleGetUser()
  return (
    <Box sx={styles.mainBox}>
      <Router >
        {console.log('props in the App component yo!!', props)}
        {/* <Chat /> */}
        <Routes>
          {!props.auth0.isAuthenticated ? (
            <Route exact path='/' element={<Welcome />} />
          ) : (
            <Route path='/' element={<Home />} />
          )
          }


          {/* <Route exact path='/review' element={<Reviews />} /> */}
          <Route exact path='/details' element={<Details />} />
          <Route exact path='/appointments' element={<Appointments />} />
          <Route exact path='/history' element={<Favorite />} />
          {/* <Route exact path='/schedule' element={<Schedule />} /> */}
          <Route exact path='/profile' element={<Profile auth0={props.auth0} />} />
          <Route exact path='/animals' element={<Animals />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/inquire' element={<InquiryPage />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default withAuth0(App);

const styles = {
  mainBox: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
