import React from 'react'

export const PolicyCard = ({img, title}) => {
  return (
    <div className='flex m-1 md:m-4 flex-col items-center'>
    <img className='w-[80px] sm:w-[100px] md:w-[125px] lg:w-[140px] my-2' src={img} alt="" />
    <h2 className='my-2 w-[80%] text-center text-sm sm:text-base md:text-lg lg:text-xl italic font-light p-4 border-b-2 border-primary'>{title}</h2>
  </div>
  )
}
