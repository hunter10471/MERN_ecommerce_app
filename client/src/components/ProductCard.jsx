import React from 'react'

export const ProductCard = ({img, discount, title, price}) => {
  return (
    <div className='shadow-xl w-full sm:min-w-[200px] max-w-[320px] flex-grow-1 m-4 flex-shrink-0 bg-white '>
        <div className='relative '>
        <img src={img} className='w-full rounded-md h-[190px] sm:h-[220px] md:h-[250px] object-cover' alt="" />
        </div>
        <div className='flex my-4 flex-col'>
            <h1 className='flex  px-6 text-secondary font-medium lg:text-2xl md:text-xl sm:text-lg text-base  '> <span className='mr-4'>{title}</span><span className=' ml-auto text-primary'>${price}</span></h1>
            <span className='text-slate-500 text-[10px] sm:text-xs md:text-sm tracking-wide px-6 mr-auto'>Outdoor grilling stove</span>
        </div>
        <div className='px-6 my-2'>
            <h1 className='md:text-lg sm:text-base text-sm font-medium mb-1'>Sizes</h1>
            <div>
                <span className='text-xs md:text-sm text-slate-500 mr-2'>XL,</span>
                <span className='text-xs md:text-sm text-slate-500 mr-2'>LG,</span>
                <span className='text-xs md:text-sm text-slate-500 mr-2'>MD</span>
            </div>
        </div>
        <div className='px-6 my-2'>
            <h1 className='md:text-lg text-base font-medium mb-1'>Colors</h1>
            <div>
                <input type="checkbox" name="green" className=' focus:border-green-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-green-500 ' id="" />
                <input type="checkbox" name="red" className='focus:border-red-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-red-500 ' id="" />
                <input type="checkbox" name="blue" className='focus:border-blue-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-blue-500 ' id="" />
                <input type="checkbox" name="black" className='focus:border-gray-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-gray-800 ' id="" />
            </div>
        </div>
        <button className='w-full font-heading border-2 bg-slate-800 hover:bg-slate-700 font-medium text-primary transition-all duration-200 py-2 md:text-base text-sm '>VIEW DETAILS</button>
    </div>
  )
}
