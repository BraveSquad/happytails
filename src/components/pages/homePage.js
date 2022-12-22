import React from 'react';
import Header from '../header/header';
import Search from '../search/search';
import Random from '../random/randAnimals';
import Banner from '../banner/banner';
import Video from '../banner/pictures';
import Footer from '../footer/footer';
import { Box } from '@mui/material';
import '../../assets/style/home.css'

export default function Home(props) {
  return (
    <Box sx={styles.mainBox}>
      <Header />
      <Search />
      <Random />
      <Video />
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


