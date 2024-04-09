import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import img1 from '../images/Earth-From-Space-HD-Backgrounds.jpg'
import img2 from '../images/satellite_PNG11.png'
import Space2 from './Space2';
import Font from 'react-font';
import vid1 from '../Videos/spaceStation.mp4'
import Particle from '../particles/Particle';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


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

            <Font family='Orbitron'>
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

                <div className='w-full h-screen'>
                    <h1 className='h-[22vh] ml-[18vw] mt-[34vh] w-[12vw] p-4 opacity-70 bg-white absolute z-30 mix-blend-screen ' >
                        <p className='text-white text-8xl font-extrabold mix-blend-difference'> Space Station</p>
                        <p className='text-white w-[25vw] p-4 text-[13px] tracking-widest leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam rerum temporibus. Facere, saepe. Dolor eius incidunt similique, porro a, recusandae nulla aspernatur modi molestias voluptatem fugit neque distinctio!</p>
                        <button
                            type="button"
                            className="rounded-md border border-slate-500 px-3 py-1 text-[13px] text-slate-500 font-medium tracking-wider hover:bg-opacity-70 hover:bg-white hover:text-black mt-2 ml-4"
                        > Read More
                        </button>
                    </h1>
                    <div className='h-screen w-full bg-[rgba(0,0,0,0.2)] absolute'>

                        <div className="h-[20vh] w-full" style={{ background: 'linear-gradient(to bottom, black, transparent)' }}></div>
                        <div className="h-[28vh] w-full mt-[52vh]" style={{ background: 'linear-gradient(to top, black, transparent)' }}></div>
                    </div>

                    <video src={vid1} autoPlay loop muted className='h-[100%] w-[100%] object-cover' />

                </div>

                <div className='footer h-[60vh] overflow-hidden w-full text-white relative '>
                    <Particle colour="white" className="absolute" />
                    <div className='h-[60vh] w-full relative z-10 flex justify-center items-center'>

                        <div className="Brand w-[35vw] items-center pl-7 text-4xl opacity-70 text-white">SPACE VERSE</div>

                        <div className='h-[34vh] w-[28vw] flex flex-col justify-center items-center tracking-[12px] border-l-2 border-r-2 border-slate-400 '>
                            <h4 className='text-[8px] opacity-70 text-white mb-4'>MADE BY</h4>
                            <h1 className='opacity-70 text-white text-3xl '>VIVEK<span className='text-sm'>TIWARI</span></h1>


                            <div className="socials text-[16px] text-slate-400 flex gap-7 mt-10 ml-7">
                                <div className="w-auto rounded-full cursor-pointer border-[2px] border-slate-400 hover:bg-slate-400 hover:text-black p-1">
                                    <FaLinkedinIn />
                                </div>
                                <div className="w-auto rounded-full cursor-pointer border-[2px] border-slate-400 hover:bg-slate-400 hover:text-black p-1">
                                    <FaGithub />
                                </div>
                                <div className="w-auto rounded-full cursor-pointer border-[2px] border-slate-400 hover:bg-slate-400 hover:text-black p-1">
                                    <FaXTwitter />
                                </div>
                                <div className="w-auto rounded-full cursor-pointer border-[2px] border-slate-400 hover:bg-slate-400 hover:text-black p-1">
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>

                        <div className="w-[30vw] flex flex-col justify-center items-center text-white">
                            <div className="Contact tracking-[2px] mb-8 mt-7">
                                <h1 className='text-xl mb-4 opacity-80'>Contact:</h1>

                                <p className=' flex gap-2 mb-2 opacity-65'>
                                    <IoCallOutline />
                                    <span className='text-[11px] '>+91 9508716073</span>
                                </p>
                                <p className=' flex gap-2 mb-2 opacity-65'>
                                    <MdEmail />
                                    <span className='text-[11px]'>vivektiwarii4545@gmail.com</span>
                                </p>
                            </div>
                            <div className="copyright text-xs tracking-wider mt-16 opacity-60">
                                Copyright &copy; 2024 Vivek Tiwari | All Rights Reserved.
                            </div>
                        </div>

                    </div>

                </div>
            </Font>
        </>
    )
}

export default Space