"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const cards = [
    {
        id:1,
        title:"",
        url:"https://cdn.dribbble.com/userupload/12895552/file/original-3b2d93ffc97b6ab7b8f20197abd2697c.png?resize=1024x768"
    },
    {
        id:2,
        title:" ",
        url:"https://cdn.dribbble.com/userupload/15925705/file/original-f37cd3255ca4cfeba085e1244b64f1d6.png?resize=1024x768"
    },
    {
        id:3,
        title:"",
        url:"https://cdn.dribbble.com/userupload/15448851/file/original-66498fddbff5c4cbdb4a2e71c9e6ee27.jpg?resize=1024x768"
    },
    {
        id:5,
        title:"",
        url:"https://cdn.dribbble.com/userupload/15210535/file/original-6c65c2a5818285cc8f525558ee9ed875.png?resize=1024x768"
    },
    {
        id:4,
        title:"",
        url:"https://cdn.dribbble.com/userupload/15069248/file/original-5b3557f4c763027705c4f3b7049e55e0.png?resize=1024x768"
    }
]
const Slider = () => {
  return (
    <div className="bg-background">
      <div className="flex h-20 items-center justify-center">
        <span className="font-semibold uppercase flex flex-col justify-center gap-3  items-center text-neutral-500">
          Scroll down
        <a className=" text-center m-0 animate-bounce "><FaAngleDoubleDown /></a>
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-20 items-center justify-center">
      <span className="font-semibold uppercase flex flex-col justify-center gap-3  items-center text-neutral-500">
          Scroll Up 
        <a className=" text-center m-0 animate-bounce "><FaAngleDoubleUp /></a>
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen  items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 md:gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }:any) => {
  return (
    <div
    
      key={card.id}
      className="group relative border-white border-2 rounded-xl h-[70vh] md:h-[90vh] w-[480px] md:w-[950px] scale-75  md:scale-100 overflow-hidden bg-neutral-800"
    >
      <div
        style={{
         backgroundImage: `url(${card.url})`
        }}
        className="absolute inset-0 z-0 transition-transform bg-cover duration-300 bg-center md:bg-top group-hover:scale-110"
      ></div>
      <div 
      
      className="absolute inset-0 z-10 grid place-content-center">
        <p className=" p-8 text-6xl font-black font-gil uppercase text-white ">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Slider;
