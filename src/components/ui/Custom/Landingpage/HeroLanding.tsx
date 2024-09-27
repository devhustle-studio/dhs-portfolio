"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { SiInstagram, SiWhatsapp } from "react-icons/si"
import Image from 'next/image';
import bgImg from "@/assets/diamonds_girl_art-wallpaper-1366x768.jpg"
import cole from "@/assets/Tube_Medium_Standing_1_0002.png"
import sip from "@/assets/Tube_Short_Standing_3_0001.png"


export default function HeroLanding() {
  return (
    <div
      className='flex flex-col items-center relative  mx-0 justify-center'  >
      <Image src={bgImg} alt='bg img ' height={2000} width={2000} />
      <div className='Text  absolute bg-gradient-to-r   px-4 py-4 md:p-10 backdrop-blur-sm to-red-600/50 from-sky-700/50  border-[0.2px] border-t-sky-400 border-l-sky-400 border-b-pink-400 border-r-pink-400 rounded-xl  '>
        <motion.h1 initial={{ opacity: 0, x: -43 }} animate={{ opacity: 1, x: 1 }} transition={{ type: "spring", bounce: 0.25 }} className=' font-gil drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]  font-outline-2 leading-none flex gap-1 text-center py-2  text-[1.8rem] md:text-[7rem]'> Dev <span className='text-white'>H</span>ustle <span className='text-white' >S</span>tudio</motion.h1>
        <motion.h1 className='font-thin font-sat text-[0.6rem] md:text-[1.6rem] flex text-center  leading-none drop-shadow-xl text-white  cursor-pointer'>Our mission is to make your brand shine in a crowded digital world.</motion.h1>
      <motion.div initial={{x:90}} animate={{x:-0,y:-20}} transition={{ type: "spring", bounce: 0.25 }}  className='absolute bottom-0 right-0'>
        <Image src={sip} alt='cole' height={280} width={320}  className='' />
      </motion.div>
      <motion.div initial={{x:90}} animate={{x:-100,y:-100}} transition={{ type: "spring", bounce: 0.25 }}   className='absolute top-0 left-0'>
        <Image src={cole} alt='cole' height={580} width={620}  className='' />
      </motion.div>
      </div>
      <div className='md:absolute md:block hidden bottom-4 left-0 bg-gradient-to-r px-1 py-4 w-96 backdrop-blur-sm rounded-r-xl border-2 border-t-sky-400  border-b-sky-400 border-r-sky-400 to-red-sky/50 from-blue-700/50 '>
        <h1 className='text-white font-sat flex mx-2   items-center gap-x-3' >
          <a href="" className='flex items-center gap-x-2 hover:text-gray-600'><SiInstagram size={27} /> DevHustle Studio </a>
          <a className='flex items-center gap-x-2 hover:text-gray-500' href=""><SiWhatsapp size={27} color='lime' /> +91 89388 50519</a>
        </h1>
      </div>
    </div>
  )
}

