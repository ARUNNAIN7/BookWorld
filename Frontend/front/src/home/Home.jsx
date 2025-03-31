import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
function Home() {
  return (
    <div>
      <Navbar/>
    <Banner></Banner>
    <Freebook/>
    <Footer></Footer>

    </div>
  )
}

export default Home
