import React from 'react'

function About() {
  return (
    <div className='h-screen w-full  bg-[#0a192f] text-gray-300 ' >
        <div className='h-full flex flex-col justify-center items-center '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-10 '>
                <div className=' text-right pb-8 pl-4' >
                    <p className='text-4xl font-bold inline  border-b-4 border-pink-800'>about</p>

                </div>
                <div className=''>

                </div>
            </div>

            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                <div className=' pl-4 sm:text-left text-4xl font-bold '>
                <p>Hi, I'm Fuzail Khan, nice to meet you. Please take a look around</p>
                </div>
                <div>
                <p>
              I am passionate about building excellent software that improves the lifes of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corportation. What would you do if you had a software expert available at your fingertips.
            </p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
