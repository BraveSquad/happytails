import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Details from './components/details/details'
import { withAuth0 } from '@auth0/auth0-react';
import Reviews from './components/review/reviews'
import { Appointments } from './components/pages/appointments/appointments'
import Profile from './components/pages/profilePage'
import About from './components/pages/aboutUsPage'
import Favorite from './components/favorite/favorite';
import Home from './components/pages/homePage'
import Animals from './components/pages/animalsPage';
import Welcome from './components/pages/welcomePage'
import InquiryPage from './components/pages/inquiryPage';
import { postUser } from './features/userSlice'
import { setFromMongo } from './features/favoriteSlice';


function App(props) {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState('');
  console.log('new user foo', newUser)

  useEffect(() => {
    // function getData() {
    console.log('USE EFFECT WAS CALLED')
    postUser('HEY')
    setTimeout(() => {
      handleGetUser();

    }, 3000)

    // }
    // getData()

  }, [])







  let handleGetUser = async () => {
    // if (this.props.auth0.isAuthenticated) {

    const res = await props.auth0.getIdTokenClaims();
    console.log('response from get user', res)
    const jwt = res.__raw;

    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'get',
      baseURL: process.env.REACT_APP_HEROKU_URL,
      url: '/newUser',

    };
    await axios(config).then((rest) => {
      console.log('rest response', rest.data[0].favorite)
      setNewUser(rest.data[0])

      dispatch(setFromMongo(rest.data[0].favorite))
    }).catch(err => console.log('error', err))
    // }
  };






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


  // console.log('user', this.state.newUser)
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
        {/* <Chat /> */}
        <Routes>
          {!props.auth0.isAuthenticated ? (
            <Route exact path='/' element={<Welcome />} />
          ) : (
            <Route path='/' element={<Home />} />
          )
          }

          {console.log('user', newUser)}
          <Route exact path='/review' element={<Reviews />} />
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