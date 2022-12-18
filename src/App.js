import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { withAuth0 } from '@auth0/auth0-react';
import Reviews from './components/pages/reviewPage'
import { Appointments } from './components/pages/appointments/appointments'
import Profile from './components/pages/profilePage'
import About from './components/pages/aboutUsPage'
import Home from './components/pages/homePage'
import Animals from './components/pages/animalsPage';
import Welcome from './components/pages/welcomePage'

import Details from  './components/pages/detailsPage';
import { postUser } from './features/userSlice'
import { setFromMongo } from './features/favoriteSlice';
import { getPets } from './components/search/api';
// import { getPetsAction }  from './features/action';
import { setReviewsFromMongo } from './features/reviewSlice';



function App(props) {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState('');
  // console.log('new user foo', newUser)

  useEffect(() => {
    handleGetPets();
    setTimeout(() => {
      handleGetUser();
    }, 3000)
  }, [])


  const handleGetPets = () => {
    dispatch(getPets({ type: 'dog', breed: '', location: '98106', limit: 100, page: 1 }));
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

      // console.log('token: ', jwt);

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
      // console.log('resPost', rest)

    }).catch(err => console.log('error', err));
  }

  handlePostUser();
  // console.log('user', this.state.newUser)
  const { isLoading } = props.auth0;
  if (isLoading) {
    return (
      <div >
        ...Loading App
      </div>
    );
  }
  return (
    <Box sx={styles.mainBox} >
      <Router >
        {/* {console.log('props in the App component yo!!', props)} */}
        {/* <Chat /> */}
        <Routes>
          {!props.auth0.isAuthenticated ? (
            <Route exact path='/' element={<Welcome />} />
          ) : (
            <Route path='/' element={<Home auth0={props.auth0} user={newUser}/>} />
          )
          }

          {console.log('user', newUser)}
          <Route exact path='/reviews' element={<Reviews auth0={props.auth0} user={newUser} />} />
          <Route exact path='/details' element={<Details />} />
          <Route exact path='/appointments' element={<Appointments />} />
          {/* <Route exact path='/history' element={<Favorite />} /> */}
          {/* <Route exact path='/schedule' element={<Schedule />} /> */}
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

const styles = {
  mainBox: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}