import React from 'react'
import { Box } from '@mui/material';
import Header from '../header/header';
import Inquiry from '../inquiry/inquiry';
import Footer from '../footer/footer';

function InquiryPage(props) {
  return (
    <Box sx={styles.mainBox}>
      <Header />
      <Inquiry auth0={props.auth0} user={props.user} />
      <Footer />
    </Box>
  )
}

export default InquiryPage;

const styles = {
  mainBox: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    // border: '1px solid black',
  }
}