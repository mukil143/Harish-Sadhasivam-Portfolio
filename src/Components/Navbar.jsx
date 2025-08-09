import React from 'react'
import Logo from '../assets/HarishSadhasivamLogo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter,FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-14  flex items-center   justify-between  py-6'>
        <div className=" flex flex-shrink-0 items-center justify-center">
            <img   typeof='image/png' className="  w-12" src={Logo} alt="" />
        </div>
        <ul className=' my-8 text-white flex items-center justify-center gap-4 *:cursor-pointer text-2xl' >
          <li className=''><a target='_blank' href="https://www.linkedin.com/in/harish-s-066033179/"><FaLinkedin/></a></li>
          <li><a href="https://github.com/HarishSadhasivam"><FaGithub/></a></li>
          <li><a href=""></a> <FaInstagram/></li>
          <li> <a  href="mailto:erodeharish07@gmail.com?subject=Hello&body=Hi there!">
        <FaEnvelope  />
      </a></li>
        </ul>

    </nav>
  )
}

export default Navbar