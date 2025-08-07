import React from 'react'
import Logo from '../assets/HarishSadhasivamLogo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-14  flex items-center   justify-between  py-6'>
        <div className=" flex flex-shrink-0 items-center justify-center">
            <img   typeof='image/png' className="  w-12" src={Logo} alt="" />
        </div>
        <ul className=' my-8 text-white flex items-center justify-center gap-4 text-2xl' >
          <li className=''><FaLinkedin/></li>
          <li><FaGithub/></li>
          <li> <FaInstagram/></li>
          <li> <FaTwitter/></li>
        </ul>

    </nav>
  )
}

export default Navbar