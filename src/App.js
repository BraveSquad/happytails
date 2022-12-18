import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import ReviewUpdate from './components/review/updateReview'
import Details from './components/details/details'
//--------------------PAGES IMPORT------------------------//
import { Appointments } from './components/pages/appointments/appointments'
import Reviews from './components/pages/reviewPage'
import Profile from './components/pages/profilePage'
import About from './components/pages/aboutUsPage'
import Home from './components/pages/homePage'
import Animals from './components/pages/animalsPage';
import Welcome from './components/pages/welcomePage'
import InquiryPage from './components/pages/inquiryPage';
//-----------------SLICE IMPORT------------------------//
import { setFromMongo } from './features/favoriteSlice';
import { setAppointmets } from './features/calendarSlice';
import { setReviewsFromMongo } from './features/reviewSlice';


function App(props) {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    console.log('USE EFFECT WAS CALLED')
    setTimeout(() => {
      handleGetUser();
    }, 6000)
  }, [])


  const handleGetUserCalendar = async () => {
    if (props.auth0.isAuthenticated) {
      console.log('making an API call');
      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'GET',
        baseURL: process.env.REACT_APP_HEROKU_URL,
        url: '/calendar',
      };
      const reviewResponse = await axios(config);
      console.log('APPOINTMENTS from DB:: ', reviewResponse.data);
      dispatch(setAppointmets(reviewResponse.data))
    }
  };

  handleGetUserCalendar();


  let handleGetUser = async () => {
    // if (this.props.auth0.isAuthenticated) {

    const res = await props.auth0.getIdTokenClaims();
    // console.log('response from get user', res)
    const jwt = res.__raw;

    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'GET',
      baseURL: process.env.REACT_APP_HEROKU_URL,
      url: '/newUser',

    };
    await axios(config).then((rest) => {
      // console.log('rest response', rest.data[0].favorite)
      setNewUser(rest.data[0])

      dispatch(setFromMongo(rest.data[0].favorite))
    }).catch(err => console.log('error', err))
    // }
  };



  const handleAllReview = async () => {
    if (props.auth0.isAuthenticated) {
      console.log('making an API call');
      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'GET',
        baseURL: process.env.REACT_APP_HEROKU_URL,
        url: '/allReviews',
      };
      const reviewResponse = await axios(config);
      console.log('review from DB:: ', reviewResponse.data);
      dispatch(setReviewsFromMongo(reviewResponse.data))
    }
  };

  handleAllReview();

  let handlePostUser = async () => {
    const res = await props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'POST',
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      url: '/user',
      data: props.auth0
    };
    await axios(config).then((rest) => {
      console.log('resPost', rest)

    }).catch(err => console.log('error', err));



  }

  handlePostUser();


  const { isLoading } = props.auth0;
  if (isLoading) {
    return (
      <div >
        ...Loading App
      </div>
    );
  }


  const styles = {
    mainBox: {
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
  return (
    <Box sx={styles.mainBox} >
      <Router >
        {console.log('props in the App component yo!!', props)}
        <Routes>
          {!props.auth0.isAuthenticated ? (
            <Route exact path='/' element={<Welcome />} />
          ) : (
            <Route path='/' element={<Home />} />
          )
          }
          <Route exact path='/reviews' element={<Reviews auth0={props.auth0} user={newUser} />} />
          <Route exact path='/details' element={<Details auth0={props.auth0} user={newUser} />} />
          <Route exact path='/reviewUpdate' element={<ReviewUpdate />} />
          <Route exact path='/appointments' element={<Appointments auth0={props.auth0} user={newUser} />} />
          <Route exact path='/profile' element={<Profile auth0={props.auth0} user={newUser} />} />
          <Route exact path='/animals' element={<Animals auth0={props.auth0} user={newUser} />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/inquire' element={<InquiryPage />} />
        </Routes>
      </Router>
    </Box>
  );
}





export default withAuth0(App);