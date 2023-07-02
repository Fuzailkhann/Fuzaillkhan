import React from 'react'
import amazoneImage from "../assets/projects/amazon.png"
import LinkedInImage from "../assets/projects/Link.png"
import BudgetImage from "../assets/projects/bud.png"
import wheatherImage from "../assets/projects/wheather.png"
import Creditcard from "../assets/creditcard.png"


function Work() {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300   bg-[#0a192f]'>
        <div className=' max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full p-4 '>
            <div className='pb-8'>
                <p  className='text-4xl inline font-bold border-b-4 border-pink-800  '>work</p>
                <p className='py-5'>check out my some recent work</p>
            </div>

            <div className='grid sm:grid md:grid-cols-3 gap-3 '>
                <div style={{ backgroundImage: `url(${amazoneImage})`, backgroundSize: "370px 150px" ,  backgroundRepeat: "no-repeat"}}  className='content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center mx-auto '>
                    <div className='opacity-0  group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white'>
                            Reactjs Application <br/>
                            Amazone clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://amazoneclonereactjs.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                            </a>
                            <a href="https://github.com/Fuzailkhann/ReactRedux_amazoneSite">
                               <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div  style={{ backgroundImage: `url(${LinkedInImage})` , backgroundSize:"370px 120px "  , backgroundRepeat:"no-repeat" }}  className='content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center items-center mx-auto '>
                    <div className='opacity-0  group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black'>
                            Reactjs Aplication <br/>
                            LinkedIn Clone
                        </span>

                        <div>
                            <a  href="https://mylinkedinclonereactjs.netlify.app/">
                                <button className='bg-white text-gray-700 px-4 py-3 rounded-lg text-center m-3 text-lg font-bold'>Demo

                                </button>
                            </a>

                            <a href="https://github.com/Fuzailkhann/LinkedInclone_react/tree/main/linkedIn_reactjs">
                                <button className='bg-white text-gray-700 px-4 py-3 rounded-lg text-center m-3 text-lg font-bold' >Code

                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div  style = {{ backgroundImage: `url(${BudgetImage})` , backgroundSize:"200px 170px" , backgroundRepeat:"no-repeat" }}   className='content-div shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center items-center mx-auto '>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black'>
                            Reactjs App <br />
                            BudgetApp
                        </span>

                        <div>
                            <a href="https://646e0dd7283fc209435339b0--ubiquitous-platypus-d5968f.netlify.app/">
                                <button  className='px-4 py-3 bg-white text-gray-700 rounded-md m-3 font-bold text-lg '>
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/Fuzailkhann/BudgetApp_reactjs/tree/main/budget">
                                <button className='px-4 py-3 bg-white text-gray-700 font-bold  text-lg rounded-md m-3'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div  style={{backgroundImage: `url(${wheatherImage} )` , backgroundSize:'240px 150px' , backgroundRepeat:"no-repeat"}} className='content-div fit content shadow-lg shadow-[#040c16] group container rounded-md items-center flex justify-center items-center mx-auto' >
                    <div   className='opacity-0 group-hover:opacity-100'>
                        <span  className='text-2xl font-bold text-black'>
                            wheather web App <br />
                            Javascript
                        </span>

                        <div>
                            <a href="https://dulcet-lolly-3b6f75.netlify.app/">
                                <button className='px-4 py-3 text-gray-700 bg-white rounded-lg font-bold text-lg m-3' >Demo</button>
                            </a>
                            <a href="https://github.com/Fuzailkhann/FSJS2-Weather-Web-App"> 
                                <button className='px-4 py-3 rounded-lg text-gray-700 bg-white font-bold text-lg m-3' >Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundImage:`url(${Creditcard})` , backgroundSize:'240px 150px' , backgroundRepeat: "no-repeat" }} className=' content-div fit content shadow-lg shadow-[#040c16] flex justify-center items-center mx-auto group container rounded-md'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white'>
                            Credit Card <br/> Landing Page
                        </span>

                        <div>
                            <a href="https://github.com/Fuzailkhann/fsjs2-project2-Tailwind-creditCard-Landing-Page">
                                <button  className='px-4 py-3 text-gray-700 bg-white text-lg font-bold m-3 rounded-lg '>Code</button>
                            </a>
                            <a href="https://luminous-stroopwafel-9a6d60.netlify.app/">
                                <button className='px-4 py-3 text-gray-700 bg-white text-lg font-bold m-3 rounded-lg'>Link</button>
                            </a>
                        </div>

                    </div>
                </div>


            </div>

        </div>
      
    </div>
  )
}

export default Work
