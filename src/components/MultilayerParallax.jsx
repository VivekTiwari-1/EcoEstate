import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import person from "./images/person.png"
import mountain1 from "./images/mountain1.png"
import mountain2 from "./images/mountain2.png"
import mountain3 from "./images/mountain3.png"
import sky from "./images/sky.png"


export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "350%"]);
    const moun2 = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
    const moun3 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);


    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative"
        >
            {/* <motion.div
                style={{ y: navY }}
                className="fixed z-10 top-0 left-0"
            >
                <Navbar />
            </motion.div> */}
            <motion.h1
                style={{ y: textY, top: 'calc(50%)', textAlign: 'center' }}
                className="font-bold text-white text-5xl md:text-7xl relative z-[19]"
            >
                DISCOVER.
            </motion.h1>


            {/* <motion.div
                className="absolute bottom-[-100px]  z-0"
                style={{
                    backgroundImage: `url(${person})`,
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            /> */}
            <motion.div className="absolute right-0 bottom-[-100px] w-[1600px] z-[20]">
                <img className='bg-cover bg-bottom' src={mountain1} alt="img" />
            </motion.div>
            <motion.div className="absolute left-[-70px] bottom-[-100px] w-[750px] z-[21]" >
                <img className='bg-cover bg-bottom' src={person} alt="img" />
            </motion.div>
            <motion.div className="absolute left-[0px] bottom-[-100px] w-[1160px] z-[18]" style={{ y: moun2, }}>
                <img className='bg-cover bg-bottom' src={mountain2} alt="img" />
            </motion.div>
            <motion.div className="absolute right-0 bottom-[155px] w-[1100px] z-[17]" style={{ y: moun3, }}>
                <img className='bg-cover bg-bottom' src={mountain3} alt="img" />
            </motion.div>
            <div className="fixed right-0 bottom-[300px] w-[1560px] -z-10">
                <img className='bg-cover bg-bottom' src={sky} alt="img" />
            </div>
            <div className="absolute w-full bottom-0 z-[22] h-[300px]" style={{ background: 'linear-gradient(to top, #151515, transparent)' }}></div>
        </div >
    );
}