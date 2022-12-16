import React from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';
import Review from '../review/reviews';
import { Box } from '@mui/material';

function ProfilePage(props) {
  console.log('porps in profile page', props)


  return (
    <Box sx={styles.mainBox}>
      <Header />
      <Review auth0={props.auth0} user={props.user} />
      <Footer />
    </Box>
  )
}

export default ProfilePage;

const styles = {
  mainBox: {
    width: '100%',
  }
}