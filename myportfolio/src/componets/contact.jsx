import React from 'react'

function Contact() {
  return (
    <div name="contact" className=' flex justify-center w-full h-full bg-[#0a192f] py-8 pt-[12rem] pb-[12rem]  '>
      <form action="" className='flex flex-col  max-w-[600px] w-full px-4' >
        <div className='pb-8'>
            <p  className='text-gray-300 text-4xl inline border-b-4 border-pink-800 '>Contact</p>
            <p  className='text-gray-300 py-4'>Submit the form below or shoot me an email-fuzailkhanbt@gmail.com</p>
        </div>
        <input  className='bg-[#ccd6f6] py-2' type="text" placeholder='Name' name ="name"/>
        <input  className='bg-[#ccd6f6] py-2  my-4' type="email" placeholder='Email' name ="emial"/>
        <textarea className='bg-[#ccd6f6] py-2 ' placeholder='Message' name="Message" id=""  rows="10"></textarea>
        <button  className='px-4 py-3 flex items-center mx-auto  hover:border-pink-600 border-2 my-6 text-white rounded-lg '>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
