import React from 'react'
import Button from '../Button'
import img1 from '../images/Eco-Friendly-Vector-Transparent.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Container bg-[#a7abaa] flex justify-between items-center m-10 p-7 h-[10vh] w-[94vw] shadow-md shadow-grey relative z-10'>
            <div className='flex'>
                <img className='bg-cover h-10 w-10 mr-4' src={img1} alt="." />
                <p className='text-3xl text-[#00B98E]'>Eco Estate</p>
            </div>
            <div className="NavComponents flex justify-between items-center gap-10 font-large">
                <ul className="flex justify-between items-center gap-7 font-medium mr-7">
                    <li className='hover:text-[#00B98E] cursor-pointer'>HOME</li>
                    <li className='hover:text-[#00B98E] cursor-pointer'>ABOUT</li>
                    <li className='hover:text-[#00B98E] cursor-pointer'>CONTACT</li>
                </ul>
                <Link className='park' to="/park"> <Button name="Click me" /></Link>
            </div>
        </div>
    )
}

export default Navbar