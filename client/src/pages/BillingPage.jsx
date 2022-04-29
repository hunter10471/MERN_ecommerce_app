import React, { useEffect } from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';

export const BillingPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <div className='px-2 my-10'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-heading font-medium my-5 px-5 sm:mx-10 md:px-20'>Billing Info</h1>
        <div className='flex justify-around flex-col sm:flex-row '>
        <form className='w-full px-2 max-w-[1000px]  sm:mx-4 md:px-8 lg:px-12 xl:px-16'>
            <div className='flex w-full self-center my-5 flex-col'>
            <h2 className='text-base lg:text-lg font-medium mb-2'>Credit Card Info</h2>
            <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>credit card</label>
            <div className='flex'>
            <div className='flex w-full lg:flex-row flex-col'>
            <div className='flex w-full'>
             <span className='self-center rounded-l py-2 px-2 sm:px-4 border-2 border-r-0 text-slate-500 text-base '><CreditCardIcon fontSize='' /></span>
            <input type="text" className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[460px] sm:max-w-[800px]  text-sm lg:text-base focus:outline-none border-2' placeholder='Card number' />
            </div>
            <div className='flex my-4 lg:my-0'>
            <input className='border-2 mr-4 lg:mr-0 focus:outline-none transition-all duration-200 focus:border-blue-400 hover:border-blue-400 text-sm lg:text-base p-2 max-w-[100px]' placeholder='CVC' type="text" />
            <input className='border-2 lg:rounded-r focus:outline-none transition-all duration-200 focus:border-blue-400 hover:border-blue-400 text-sm lg:text-base p-2 max-w-[100px]' placeholder='MM/YY' type="text" />
            </div>
            </div>
            </div>
            </div>
            <div className='flex my-5 flex-col'>
            <h2 className='text-base lg:text-lg font-medium mt-10 mb-2'>Billing Details</h2>
            <div className='flex mb-2 lg:my-2 lg:flex-row flex-col '>
            <div className='flex w-full my-2 lg:my-0 lg:mr-4 flex-col'>
            <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>email</label>
            <input type="email" className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2' placeholder='Enter Email' />
            </div>
            <div className='flex w-full lg:ml-4 flex-col'>
            <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>company name</label>
            <input type="text" className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2' placeholder='Enter Company Name' />
            </div>
            </div>
            <div className='flex my-4 lg:my-2 lg:flex-row flex-col '>
            <div className='flex w-full my-2 lg:my-0 lg:mr-4 flex-col'>
            <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>vat number</label>
            <input type="text" className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2' placeholder='Enter VAT Number' />
            </div>
            <div className='flex w-full lg:ml-4 flex-col'>
            <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>billing address</label>
            <input type="address" className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2' placeholder='Enter Billing Address' />
            </div>
            </div>
            <div className='flex my-4 lg:my-2 lg:flex-row flex-col '>
            <div className='flex w-full my-2 lg:my-0 lg:mr-4 flex-col'>
            <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>zip code</label>
            <input type="text" className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2' placeholder='Enter ZIP Code' />
            </div>
            <div className='flex w-full lg:ml-4 flex-col'>
            <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>city</label>
            <input type="text" className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2' placeholder='Enter City' />
            </div>
            </div>
            <div className='flex w-full my-2 flex-col'>
            <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>country</label>
            <input type="text" className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2' placeholder='Enter Country' />
            </div>
            </div>
            <h2 className='text-sm md:text-base lg:text-lg font-medium mt-10 mb-4'>Delivery Details</h2>
            <input type="checkbox" name="address" checked className='w-[16px] mr-4 h-[16px]' id= "" />
            <span>Same as billing address</span>
            <button className='px-4 py-2 block my-10 border-2 font-medium hover:border-primaryLight hover:text-primaryLight text-primary border-primary text-sm sm:text-base w-[120px] transition-all rounded'>Save</button>
        </form>
        <div className='flex flex-col mx-auto sm:mx-10  lg:mr-5 my-10 lg:my-0 md:max-w-[300px] lg:max-w-[400px] w-[80%]'>
                <div className='flex flex-col p-4 lg:p-6 bg-gray-100'>
                    <h2 className='font-medium text-base md:text-lg lg:text-xl'>Order Summary</h2>
                    <span className='my-4 text-sm text-slate-400 flex justify-between'>Item(s) total <span className='text-black font-medium'>2</span> </span>
                    <span className=' text-slate-400 text-sm flex justify-between '>VAT (21%)  <span className='text-black font-medium'>+ $20</span></span>
                </div>
                <div className='flex flex-col p-4 lg:p-6  bg-gray-100 mt-2'>
                    <span className='mb-2 text-sm text-slate-400 flex'>Total Price </span>
                    <span className='font-medium text-sm flex items-center justify-between '>$80 <button className='py-2 px-6 text-sm sm:text-base transition-all duration-200 bg-primary hover:bg-primaryLight text-white rounded-sm'>Pay</button></span>
                </div>
            </div>
         </div>
        </div>
  )
}
