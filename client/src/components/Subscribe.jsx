import React from 'react';


import { SnackBar } from './SnackBar';


import EmailIcon from '@mui/icons-material/Email';

export const Subscribe = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='bg-blue-500 py-10 font-medium font-heading mt-10 flex flex-col items-center justify-center'
    >
      <h1 className='text-base md:text-xl lg:text-2xl text-white tracking-widest mt-10 mx-2 text-center'>
        Subscribe Our Newsletter & Join Us
      </h1>
      <span className='text-white font-light font-sans text-xs md:text-sm lg:text-base mb-5 mx-2 text-center w-[70%] '>
        Cart-it would love to send you news and their latest offers!
      </span>
      <div className='mb-10 mt-5 flex justify-center'>
        <span className='text-xl sm:text-2xl flex items-center px-2 md:px-4 py-2 text-blue-500 bg-white border-r-2 rounded-l'>
          <EmailIcon />
        </span>
        <input
          type='email'
          className='px-2 w-[50%] md:w-full md:px-4 py-2 text-xs md:text-sm lg:text-base hover:bg-slate-200 focus:outline-none placeholder:italic'
          placeholder='Enter your email here'
        />
        <SnackBar text='Thank you for subscribing'>
          {' '}
          <button className='hover:bg-blue-400 transition-all h-full text-sans border-white text-xs md:text-sm lg:text-base text-white border-2 px-2 md:px-4 py-2 rounded-r'>
            Subscribe
          </button>
        </SnackBar>
      </div>
    </form>
  );
};
