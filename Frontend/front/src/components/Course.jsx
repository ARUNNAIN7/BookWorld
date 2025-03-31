import React from 'react'
import Cards from './cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-16 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'> We'er delighted to have you <span className='text-pink-500'>Here</span></h1>
          <p className='pr-6 pl-6 mt-10'> here we have some very good books .Books from all over the world and from all renowned auther and poets 
            we have different books at different prices . They are mainly classified in to 4-5 categories liek 
            sports , poems , food , entertainment ,music etc 
            you can rent them as well but remember that there is alwas a fine for late return 
            you can read them online at lower prices. 
          </p>
          <Link to="/">
          <button className='  mt-4 bg-pink-500  text-white px-4 py-2 rounded-md hover:bg-pink-700  cursor-pointer duration-300'>Back</button>
        
          </Link>
          </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
             {
              list.map((item)=>(
                <Cards key={item.id} item={item} />
              ))
             }
          </div>   
      </div>
     
  
  </>
  )
}

export default Course
