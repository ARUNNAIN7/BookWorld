import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <>
    <div className='flex h-screen items-center justify-center '>
        <div className="border-[1px] rounded-md">
          <div className=" px-4 py-4 ">
            <form  onSubmit={handleSubmit(onSubmit)} method="div">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
                </button>
          
            <h3 className="font-bold text-lg">Signup</h3>
            {/* name */}
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input type="text" placeholder='Enter your fullname'
              className='w-80 px-3 py-1 border rounded-md outline-none'
              {...register("name", { required: true })}
              />
              <br />
               {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" placeholder='Enter your email'
              className='w-80 px-3 py-1 border rounded-md outline-none'
              {...register("email", { required: true })}
              />
              <br />
               {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="password" placeholder='Enter your password'
              className='w-80 px-3 py-1 border rounded-md outline-none ' 
              {...register("password", { required: true })}
              />
              <br />
               {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Button */}
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-200'>Signup</button>
              <p className='text-md'>
                Have account?{""}
                 <button
                  
                  className='underline text-blue-500 cursor-pointer'
                  onClick={()=>document.getElementById('my_modal_3').showModal()}>
                  login
                  </button>
                  <Login/>
              </p>
             
            </div>
            </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default Signup
