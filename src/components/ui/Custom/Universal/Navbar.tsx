"use client"
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { TiHeadphones, TiHome, TiNews, TiScissors, TiSocialInstagramCircular, TiSupport } from "react-icons/ti";
import { FaHeadSideVirus } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return <SlideTabs />
};

const SlideTabs = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
  <div >
    
     <ul className={`fixed top-0 left-0 flex right-0 p-2 justify-center items-center  gap-x-2 md:justify-center border-b bg-gray-100/50 dark:bg-gray-950/50 backdrop-blur-sm transition-transform duration-300 z-50 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`} >
        <Tab><Link href={'/'}><Image src={'/7.png'} alt="logo" className="hover:brightness-100 brightness-125" width={80} height={80} /></Link></Tab>
        <Tab ><Link href={'/projects'}><h1 className="flex items-center  gap-x-1 font-sat hover:text-gray-400"><span><TiSocialInstagramCircular size={20} color="white" /> </span><span className="md:block hidden text-sm">Projects</span></h1></Link></Tab>
        <Tab ><Link href={'/blogs'}><h1 className="flex items-center gap-x-1 font-sat hover:text-gray-400"><span><TiNews size={20} color="white" /> </span><span className="md:block hidden text-sm">Blogs</span></h1></Link></Tab>
        <Tab ><Link href={'/tools'}><h1 className="flex items-center gap-x-1 font-sat hover:text-gray-400"><span><TiScissors size={20} color="white" /> </span><span className="md:block hidden text-sm">Tools</span></h1></Link></Tab>
        <Tab ><Link href={'/contact'}><h1 className="flex items-center self-end gap-x-1 font-sat hover:text-gray-400"><span><TiHeadphones size={20} color="white" /> </span><span className="md:block hidden text-sm">Contact us</span></h1></Link></Tab>
      </ul>
      
  </div>
  );
};

const Tab = ({ children }: { children: any; }) => {

  return (
    <li
      className="relative z-10 block cursor-pointer  px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-2 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

export default Navbar;