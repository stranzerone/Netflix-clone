import React from 'react'
import logo from "../assets/logo.png"
import { MdOutlineTranslate } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  return (
 <div className='bg-red w-full px-20 flex items-center  justify-between absolute' >
      
     <div className='bg-transparent'>
          <img src={logo} style={{width:"13vw"}}  alt='logo' />
      </div>

     <div> 
          <div className='flex gap-4'>
            <button className='border-2 py-0 font-bold gap-1 flex items-center justify-center border-white bg-transparent' >
       <span><MdOutlineTranslate /></span>   English
       <span><IoMdArrowDropdown /></span>

            </button>
            <div>
<button>Sign In</button>
            </div>
         </div>
     </div>


 </div>
  )
}

export default Navbar
