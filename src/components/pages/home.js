import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Storefront from '../storefront/storefront'
import { Box } from '@mui/material';

import Banner from '../banner/';
import '../../assets/style/home.css'

export default function Home() {
  return (
    <Box id='homeBox'>
      <Header />
      <Storefront />
      <Banner />
      <Footer />
    </Box>
  )
}
