import React, { useState } from 'react'
import img1 from './images/search1.png'
import img2 from './images/search.png'
import img3 from './images/contact.png'
import Dropdown from './Dropdown'
import Button from './Button'
import Navbar from './Navbar/Navbar'
import { Footer } from './Footer'
import styled, { keyframes } from 'styled-components'

const Images = keyframes`
0% {
    background-image: url('https://images.unsplash.com/photo-1584009577996-0227b2358356?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMCoxMDgwfGVufDB8fDB8fHww');
  }
  25% {
    background-image: url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTkyMCoxMDgwfGVufDB8fDB8fHww');
  }
  50% {
    background-image: url('https://images.unsplash.com/photo-1552872673-9b7b99711ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MTkyMCoxMDgwfGVufDB8fDB8fHww');
  }
  75% {
    background-image: url('https://images.unsplash.com/photo-1537563501248-1aa7e9a7372a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDE5MjAqMTA4MHxlbnwwfHwwfHx8MA%3D%3D');
  }
  100% {
    background-image: url('https://images.unsplash.com/photo-1465572089651-8fde36c892dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDE5MjAqMTA4MHxlbnwwfHwwfHx8MA%3D%3D');
  }
`;

const Background = styled.div`
    z-index: -1 !important;
    position: relative;
    overflow: hidden;
    top:0
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: ${Images} 10s infinite ease-in;
  `;


const LandingPage = () => {

    const [val, setVal] = useState("");

    return (
        <>
            <Navbar />

            <div className=" relative overflow-visible">
                <div className='h-[100vh] w-[100vw] relative' >
                    <div className="bg-[rgba(1,1,1,0.2)] absolute h-[100vh] w-full"></div>
                    <div className="bg-[rgba(1,1,1,0.4)] text-white absolute z-10 max-w-[40vw] max-h-[30vh] top-[37%] left-[37%] flex justify-center items-center flex-col gap-5 p-8">
                        <h1 className='text-5xl font-semibold'>Get Ready...</h1>
                        <h3 className='font-medium text-2xl'> To have some  | <span className='text-slate-500 text-xl'> Eye soothing visuals </span></h3>
                    </div>
                    <Background />
                </div>

                <div className="bg-[#b1e9dc] h-[15vh] w-[90vw] ml-12 pl-10 pr-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center absolute top-[92vh] shadow-xl">
                    <input type="text" value={val} onChange={(e) => setVal(e.target.value)} placeholder='Search Keyword' className='h-8 items-center rounded-sm' />
                    <Dropdown head="Location" content={["a", "b", "c"]} />
                    <Dropdown head="Property Type" content={["Hotels", "Eco Parks"]} />
                    <Button name="Search" />
                </div>

                <div className="EcoParks w-full">

                    <p className='text-gray-400 tracking-widest text-[15px] text-center mt-36 mb-2'>FIND YOUR DREAM STAY</p>
                    <h3 className="font-semibold text-gray-900 text-5xl text-center mt-5 mb-2">How It Works</h3>
                    <p className='bg-[#00B98E] h-[8px] w-[9vw] mb-16 ml-[44vw]'></p>
                    <div className="flex justify-center flex-col md:flex-row gap-20">
                        <div className="flex flex-col items-center w-[22vw]">
                            <img src={img1} alt="" />
                            <h4 className='text-2xl font-bold m-7'>Search Location</h4>
                            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, incidunt ipsam. Natus ipsa repudiandae reiciendis?</p>
                        </div>
                        <div className="flex flex-col items-center w-[22vw]">
                            <img src={img2} alt="" />
                            <h4 className='text-2xl font-bold m-7'>Choose Hotel</h4>
                            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, incidunt ipsam. Natus ipsa repudiandae reiciendis?</p>
                        </div>
                        <div className="flex flex-col items-center w-[22vw]">
                            <img src={img3} alt="" />
                            <h4 className='text-2xl font-bold m-7'>Book your place</h4>
                            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, incidunt ipsam. Natus ipsa repudiandae reiciendis?</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default LandingPage