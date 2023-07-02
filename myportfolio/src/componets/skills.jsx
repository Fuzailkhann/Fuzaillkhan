import React from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import Reactimg from "../assets/react.png"
import Nodejs from "../assets/node.png"
import Github from "../assets/github.png"
import Firebase from "../assets/firebase.png"
import Typescript from "../assets/Typescript.png"
import Express from "../assets/Express.png"
import Tailwind from "../assets/tailwind.png"
function Skills() {
  return (
    <div name="skills" className='w-full md:h-screen  bg-[#0a192f] text-gray-300'>
        <div  className='mx-w-[1000px] mx-auto w-full py-4  h-full flex flex-col justify-center items-center '>
            <div>
                <p className='text-4xl py-4 font-bold inline border-b-4 border-pink-800 '>Skills</p>
                <p className='py-9'>These are the technologies i've grinded into</p>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={Typescript} alt="" />
                <p className='font-bold py-6'>Typescript</p>

               </div>
                <div  className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="" />
                    <p className='font-bold py-6'>Javascript</p>

                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactimg} alt="" />
                    <p className='font-bold py-6'>Reactjs</p>
                </div>

               

                <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Nodejs} alt="" /> 
                    <p className='font-bold py-6'>Node.js</p>             
               </div>

              
               
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={Express} alt="" />
                <p className='font-bold py-6'>Express.js</p>
             
               </div>
               <div  className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto'  src={Firebase}/>
                <p className='font-bold py-6'>Firebase</p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="" />
                    <p className='font-bold py-6' >GITHUB</p>
                </div>

               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={Tailwind} alt="" />
                <p className='font-bold py-6'>Tailwind CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto  ' src={HTML} alt="" />
                    <p className='font-bold my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="" />
                    <p className='font-bold my-4'>CSS</p>
                </div>
            </div>   
               
            
               

               

        

        </div>
      
    </div>
  )
}

export default Skills
