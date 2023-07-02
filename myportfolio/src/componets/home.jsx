import React from 'react'
import {HiArrowNarrowRight } from "react-icons/hi"
function Home() {
  return (
    <div name ="home" className='w-full h-screen bg-[#0a192f] text-gray-300 '>
        <div className='max-w-[950px] mx-auto flex flex-col justify-center h-full px-8  ' >
            <p className='text-pink-800'>Hi , My name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Fuzail khan</h1>
            <h2 className='text-4xl sm:text-7xl text-[#8892b0] font-bold'>
            I'm a ReactJs / JavaScript FrontEnd Developer.
            </h2>
            <p  className=' py-4 max-w-[600px] text-[#8892b0]'>
            I'm a FrontEnd Developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, i'm focused on
          building responsive Full-stack web applications
            </p>

            <div>
                <button  className='text-white flex items-center px-6 py-3 border-2 hover:bg-pink-600 hover:boder-x-pink-50 hover:animate-bounce '>
                    view work<span>

                        <HiArrowNarrowRight className='ml-3'/>
                        </span>
                </button>
            </div>

        </div>
      
    </div>
  )
}

export default Home;
