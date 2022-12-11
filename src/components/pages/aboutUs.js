import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import About from '../aboutUs/aboutus'
import '../../assets/style/home.css'


export default function about() {
  return (
    <div id='homeBox'>
      <Header />
      <About />
      <Footer />
    </div>
  )
}
