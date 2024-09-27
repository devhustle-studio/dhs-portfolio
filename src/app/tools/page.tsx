"use client"
import { motion } from 'framer-motion';
import React from 'react'


const Tools = [
  {
    name:"Colors Palette",
    link:'/palette'
  },
  {
    name:"Name Generator",
    link:'/namegen'
  },
  {
    name:"Case Studies",
    link:'/casestudies'
  },
  {
    name:"Ideas",
    link:'/palette'
  },

];


export default function page() {
  return (
    <div className='pt-20 h-screen'>
    <h1 className=' flex justify-center items-center font-sat text-4xl'>Tools</h1>
      <div 
      
      className='flex justify-center flex-col md:flex-row   items-center pt-10 gap-y-8 md:gap-x-8 '>
          {Tools.map((item, index) => (
            <motion.div key={index}  whileHover={{ scale: 0.95, rotate: "-4deg" }} className='border-white border-2 rounded-xl cursor-pointer '>
              <motion.div 
            whileHover={{ scale: 0.95, rotate: "3deg" }}
            className='h-56 w-80 border-white border-2 rounded-xl hover:border-4 flex justify-center items-center'>
              <h1 className='font-gil text-2xl'>{item.name}</h1>
            </motion.div>
            </motion.div>
          ))}
      </div>
      <p className=' px-4 md:px-20 pt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia hic ratione adipisci atque obcaecati veritatis autem, maiores sequi reprehenderit unde a quod corporis mollitia officiis! Veritatis iste culpa sunt non.</p>
    </div>    
  )
}


