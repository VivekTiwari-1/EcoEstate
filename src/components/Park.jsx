import React from 'react'
import MultiLayerParallax from './MultilayerParallax'
import { Parallax } from "react-parallax";
import img1 from "./images/dd.jpg"
import img2 from "./images/demo.jpg"
import room1 from "./images/cave room.jpg"

const Park = () => {
    return (
        <>
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

            {/*             
            <Parallax strength={600} bgImage={img1}>
                <div className="w-full h-[100vh] bg-bottom bg-cover"></div>
            </Parallax>
            <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={img2}>
                <div className="w-full h-[100vh] bg-bottom bg-cover"></div>
            </Parallax> */}

        </>
    )
}

export default Park