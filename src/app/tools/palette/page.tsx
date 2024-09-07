"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function Page() {
    const constraintsRef = useRef(null)
    return (
    <>
      <div className="main bg-background h-screen ">
        <h1 className="text-center font-gil text-2xl mt-3">Brands Colors</h1>
        <h1 className="text-center text-xl font-light capitalize">make ours brands Colors</h1>
        <motion.div ref={constraintsRef} className="px-10 py-2 relative ">
                <motion.div drag  dragConstraints={constraintsRef} className="h-20 w-32 bg-pink-300 rounded-lg top-8  absolute"></motion.div>
                <motion.div drag dragConstraints={constraintsRef} className="h-20 w-32 bg-green-300 rounded-lg top-16 absolute"></motion.div>
                <motion.div drag dragConstraints={constraintsRef} className="h-20 w-32 bg-blue-300 rounded-lg top-24 absolute "></motion.div>
                <motion.div  drag dragConstraints={constraintsRef} className="h-20 w-32 bg-red-300 rounded-lg top-32 absolute "></motion.div>
        
        </motion.div>
        
      </div>
    </>
  )
}
