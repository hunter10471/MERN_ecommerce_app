import React from 'react';
import Carousel from 'react-multi-carousel';


import {products} from '../data';
import { motion } from 'framer-motion';


import 'react-multi-carousel/lib/styles.css';

const responsive = {
  Bigdesktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeOut' } }}
      className=' w-full'
    >
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={5000}
        centerMode={false}
        className='z-[0]'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        responsive={responsive}
        showDots
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        {products.map((el, index) => {
          return (
            <div key={index} className='h-[70vh]'>
              <img
                src={el.img}
                className='absolute w-full -z-10 h-full object-cover'
                alt=''
              />
              <div className='flex flex-col h-full w-full bg-gradient-to-r from-secondary justify-center pl-5 md:pl-10  '>
                <h1 className=' text-2xl sm:text-3xl lg:text-5xl w-[80%] text-white font-bold font-heading my-1'>
                  {el.title}
                </h1>
                <span className='lg:text-lg sm:text-base text-sm w-[60%] text-white my-1'>
                  Get them now for 60% off on selected banks. <br />{' '}
                  <span className='font-light text-[8px] sm:text-xs '>
                    Terms and conditions apply.*{' '}
                  </span>{' '}
                </span>
                <span className='my-5'>
                  <button className='text-white font-medium text-[10px] md:text-xs lg:text-base px-2 md:px-4 py-2 mx-2 rounded-sm ring-2 ring-primary hover:ring-primaryLight hover:bg-primaryLight bg-primary'>
                    Add to cart
                  </button>
                  <button className='text-primaryLight font-medium text-[10px] md:text-xs lg:text-base px-2 md:px-4 py-2 mx-2 rounded-sm ring-primaryLight hover:ring-primary hover:text-primary ring-2'>
                    Add to wishlist
                  </button>
                </span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </motion.div>
  );
};
