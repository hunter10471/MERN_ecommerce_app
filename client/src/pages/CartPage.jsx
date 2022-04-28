import React from 'react'
import { CartList } from '../components/CartList'

export const CartPage = () => {
  return (
    <div className='px-2 pr-4 my-10'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-medium my-5 px-5 sm:mx-10 md:px-20'>Cart</h1>
        <div className='flex justify-center flex-col lg:flex-row '>
        <div className='self-stretch sm:mx-4'>
            <CartList/>
        </div>
        <div className='flex flex-col my-10 lg:my-0 self-center max-w-[400px] w-[80%]'>
                <div className='flex flex-col p-4 lg:p-6 bg-gray-100'>
                    <h2 className='font-medium text-base md:text-lg lg:text-xl'>Order Summary</h2>
                    <span className='my-4 text-sm text-slate-400 flex justify-between'>Item(s) total <span className='text-black font-medium'>2</span> </span>
                    <span className=' text-slate-400 text-sm flex justify-between '>VAT (21%)  <span className='text-black font-medium'>+ $20</span></span>
                </div>
                <div className='flex flex-col p-4 lg:p-6  bg-gray-100 mt-2'>
                    <span className='mb-2 text-sm text-slate-400 flex justify-between'>Total Price <button className='py-2 px-6 transition-all bg-primary hover:bg-primaryLight text-white rounded-sm'>Checkout</button> </span>
                    <span className='font-medium text-sm flex justify-between '>$80</span>
                </div>
            </div>
        </div>
    </div>
  )
}
