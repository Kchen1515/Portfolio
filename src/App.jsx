import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'

import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'


export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  )
}
