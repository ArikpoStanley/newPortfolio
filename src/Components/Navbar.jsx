"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegWindowClose, FaAlignJustify, FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-screen fixed shadow-sm shadow-white z-20 bg-gray-800">
      <div className="flex justify-between items-center py-2 px-4 lg:px-4">
        {/* Logo */}
        <div>
          <img src={"/Logo.png"} alt="Logo" className="w-[30px] bg-white bg-transparent" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-row text-white justify-between space-x-[350px]">
          <ul className="flex gap-4 text-[18px] font-bold">
            <Link href="#hero"><li className="hover:text-[#3A0879] cursor-pointer">Home</li></Link>
            <Link href="#project"><li className="hover:text-[#3A0879] cursor-pointer">Projects</li></Link>
            <Link href="#skill"><li className="hover:text-[#3A0879] cursor-pointer">Skills</li></Link>
            <Link href="#contact"><li className="hover:text-[#3A0879] cursor-pointer">Contact</li></Link>
          </ul>
          <div className="social-icons flex flex-row ml-60 justify-between space-x-2">
            <a href="https://facebook.com/ExcellenceJnr" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2"><FaFacebook /></a>
            <a href="https://github.com/stanley-samuel123" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2"><FaGithub /></a>
            <a href="https://linkedin.com/in/stanley-samuel-8baa38277" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2"><FaLinkedin /></a>
            <a href="https://instagram.com/stanleysamuel70" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 rounded-full hover:animate-bounce border-purple-600 p-2"><FaInstagram /></a>
            <a href="https://wa.me/message/JFS322SF713HKI" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Desktop "Let's Connect" Button */}
        <div className="hidden lg:flex">
          <Link href="#contact">
            <button className="border-[1px] ml-4 w-[130px] h-[35px] hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent rounded-md text-white font-semibold hover:animate-bounce">
              Let's Connect
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex lg:hidden visible">
          <FaAlignJustify size={30} className="text-white cursor-pointer" onClick={() => setMenuOpen(true)} />
        </div>
      </div>

      {/* Mobile Menu - Sliding in from the right */}
      {menuOpen && (
        <>
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>

          {/* Slide-in Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-[70%] rounded-tl-[30px] bg-[url('/site-bg.jpg')] z-50 shadow-lg flex flex-col items-center py-8"
          >
            {/* Close Button */}
            <FaRegWindowClose
              size={35}
              className="text-white absolute top-4 right-4 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />

            {/* Navigation Links */}
            <ul className="flex flex-col items-center w-full gap-8 text-lg font-bold text-white">
              <Link href="#hero"><li className="hover:text-[#3A0879] cursor-pointer">Home</li></Link>
              <Link href="#project"><li className="hover:text-[#3A0879] cursor-pointer">Projects</li></Link>
              <Link href="#skill"><li className="hover:text-[#3A0879] cursor-pointer">Skills</li></Link>
              <Link href="#contact"><li className="hover:text-[#3A0879] cursor-pointer">Contact</li></Link>
            </ul>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Navbar;
