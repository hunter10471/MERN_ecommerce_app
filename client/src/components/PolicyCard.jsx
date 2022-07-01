import React from 'react';

export const PolicyCard = ({ img, title }) => { //eslint-disable-line
  return (
    <div className='flex m-1 md:m-4 flex-col items-center'>
      <img
        className='w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[130px] my-2'
        src={img}
        alt=''
      />
      <h2 className='my-2 w-[80%] text-center text-xs sm:text-base md:text-lg lg:text-xl italic font-light p-4 border-b-2 border-primary'>
        {title}
      </h2>
    </div>
  );
};
