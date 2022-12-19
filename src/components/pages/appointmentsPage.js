import React from 'react'
import { Box } from '@mui/material';
import Header from '../header/header';
import { Appointments } from '../scheduling/appointments/appointments';
import Footer from '../footer/footer';

function DetailsPage(props) {
  return (
    <Box sx={styles.mainBox}>
      <Header />
      <Appointments auth0={props.auth0} user={props.user} />
      <Footer />
    </Box>
  )
}

export default DetailsPage;

const styles = {
  mainBox: {
    width: '100%',
  }
}