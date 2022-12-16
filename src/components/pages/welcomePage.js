import React from 'react'
import { Box, CardMedia } from '@mui/material';
import { Image } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from '../login/login'
import Dog from '../../assets/images/dog.png'
import Video from '../../assets/images/DogVideo.mp4'
import '../../assets/style/welcome.css'

const Welcome = (props) => {
  const {
    isAuthenticated
  } = props.auth0;

  return (
    <>
      <video autoplay muted loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
      <Box className='content' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', }}>
        <Box sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '90px'
          , width: '50%'
        }}>
          {/* {console.log('PORPS IN WELCOME', props)} */}
          {isAuthenticated}
          <Box sx={{ fontSize: '60px', marginTop: '15px', marginLeft: '40px' }}> Welcome to HappyTails</Box>
          {/* <CardMedia image={Dog} sx={{ height: '500px', width: '50%', borderRadius: '4px', backgroundColor: 'red' }} /> */}
          {/* <Image src={Dog} className='myDog' /> */}
        </Box>



        <LoginButton />
      </Box>
    </>
  )
}
export default withAuth0(Welcome);
