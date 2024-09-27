"use client"
import React from "react";
import { motion } from "framer-motion";

const DemoProducts = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-gil md:text-5xl text-zinc-200">
          Grow faster with our
          <span className="text-slate-400"> all in one solution</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-bold text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Mobile Apps</CardTitle>
          <div  style={{backgroundImage:"url('https://images.pexels.com/photos/25922242/pexels-photo-25922242.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&quot')"}}  className="absolute  bottom-0 left-4 right-4 top-20 bg-contain bg-no-repeat translate-y-8 rounded-t-2xl bg-black bg-center p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              {/* FEATURE DEMO HERE */}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Web Appliction</CardTitle>
          <div  style={{backgroundImage:"url('https://cdn.dribbble.com/userupload/16029201/file/original-9efacd28004fd30de255f1f7d5efbce1.png?resize=1024x768')"}} className="absolute bg-cover bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl  bg-amber-400 bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              {/* FEATURE DEMO HERE */}
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Graphic Design</CardTitle>
          <div style={{backgroundImage:"url('https://cdn.dribbble.com/userupload/15367671/file/original-221e46ae0f07e76a91b963cf5e872bc4.jpg?resize=1024x768')"}} className="absolute bottom-0  left-4 right-4 top-16 translate-y-8 rounded-t-2xl bg-emerald-400 bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              {/* FEATURE DEMO HERE */}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Marketing & Seo</CardTitle>
          <div style={{backgroundImage:"url('https://cdn.dribbble.com/userupload/15488505/file/original-46423da1c8db0f1fef7dd47e7c52b13a.jpg?resize=1024x560')"}}  className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-pink-400 bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              {/* FEATURE DEMO HERE */}
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

export default DemoProducts;


const BounceCard = ({ className, children }:any) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }:any) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold font-sat">{children}</h3>
  );
};