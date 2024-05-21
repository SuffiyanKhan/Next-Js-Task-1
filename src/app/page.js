import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Servicess from './Components/Serviceses/Servicess'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function Home() {
  return (
    <>
      <Navbar/>
      <About/>
      <Services/>
      <Servicess/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home