import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';

export const Order = ({id,totalAmount,products,paymentStatus,shipmentStatus,address }) => {
  return (
    <div className='flex flex-col justify-between p-6 pl-0 border-b-2 border-primary max-w-[1000px] w-full'>
      <h1 className='font-heading font-bold lg:text-xl md:text-lg sm:text-base text-sm my-2 text-stone-800 whitespace-pre-wrap flex flex-wrap'>Order#<span>{id}</span></h1>
      <div className='my-10 flex flex-wrap gap-10'>
        <span className='flex flex-col items-center '>
          <LocalShippingIcon className={`${shipmentStatus === 'pending' ? 'text-stone-500' : 'text-green-600'}`} sx={{height:'40px', width:'40px'}} />
          <h3 className='lg:text-base text-center md:text-sm sm:text-xs text-[10px] capitalize font-bold text-stone-700'>Shipment Status: <span className={`font-bold ${shipmentStatus !== 'shipped' ? 'text-stone-500' : 'text-green-600'}`}>{shipmentStatus}</span></h3>
        </span>
        <span className='flex flex-col items-center'>
          <PaidIcon className={`${paymentStatus === 'pending' ? 'text-stone-500' : 'text-green-600'}`} sx={{height:'40px', width:'40px'}} />
          <h3 className='lg:text-base text-center md:text-sm sm:text-xs text-[10px] capitalize font-bold text-stone-700'>Payment Status: <span className={`font-bold ${paymentStatus === 'pending' ? 'text-stone-500' : 'text-green-600'}`}>{paymentStatus}</span></h3>
        </span>
      </div>
      <div className='flex flex-wrap justify-between items-start'>
      <div className='flex flex-wrap justify-center flex-col max-w-[800px]'>
      <h2 className='font-bold lg:text-xl md:text-lg sm:text-base text-sm text-stone-700'>Products:</h2>
      {
        products.map(el=>{
          return <div className='mt-4 flex items-center gap-4'>
              <img className='w-[90px] h-[90px] object-cover rounded-md' src={el.productImg} alt='product' />
              <div className='flex flex-wrap max-w-[200px]'>
              <h3 className='font-bold text-stone-700 m-1 lg:text-base sm:text-sm text-xs'>Name: <span className='font-bold text-stone-900 '>{el.productName}</span> </h3>
              <h3 className='font-bold text-stone-700 m-1 lg:text-base sm:text-sm text-xs'>Quantity: <span className='font-bold text-stone-900'>{el.quantity}</span> </h3>
              <h3 className='font-bold text-stone-700 m-1 lg:text-base sm:text-sm text-xs'>Price: <span className='font-bold text-stone-900'>${el.productPrice}</span> </h3>
              </div>
            </div>
        })
      }
      </div>
      </div>
      <h2 className='font-bold lg:text-xl md:text-lg sm:text-base text-sm text-stone-700 mt-5 text-right'>Total Amount: <span className='text-stone-900 font-heading font-bold lg:text-2xl sm:text-xl text-lg'> ${totalAmount}</span></h2>
    </div>
  )
}
