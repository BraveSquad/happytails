import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Storefront from '../storefront/storefront'
import Banner from '../banner/';
import '../../assets/style/home.css'

export default function Home() {
  return (
    <div id='homeBox'>
      <Header />
      <Storefront />
      <Banner />
      <Footer />
    </div>
  )
}
