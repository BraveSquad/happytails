import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Storefront from '../storefront/storefront'
import '../../assets/style/home.css'

export default function home() {
  return (
    <div id='homeBox'>
      <Header />
      <Storefront />
      <Footer />
    </div>
  )
}
