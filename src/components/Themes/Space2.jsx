import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import bgimage2 from '../images/nasa-Q1p7bh3SHj8-unsplash.jpg'
import planet2 from '../images/Planet-PNG-Clipart.png'
import bgimage from '../images/168595-space-stars.jpg'
import planet3 from '../images/planet3.png'
import planet4 from '../images/planet4.png'
import { Parallax } from 'react-parallax';
import { MdOutlineAirplaneTicket, MdOutlineSportsGymnastics } from "react-icons/md";
import { FaShuttleSpace } from "react-icons/fa6";
import { GiSpaceSuit } from "react-icons/gi";
import { SiSpacex } from "react-icons/si";
import { hover } from '@testing-library/user-event/dist/hover';

const Space2 = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "350%"]);
    const compY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
    const p1 = useTransform(scrollYProgress, [0, 1], ["210%", "0%"]);
    const p3 = useTransform(scrollYProgress, [0, 2], ["0%", "350%"]);
    const p4 = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

    return (
        <>
            <div ref={ref} className='h-[120vh] relative'>
                <div className='h-[30vh] w-full absolute z-40 ' style={{ background: 'linear-gradient(to bottom, black, transparent)' }}></div>
                <img className='h-[120vh] w-full' src={bgimage2} alt="" />
                <motion.div className="absolute z-[11]" style={{ y: textY, x: p4, top: 'calc(60% - 1rem)', right: 'calc(30% - 2rem)' }}>
                    <img className='h-[10vh] ' src={planet4} alt="" />
                </motion.div>

                <motion.div className='bg-transparent absolute z-50 text-white flex flex-col justify-center items-center pt-16 pl-44' style={{ y: compY, top: 'calc(25% - 1rem)' }}>
                    <h1 className='text-5xl mb-4'> Dream to Reality </h1>
                    <div className='h-[2px] w-[10vw] bg-blue-400 mb-16'></div>

                    <div className="flex justify-center items-center">

                        <div className="flex flex-col items-center">
                            <div className="h-[60px] w-[60px] bg-blue-700 rounded-full text-5xl flex justify-center items-center">
                                <SiSpacex />
                            </div>
                            <div className="h-[12vh] w-[4px] bg-blue-800"></div>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2 className='text-xl mb-2 '>Reserve Seat</h2>
                            <p className=' text-[10px] text-center tracking-widest w-[23vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sapiente laborum perferendis, aperiam est vitae rem optio corporis fuga voluptatum rerum  </p>
                            <button
                                type="button"
                                className="rounded-md border border-blue-600 px-3 py-1 text-[10px] font-medium tracking-wider text-blue-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 hover:bg-blue-600 hover:text-white mt-3 mb-3"
                            > Read More
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="h-[60px] w-[60px] bg-blue-700 rounded-full text-3xl flex justify-center items-center">
                                <MdOutlineSportsGymnastics />
                            </div>
                            <div className="h-[12vh] w-[4px] bg-blue-800"></div>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2 className='text-xl mb-2 '>Liftoff and Spaceflight</h2>
                            <p className=' text-[10px] text-center tracking-widest w-[23vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sapiente laborum perferendis, aperiam est vitae rem optio corporis fuga voluptatum rerum  </p>
                            <button
                                type="button"
                                className="rounded-md border border-blue-600 px-3 py-1 text-[10px] font-medium tracking-wider text-blue-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 hover:bg-blue-600 hover:text-white mt-3 mb-3"
                            > Read More
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="h-[60px] w-[60px] bg-blue-700 rounded-full text-3xl flex justify-center items-center">
                                <GiSpaceSuit />
                            </div>
                            <div className="h-[12vh] w-[4px] bg-blue-800"></div>
                        </div>
                    </div>

                    <div className="w-full bg-blue-800 flex justify-center text-1xl h-4"> </div>

                    <div className="flex justify-center items-center">

                        <div className="flex flex-col items-center"><h2 className='text-xl mt-4 mb-2 '>Choose Agency</h2>
                            <p className='text-[10px] text-center tracking-widest w-[23vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sapiente laborum perferendis, aperiam est vitae rem optio corporis fuga voluptatum rerum  </p>
                            <button
                                type="button"
                                className="rounded-md border border-blue-600 px-3 py-1 text-[10px] font-medium tracking-wider text-blue-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 hover:bg-blue-600 hover:text-white m-3"
                            >
                                Read More
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="h-[13vh] w-[4px] bg-blue-800"></div>
                            <div className="h-[60px] w-[60px] bg-blue-700 rounded-full text-3xl flex justify-center items-center"><MdOutlineAirplaneTicket /></div>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2 className='text-xl mt-4 mb-2 '>Training</h2>
                            <p className='text-[10px] text-center tracking-widest w-[23vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sapiente laborum perferendis, aperiam est vitae rem optio corporis fuga voluptatum rerum  </p>
                            <button
                                type="button"
                                className="rounded-md border border-blue-600 px-3 py-1 text-[10px] font-medium tracking-wider text-blue-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 hover:bg-blue-600 hover:text-white m-3"
                            >
                                Read More
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="h-[13vh] w-[4px] bg-blue-800"></div>
                            <div className="h-[60px] w-[60px] bg-blue-700 rounded-full text-3xl flex justify-center items-center">
                                <FaShuttleSpace />
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2 className='text-xl mt-4 mb-2 '>The Space Experience</h2>
                            <p className='text-[10px] text-center tracking-widest w-[23vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sapiente laborum perferendis, aperiam est vitae rem optio corporis fuga voluptatum rerum  </p>
                            <button
                                type="button"
                                className="rounded-md border border-blue-600 px-3 py-1 text-[10px] font-medium tracking-wider text-blue-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 hover:bg-blue-600 hover:text-white m-3"
                            >
                                Read More
                            </button>
                        </div>

                    </div>
                </motion.div>

            </div>

            <div className='relative h-[120vh]'>
                <div className='h-[30vh] w-full absolute z-40 ' style={{ background: 'linear-gradient(to bottom, black, transparent)' }}></div>
                <Parallax className='relative h-[120vh] bg-cover bg-bottom' strength={600} bgImage={bgimage}>


                    <motion.div className="absolute top-[40vh] z-10" style={{ x: p1, left: 'calc(70% - 5rem)' }}>
                        <img className='h-[20vh] ' src={planet2} alt="" />
                    </motion.div>
                    <motion.div className="absolute z-[10] -top-[10vh]" style={{ y: p3, right: 'calc(60% - 5rem)' }}>
                        <img className='h-[30vh] ' src={planet3} alt="" />
                    </motion.div>
                </Parallax>
            </div>
            <div className="h-[50vh] bg-black"></div>
        </>
    )
}

export default Space2