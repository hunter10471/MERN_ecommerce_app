import React from 'react';

export const ProductSpecs = ({productStock}) => { //eslint-disable-line
  return (
    <div>
      <h2 className='font-medium text-sm md:text-base lg:text-lg my-5'>Specifications</h2>
      <div className='flex justify-between font-medium tracking-wide text-xs md:text-sm my-10'>
        <span className='uppercase text-slate-400 '>size</span>
        <span>sm, md, lg, xl</span>
      </div>
      <div className='flex justify-between font-medium tracking-wide text-xs md:text-sm my-10'>
        <span className='uppercase text-slate-400 '>colors</span>
        <div>
          <input type="checkbox" name="green" className=' focus:border-green-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-green-500 ' id="" />
          <input type="checkbox" name="red" className='focus:border-red-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-red-500 ' id="" />
          <input type="checkbox" name="blue" className='focus:border-blue-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-blue-500 ' id="" />
          <input type="checkbox" name="black" className='focus:border-gray-800 cursor-pointer border-2 appearance-none rounded-[50%] p-2 sm:p-2 md:p-3 bg-gray-800 ' id="" />     </div>
      </div>
      <div className='flex justify-between font-medium tracking-wide text-xs md:text-sm my-10'>
        <span className='uppercase text-slate-400 '>in stock</span>
        <span>{productStock ? 'Yes' : 'No'}</span>
      </div>
    </div>
  );
};
