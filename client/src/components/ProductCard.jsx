import React from 'react'
import Rating from '@mui/material/Rating';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';




export const ProductCard = ({img, discount, title, price, rating, shipping}) => {
  return (
    <div className='shadow-xl min-w-[120px] max-w-[320px] m-1 sm:m-2 md:m-4 flex-shrink-0 bg-white '>
        <img src={img} className='rounded-sm w-[150px] h-[140px] sm:h-[190px] sm:w-[190px] md:h-[250px] md:w-[250px] object-cover' alt="" />
        <div className='px-2 sm:px-4 md:px-6'>
        <div className='flex mt-2 pb-2 border-b-2 flex-col'>
            <h1 className='flex  text-secondary lg:text-2xl md:text-xl sm:text-lg text-base  '> <span className='mr-4'>{title}</span><span className=' ml-auto font-medium'>${price}</span></h1>
            <span className='text-slate-500 text-[10px] sm:text-xs md:text-sm tracking-wide mr-auto'>Outdoor grilling stove</span>
        </div>
        <div className='flex pt-2 flex-row sm:items-center '>
        <Rating name="half-rating" size='small' defaultValue={2.5} precision={0.5} readOnly />
        <span className='ml-1 sm:ml-2 md:text-sm text-xs text-primary font-medium'>
            2,224
        </span>
        </div>
        <span className='flex items-center my-2 md:text-sm text-xs text-slate-700'><LocalShippingIcon className='mr-1 sm:mr-2' fontSize='' /> Free shipping</span>
        </div>
        <button className='w-full font-heading border-2 bg-slate-800 hover:bg-slate-700 font-medium text-primary transition-all duration-200 py-2 lg:text-base md:text-sm text-xs '>VIEW DETAILS</button>
    </div>
  )
}
