import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const CartList = ({product}) => {
    const [quantity, setQuantity] = useState(1)
  return (
    <table className='w-full lg:w-[700px] xl:w-[1000px]'>
        <tr className='text-xs md:text-sm lg:text-base text-slate-400 uppercase'>
            <th className='sm:p-4 font-[400] lg:p-6'>Product</th>
            <th className='sm:p-4 font-[400] lg:p-6'>Price</th>
            <th className='sm:p-4 font-[400] lg:p-6'>Quantity</th>
            <th className='sm:p-4 font-[400] lg:p-6'>Total</th>
        </tr>
        <tr>
            <td className='flex sm:p-4 lg:p-6 justify-center sm:flex-row flex-col items-center'><img className='rounded-[50%] object-cover w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' src="https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" alt="" />
            <div className='ml-4 flex flex-col font-medium text-sm md:text-base lg:text-lg '>
            Black Shirt
             <span className='text-slate-400 text-[10px] sm:text-xs md:text-sm'>SKU : 3XYUZY68MNAXX</span>
            </div>  
            </td>
            <td className='text-center text-sm md:text-base lg:text-lg sm:p-4 lg:p-6'>
                $40
            </td>
            <td className='p-6'>
            <span className='flex justify-between mx-auto items-center border-2 my-2 py-1 px-2 w-[80px] md:w-[100px] text-base lg:text-lg'>
                 <button disabled={quantity === 0} className='cursor-pointer disabled:text-slate-400 disabled:cursor-not-allowed' onClick={()=>setQuantity( quantity > 1 ? quantity-1 : 0)} > <RemoveIcon fontSize='' /></button>
                  {quantity}
                 <button className='cursor-pointer' onClick={()=>setQuantity(quantity+1)}><AddIcon  fontSize='' /></button>
                </span>
            </td>
            <td className='text-center text-sm md:text-base lg:text-lg sm:p-4 lg:p-6'>
                $40
            </td>
        </tr>


    </table>
  )
}
