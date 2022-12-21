import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
// import Details from './components/details/details'
//--------------------PAGES IMPORT------------------------//
import Reviews from './components/pages/reviewPage'
import Appointments from './components/pages/appointmentsPage'
import Profile from './components/pages/profilePage'
import About from './components/pages/aboutUsPage'
import Home from './components/pages/homePage'
import Animals from './components/pages/animalsPage';
import Welcome from './components/pages/welcomePage'
import InquiryPage from './components/pages/inquiryPage';
import Details from './components/pages/detailsPage';
//-----------------SLICE IMPORT------------------------//
import { setFromMongo } from './features/favoriteSlice';
import { setAppointments } from './features/calendarSlice';
import { GetPets } from './components/search/api';
import { setReviewsFromMongo } from './features/reviewSlice';
//-----------------LOADING------------------------//
import LoadingSpinner from './components/loading/loading';


function App(props) {
  const dispatch = useDispatch();
  const search = useSelector(state => state.animals.params);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    console.log('USE EFFECT WAS CALLED')
    handleGetPets();
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
      dispatch(setAppointments(reviewResponse.data))
    }
  };

  handleGetUserCalendar();

  const handleGetPets = () => {
    // dispatch(GetPets({ type: 'dog', breed: '', location: '98106', limit: 50, page: 1 }));
    dispatch(GetPets({ type: search.type, breed: search.breed, age: search.age, location: search.location, limit: search.limit, page: search.page}, dispatch));
  }

  let handleGetUser = async () => {

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
      <>
        <LoadingSpinner />
      </>
    );
  }
  return (
    <Box sx={styles.mainBox} >
      <Router >
        <Routes>
          {!props.auth0.isAuthenticated ? (
            <Route exact path='/' element={<Welcome />} />
          ) : (
            <Route path='/' element={<Home auth0={props.auth0} user={newUser} />} />
          )}
          <Route exact path='/reviews' element={<Reviews auth0={props.auth0} user={newUser} />} />
          <Route exact path='/details' element={<Details auth0={props.auth0} user={newUser} />} />
          <Route exact path='/appointments' element={<Appointments auth0={props.auth0} user={newUser} />} />
          <Route exact path='/profile' element={<Profile auth0={props.auth0} user={newUser} />} />
          <Route exact path='/animals' element={<Animals auth0={props.auth0} user={newUser} />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/inquire' element={<InquiryPage auth0={props.auth0} user={newUser} />} />
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