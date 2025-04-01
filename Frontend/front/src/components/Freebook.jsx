import React from 'react'
import { useState,useEffect } from 'react';
import Cards from "../components/cards"
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Freebook() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
  try {
    const res= await axios.get("http://localhost:4002/book");
    console.log(res.data);
    setBook(res.data.filter((data)=>data.category==="Free"));

  } catch (error) {
    console.log(error)
  }
 
    }
    getBook();
  },[])
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
       <div>
       <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>these are the books which you can get freely by just clicking on them, </p>
       </div>
    
    <div>
    <Slider {...settings}>
       {book.map((item)=>(
        <Cards item={item} key={item.id}></Cards>
       ))}
      </Slider>
 
    </div>
    </div>
    </>
  )
}

export default Freebook
