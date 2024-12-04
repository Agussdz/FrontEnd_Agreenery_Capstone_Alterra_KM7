import React from 'react'
import logo from '../assets/logo-white.png';

const Navbar = () => {
  return (
    <>
        <nav className='bg-primary-400'>
            <div className='flex justify-between h-[80px] items-center py-1 mx-4 lg:mx-20'>
                <div className="flex items-center h-[70px]">
                    <img src={logo} alt="agreneery" className="h-[200px]" />
                </div>

                <div className='flex gap-12 ml-96'>
                    <a href="#home" className="text-neutral-100 font-roboto-400">Home</a>
                    <a href="#feature" className="text-neutral-100 font-roboto-400">Feature</a>
                    <a href="#about" className="text-neutral-100 font-roboto-400">About Us</a>
                    <a href="#testimonies" className="text-neutral-100 font-roboto-400">Testimonies</a> 
                </div>

                <div className="flex items-center ">
                    <a href="/signup" className="text-neutral-100 font-roboto-500 bg-secondary-400 px-11 py-2 rounded-md hover:bg-secondary-300 transition-colors duration-500">Sign Up</a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar