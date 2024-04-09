import React, { useState } from 'react'
import Button from '../Button'
import img1 from '../images/Eco-Friendly-Vector-Transparent.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [style, setStyle] = useState("bg-[rgba(1,1,1,0.4)] text-slate-300 flex justify-between items-center m-10 p-7 h-[10vh] w-[95vw] shadow-md shadow-grey absolute z-20");

    const handleScroll = () => {

        if (window.scrollY > 100) {
            setStyle("bg-[rgba(1,1,1,0.4)] flex justify-between items-center p-10 h-[10vh] w-full shadow-md shadow-grey fixed transition-[0.6s] z-20");
        }
        else {
            setStyle("bg-[rgba(1,1,1,0.4)] text-slate-300 flex justify-between items-center m-10 p-7 h-[10vh] w-[95vw] shadow-md shadow-grey absolute transition-[0.6s] z-20")
        }
    }

    window.addEventListener("scroll", handleScroll)
    return (
        <div className={style} onScroll={handleScroll} style={{ transition: '0.6s ease-in-out' }}>
            <div className='flex'>
                <img className='bg-cover h-10 w-10 mr-4' src={img1} alt="." />
                <p className='text-3xl text-[#00B98E]'>Eco Estate</p>
            </div>
            <div className="NavComponents flex justify-between items-center gap-10 font-large">
                <ul className="flex justify-between items-center gap-7 font-medium mr-7">
                    <li className='hover:text-[#00B98E] cursor-pointer'><Link to="/space">SPACE</Link></li>
                    <li className='hover:text-[#00B98E] cursor-pointer'>ABOUT</li>
                    <li className='hover:text-[#00B98E] cursor-pointer'>CONTACT</li>
                    <li className='hover:text-[#00B98E] cursor-pointer'><Link to="/park">PARKS</Link></li>
                </ul>
                {/* <Link className='park' to="/park"> <Button name="Click me" /></Link> */}
                <Link className='signin' to="/signin"> <Button name="Sign In" /></Link>
            </div>
        </div>
    )
}

export default Navbar