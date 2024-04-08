import React from 'react'
import MultiLayerParallax from './MultilayerParallax'
import { Parallax } from "react-parallax";
import img1 from "./images/satellite_PNG11.png"
import img2 from "./images/demo.jpg"
import room1 from "./images/cave room.jpg"
import Navbar from './Navbar/Navbar';

const Park = () => {
    return (
        <>
            <Navbar />
            <MultiLayerParallax />
            <div className='h-[100vh] w-full bg-[#151515] text-white content-center'>
                <div className='flex gap-24 ml-[10vw]'>
                    <img className='h-[50vh] w-[40vw]' src={room1} alt="" />
                    <div className='w-[30vw]'>
                        <h2 className='text-4xl mb-2'>Your Den</h2>
                        <p className='h-[4px] w-[7vw] bg-orange-800 mb-7'></p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sed suscipit perspiciatis rem quidem explicabo eos amet modi quo sit totam iste error reprehenderit? Mollitia libero illo animi consectetur nam, rem deleniti praesentium! Dolores.</p>
                    </div>
                </div>
            </div>


            <Parallax className='relative h-[170vh] bg-cover bg-bottom' strength={600} bgImage="https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className="w-full h-[100vh] text-6xl text-white content-center left-[43%] absolute"> Sample Text
                    <img className='h-[20vh] w-auto top-[48%] left-[10%]' src={img1} alt="" />
                </div>

            </Parallax>
            {/* <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={img2}>
                <div className="w-full h-[100vh] bg-bottom bg-cover"></div>
            </Parallax> */}

        </>
    )
}

export default Park