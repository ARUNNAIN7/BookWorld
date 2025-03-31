import React from 'react'
import Navbar from '../components/navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
   
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-screen'>
      <Course></Course>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
