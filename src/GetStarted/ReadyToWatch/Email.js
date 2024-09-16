import React from 'react'
import { MdNavigateNext } from "react-icons/md";
const Email = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[40vh]'>
      <h1>Ready to watch? Enter your email to create or restart your membership.</h1>
      <div className='gap-6 flex mt-4'>
        <input placeholder='Email address' className='text-gray-600 border-2 px-4 rounded-lg h-[60px] border-white bg-black w-[400px]' />
       <button className='flex items-center justify-center gap-3 text-xl'>Get Started <span ><MdNavigateNext /></span></button>
      </div>
    </div>
  )
}

export default Email
