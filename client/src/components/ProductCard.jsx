import React from 'react'
import Rating from '@mui/material/Rating';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'



export const ProductCard = ({img, discount, title, price, rating, category = [], id, variants}) => {
  return (
        <motion.div variants={variants} className='relative flex flex-col justify-between rounded-xl shadow-lg shadow-gray-400 m-4 min-h-[45vh] w-[40vw] sm:w-[30vw] md:w-[25vw] xl:w-[20vw] 2xl:w-[15vw] flex-shrink-0 bg-white '>
       <Link to={`/product?id=${id}`}>
        <span className={`items-center ${discount > 0 ? 'flex' : 'hidden'} justify-center font-medium text-sm absolute w-16 h-6 bg-yellow-400 `}>{discount} % Off</span>
        <img src={img} className='rounded-t-xl cursor-pointer h-[25vh] sm:h-[190px] md:h-[250px] w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[25vw] object-cover' alt="" />
       </Link>
        <div className='flex flex-col justify-between py-4 px-2 md:px-4 h-full'>
        <div className='flex border-b-2 flex-col '>
        <Link to={`/product?id=${id}`}> 
         <h1 className='flex sm:flex-row justify-between  flex-col lg:text-2xl md:text-xl sm:text-lg text-base'> 
        <span className='mr-2 hover:text-gray-600 hover:cursor-pointer tracking-tight '>{title}</span>
        <span className='flex flex-col justify-end  sm:ml-auto font-[500] text-primary text-right'>
          <span> ${discount ? price - (price * discount) / 100 : price} </span> 
          <span className='line-through decoration-[2px]  font-[400] text-xs sm:text-sm md:text-base lg:text-lg text-right text-stone-700'>${price}</span>
          </span>
          </h1> 
          </Link>
            <span className='text-slate-500 text-[10px] sm:text-xs md:text-sm tracking-wide mr-auto capitalize '>{category.join(', ')}</span>
        </div>
        <div className='flex pt-2 flex-col sm:flex-row sm:items-center '>
        <Rating name="half-rating" size='small' defaultValue={2.5} precision={0.5} readOnly />
        <span className='ml-1 sm:ml-2 md:text-sm text-xs text-primary font-medium'>
            2,224
        </span>
        </div>
        <span className='flex items-center my-2 md:text-sm text-xs text-gray-500'><LocalShippingIcon className='mr-1 sm:mr-2' fontSize='' /> Free shipping</span>
        </div>
    </motion.div>
  )
}
