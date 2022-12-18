import React from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';
import Search from '../search/search';
import Banner from '../banner/banner'
import Animals from '../search/animals';
import { Box } from '@mui/material';

function AnimalsPage(props) {
  // console.log('props in animal page', props)
  return (
    <Box sx={styles.mainBox}>
      <Header />
      <Search />
      <Animals auth0={props.auth0} user={props.user} />
      <Banner />
      <Footer />
    </Box>
  )
}

export default AnimalsPage;

const styles = {
  mainBox: {
    width: '100%',
  }
}