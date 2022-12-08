import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Storefront from '../storefront/storefront'

export default function home() {
  return (
    <div>
      <Header />
      <Storefront />
      <Footer />
    </div>
  )
}
