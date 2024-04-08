import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import img1 from '../images/Earth-From-Space-HD-Backgrounds.jpg'
import img2 from '../images/satellite_PNG11.png'
import Space2 from './Space2';


const Space = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "350%"]);
    const sat = useTransform(scrollYProgress, [0, 1], ["250%", "0%"]);

    return (
        <>
            <div ref={ref} className='w-full h-screen' >
                <div className='w-full h-screen '>
                    <img className='relative h-[100%] w-full' src={img1} alt="" />

                    <div className="h-[12vh] w-full fixed z-50 bg-[rgba(1,1,1,0.4)] top-0 flex items-center p-6">
                        <h2 className='text-slate-300 text-2xl ml-10'>SPACE VERSE</h2>
                        <div className="flex justify-between items-center text-slate-300 gap-10 text-[15px] ml-[50vw]">
                            <ul className="flex justify-between items-center gap-10 font-medium mr-7">
                                <li className='hover:text-[#4f60f8] cursor-pointer'>HOME</li>
                                <li className='hover:text-[#4f60f8] cursor-pointer'>ABOUT</li>
                                <li className='hover:text-[#4f60f8] cursor-pointer'>CONTACT</li>
                                <li className='hover:text-[#4f60f8] cursor-pointer'>INTERACT</li>
                            </ul>
                        </div>
                    </div>
                    <motion.h1
                        style={{ y: textY, top: 'calc(40% - 1rem)', textAlign: 'center' }}
                        className="font-bold text-white text-5xl md:text-7xl left-[30vw] absolute z-[19] tracking-wide"
                    >
                        DISCOVER.
                    </motion.h1>
                    <motion.div className="absolute top-[50%] w-[160px] z-20" style={{ x: sat, right: 'calc(60% - 5rem)' }}>
                        <img className='bg-cover bg-bottom' src={img2} alt="img" />
                    </motion.div>
                </div>
            </div>

            <Space2 />


        </>
    )
}

export default Space