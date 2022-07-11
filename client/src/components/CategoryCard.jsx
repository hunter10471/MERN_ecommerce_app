import React from 'react';


import { motion } from 'framer-motion';
import { LazyImage } from './LazyImage';



export const CategoryCard = ({ title, bgColor, img, desc, variants }) => { //eslint-disable-line
  return (
    <motion.section
      style={{ backgroundColor: `${bgColor}` }}
      className={`transition-all duration-200 hover:scale-[1.08] rounded-md text-secondary pb-4 flex-shrink-0 m-1 sm:m-4 shadow-xl `} //eslint-disable-line
    >
      <LazyImage
        classes='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]  md:w-[250px] md:h-[250px] rounded-md object-cover object-center '
        src={img}
      />
      <h1 className='flex my-2 items-center justify-center flex-col font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-wider w-full text-center'>
        <span className=' text-xs sm:text-sm font-light mb-2 '>{desc}</span>
        {title}
        <button className='bg-secondary hover:bg-secondaryLight transition-all text-xs sm:text-sm  text-primary w-[80%] py-2 mt-4'>
          Shop Now
        </button>
      </h1>
    </motion.section>
  );
};


