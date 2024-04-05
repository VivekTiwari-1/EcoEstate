import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import img1 from "./images/image-bottom.png"
import img2 from "./images/image-full.png"
import Navbar from "./Navbar/Navbar";

export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const navY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center"
        >
            {/* <motion.div
                style={{ y: navY }}
                className="fixed z-10 top-0 left-0"
            >
                <Navbar />
            </motion.div> */}
            <motion.h1
                style={{ y: textY }}
                className="font-bold text-white text-7xl md:text-9xl relative z-10"
            >
                DISCOVER.
            </motion.h1>


            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${img2})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <div className="absolute inset-0 z-20">
                <img className='bg-cover bg-bottom' src={img1} alt="img" />
            </div>
        </div>
    );
}