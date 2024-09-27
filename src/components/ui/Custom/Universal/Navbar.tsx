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
     <ul className={`fixed  flex  p-2  items-center md:rounded-br-xl  gap-x-2 md:justify-between w-full md:w-fit backdrop-blur-sm transition-transform duration-300 z-50 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`} >
        <div className=""><Tab><Link href={'/'}><Image src={'/2.png'} alt="logo" className="hover:brightness-100 md:ml-10 brightness-125" width={110} height={20} /></Link></Tab></div>
        <div className="flex">
        <Tab ><Link href={'/projects'}><h1 className="flex items-center  gap-x-1 font-sat hover:text-gray-400"><span><TiSocialInstagramCircular  className="block md:hidden" size={20} color="white" /> </span><span className="md:block hidden text-sm">Projects</span></h1></Link></Tab>
        <Tab ><Link href={'/blogs'}><h1 className="flex items-center gap-x-1 font-sat hover:text-gray-400"><span><TiNews className="block md:hidden" size={20} color="white" /> </span><span className="md:block hidden text-sm">Blogs</span></h1></Link></Tab>
        <Tab ><Link href={'/tools'}><h1 className="flex items-center gap-x-1 font-sat hover:text-gray-400"><span><TiScissors className="block md:hidden" size={20} color="white" /> </span><span className="md:block hidden text-sm">Tools</span></h1></Link></Tab>
        <Tab ><Link href={'/contact'}><h1 className="flex items-center self-end gap-x-1 font-sat hover:text-gray-400"><span><TiHeadphones className="block md:hidden" size={20} color="white" /> </span><span className="md:block hidden text-sm">Contact us</span></h1></Link></Tab>
        </div>
        </ul>
  );
};

const Tab = ({ children }: { children: any; }) => {

  return (
    <li
      className="relative z-10 block cursor-pointer  px-3 py-1.5 text-xs  text-white mix-blend-difference md:px-2 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

export default Navbar;