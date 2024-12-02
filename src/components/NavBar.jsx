
import React, {useState} from 'react'
import {Link } from 'react-router-dom';
import "@fontsource/poppins"; // Defaults to 400 weight

const navbar = () => {
  return (
    <div className='sticky top-0 z-20 flex justify-between items-center h-20 mx-auto px-4 pb-2 bg-black font-poppins rounded-b-lg'>
        <Link to='Home'><h1 className='text-white font-bold text-4xl w-full hover:text-[#e0ff30]'>Nike</h1></Link>

        <ul className='flex flex-row p-4 space-x-4 text-white font-medium'>
            <li className='hover:text-[#e0ff30]'><Link to='Home'>Home</Link></li>
            <li className='hover:text-[#e0ff30]'><Link to='Product'>Product</Link></li>
            <li className='hover:text-[#e0ff30]'><Link to='About'>About</Link></li>
        </ul>
    </div>
  )
}

export default navbar