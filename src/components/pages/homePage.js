import React from 'react';
import Header from '../header/header';
import Search from '../search/search';
import Banner from '../banner';
import Footer from '../footer/footer';
import { Box } from '@mui/material';
import '../../assets/style/home.css'

export default function Home() {
  return (
    <Box sx={styles.mainBox}>
      <Header />
      <Search />
      <Banner />
      <Footer />
    </Box>
  )
}

const styles = {
  mainBox: {
    width: '100%',
  },
}


