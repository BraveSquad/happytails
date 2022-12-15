import React from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';
import Search from '../search/search';
import Banner from '../banner'
import Animals from '../search/animals';
import { Box } from '@mui/material';

function AnimalsPage() {
  return (
    <Box sx={styles.mainBox}>
      <Header />
      <Search />
      <Animals />
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