import React, { useState } from 'react'
import bgimage from './images/demo.jpg'
import img1 from './images/search1.png'
import img2 from './images/search.png'
import img3 from './images/contact.png'
import Dropdown from './Dropdown'
import Button from './Button'
import Navbar from './Navbar/Navbar'
import { Footer } from './Footer'

const LandingPage = () => {

    const [val, setVal] = useState("");


    return (
        <>
            <Navbar />

            <div className=" relative overflow-visible">

                <img className='bg-cover bg-center h-screen w-[100vw] brightness-50' src={bgimage} alt="img" />


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