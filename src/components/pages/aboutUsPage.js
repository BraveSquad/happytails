import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import About from '../aboutUs/aboutus'
import { Box } from '@mui/material';


function AboutUsPage() {
  return (
    <Box sx={styles.mainBox}>
      <Header />
      <About />
      <Footer />
    </Box>
  )
}

export default AboutUsPage;
const styles = {
  mainBox: {
    width: '100%',
  }
}