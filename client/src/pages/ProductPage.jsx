import React, { useState } from 'react'
import { ProductImgSlider } from '../components/ProductImgSlider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ProductPage = ({category}) => {
  const [quantity, setQuantity] = useState(1)
  return ( 
    <div className='px-2 flex justify-center items-center'>
      <div className='m-2 sm:m-5 md:m-10 lg:m-20 self-start '>
      <ProductImgSlider  />
      </div>
      <div className='m-2 sm:m-5 md:m-10 lg:m-20'>
          <span className='py-1 px-2 bg-gray-300 uppercase tracking-wide font-heading text-xs md:text-sm'>Clothing</span>
          <h1 className='my-4 text-xl md:text-2xl lg:text-3xl font-medium'>Black T-Shirts </h1>
            <span className='text-xs md:text-sm text-slate-400 uppercase my-2 tracking-wide'>SKU: 5446tux9zwec44542</span>
            <p className='max-w-[400px] my-5 text-slate-600 tracking-wide'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque suscipit necessitatibus rerum incidunt ea at qui magni eos ad, aut distinctio explicabo reiciendis laboriosam quos dolorum debitis voluptatum. Ipsum enim, eum accusamus saepe eveniet eaque cupiditate dolore quidem similique, fugiat excepturi. Non, ea? Illo expedita animi ipsa quo at?
            </p>
            <div className='flex justify-between items-center mt-10'>
              <div className='flex flex-col'>
                <span className='text-[10px] font-medium md:text-xs text-slate-400'>
                  QUANTITY
                </span>
                <span className='flex justify-between items-center border-2 my-2 py-1 px-2 w-[100px] text-sm md:text-base'>
                 <button disabled={quantity === 0} className='cursor-pointer disabled:text-slate-400 disabled:cursor-not-allowed' onClick={()=>setQuantity( quantity > 1 ? quantity-1 : 0)} > <RemoveIcon fontSize='' /></button>
                  {quantity}
                 <button className='cursor-pointer' onClick={()=>setQuantity(quantity+1)}><AddIcon  fontSize='' /></button>
                </span>
              </div>
              <span className='flex flex-col text-lg md:text-xl lg:text-2xl text-right'>
                $30
                <span className='text-xs text-slate-400 md:text-sm tracking-wide mt-1'>13% VAT included*</span>
              </span>
            </div>
            <button className='mt-8 mb-2 w-full text-xs md:text-sm lg:text-base transition-all hover:bg-primaryLight py-2 px-4 bg-primary rounded-sm font-medium text-white'>Add to Cart</button>
            <button className='mb-8 mt-2 w-full text-xs md:text-sm lg:text-base transition-all py-2 px-4 hover:border-primaryLight hover:text-primaryLight border-primary border-2 font-medium text-primary rounded-sm'>Checkout</button>
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
                <span>Yes</span>
              </div>
            </div>
      </div>
    </div>



    )
}
