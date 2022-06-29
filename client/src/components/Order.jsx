import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const Order = ({id,totalAmount,products,paymentStatus,shipmentStatus }) => {
  return (
    <div className='p-4 m-2 shadow-md rounded-md'>
      <h1 className='font-heading font-bold lg:text-xl md:text-lg sm:text-base text-sm my-2 text-stone-800 whitespace-pre-wrap flex flex-wrap'>Order#<span>{id}</span></h1>
      <h2 className='font-medium lg:text-xl md:text-lg sm:text-base text-sm text-stone-700'>Products:</h2>
      <div className='flex flex-wrap items-center justify-between'>
      <div className='flex flex-wrap'>
      {
        products.map(el=>{
          return <div className='m-4 p-2'>
              <img className='w-[60px] h-[60px] object-cover rounded-md' src={el.productImg} alt='product' />
              <h3 className='font-medium text-stone-700 my-2 lg:text-base sm:text-sm text-xs'>Name: <span className='font-bold text-stone-900 '>{el.productName}</span> </h3>
              <h3 className='font-medium text-stone-700 my-2 lg:text-base sm:text-sm text-xs'>Quantity: <span className='font-bold text-stone-900'>{el.quantity}</span> </h3>
              <h3 className='font-medium text-stone-700 my-2 lg:text-base sm:text-sm text-xs'>Price: <span className='font-bold text-stone-900'>${el.productPrice}</span> </h3>
            </div>
        })
      }
      </div>
      <div className='m-2 p-4'>
        <span className='flex flex-col items-center'>
          <LocalShippingIcon className={`${shipmentStatus === 'pending' ? 'text-stone-500' : 'text-green-600'}`} sx={{height:'50px', width:'50px'}} />
          <h3 className='lg:text-xl capitalize font-medium text-stone-700'>Shipment Status: <span className='font-bold text-stone-900'>{shipmentStatus}</span></h3>
        </span>
      </div>
      </div>
      <h2 className='font-medium lg:text-xl md:text-lg sm:text-base text-sm text-stone-700'>Total Amount: <span className='text-stone-900 font-heading font-bold lg:text-2xl sm:text-xl text-lg'> ${totalAmount}</span></h2>
    </div>
  )
}
