import { Avatar } from '@mui/material';
import React from 'react'
import { Link } from 'react-scroll';
import { useState } from 'react';
import {FaBars,
     FaTimes ,
    FaLinkedin ,
    FaGithub} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"

import{BsFillPersonLinesFill} from "react-icons/bs"
import fuzail from  "../assets/fuzail.jpeg"


    
function Navbar() {
    const [nav , setNav ] = useState(false)
    const handleClick = () =>{
        setNav(!nav)

    }
  return (
    <div className='fixed px-6 w-full flex justify-between items-center h-[80px] bg-[#0a192f] text-gray-300 '>
        <div>
            <Avatar src={fuzail}></Avatar>
        </div>
        <div>
            <ul className='hidden md:flex gap-6  text-2xl' >
           
                <li  className='hover:text-blue-400 hover:animate-pulse'>
                    <Link
                    to="home"
                    smooth={true}
                    duration ={500}
                    >
                    Home
                    </Link>
                </li>
                <li  className='hover:text-blue-400 hover:animate-pulse'>
                    <Link
                    to="skills"
                    smooth={true}
                    duration ={500}
                    >
                    Skills
                    </Link>
                </li>
                <li className='hover:text-blue-400 hover:animate-pulse' >
                    <Link
                    to="work"
                    smooth={true}
                    duration ={500}
                    >
                    Work
                    </Link>
                </li>
                <li className='hover:text-blue-400 hover:animate-pulse' >
                    <Link
                    to="contact"
                    smooth={true}
                    duration ={500}
                    >
                    Contact
                    </Link>
                </li>
            </ul>
        </div>

            <div onClick={handleClick} className='md:hidden  z-10'>
                { !nav ? <FaBars />  : <FaTimes/>}

            </div>

            <ul
            className={
                !nav ? "hidden" : "absolute text-center left-0 top-10 w-full h-screen bg-[#0a192f] text-gray-300  "
            }
            
            >
                <li  className='py-6 text-4xl'>
                    <Link
                    onClick={handleClick}

                    to="home" 
                    smooth={true}
                    duration={500}
                    >
                    Home
                    </Link>
                </li>
                <li  className='py-6 text-4xl'>
               
                    <Link
                    onClick={handleClick}
                    to="home" 
                    smooth={true}
                    duration={500}
                    >
                    Skills
                    </Link>
                </li>
                <li   className='py-6 text-4xl'>
                    <Link
                    onClick={handleClick}
                    to="home" 
                    smooth={true}
                    duration={500}
                    >
                    Works
                    </Link>
                </li>
                <li   className='py-6 text-4xl'>
                    <Link
                    onClick={handleClick}
                    to="contacts" 
                    smooth={true}
                    duration={500}
                    >
                    Contacts
                    </Link>
                </li>
                

            </ul>

            <div  className='hidden md:flex flex-col fixed left-0 top-60 z-2 '>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-95px] bg-blue-500 hover:ml-[-10px] duration-300  '>
                        <a href=" https://www.linkedin.com/in/frontendwithfuzail/"
                        className='flex justify-center text-center items-center w-full text-gray-300 '>
                            LinkedIn  <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-95px]  hover:ml-[-10px] duration-300 bg-[#565f69] '>
                        <a
                        href='https://github.com/Fuzailkhann' className='flex justify-center items-center w-full '>
                            Github  <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a 
                        href='mailto: fuzailkhanbt@gmail.com'
                        target="_blank"
                        className='flex justify-center items-center w-full '>
                         Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-95px]  hover:ml-[-10px] duration-300 bg-[#565f69] '>
                        <a href=""
                        className='flex justify-center items-center w-full  '>
                         Resume  <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            
            </div>


            <div  className={ !nav ? "hidden " : " flex flex-col items-center fixed top-60 left-0"}>
               
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-95px] bg-blue-500 hover:ml-[-10px] duration-300  '>
                        <a
                        href='https://www.linkedin.com/in/frontendwithfuzail/' className='flex justify-center items-center w-full text-gray-300 '>
                            LinkedIn  <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-95px]  hover:ml-[-10px] duration-300 bg-[#565f69] '>
                        <a
                        href='https://github.com/Fuzailkhann' className='flex justify-center items-center w-full '>
                            Github  <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-95px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a 
                        href="mailto: fuzailkhanbt@gmail.com"
                        target="_blank"
                        
                        className='flex justify-center items-center w-full '>
                         Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-95px]  hover:ml-[-10px] duration-300 bg-[#565f69] '>
                        <a className='flex justify-center items-center w-full  '>
                         Resume  <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
      
    </div>
  )
}

export default Navbar;
