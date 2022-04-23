import Countdown from 'react-countdown'
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';

export const CategoryCard = ({title, sale, categories}) => {

  return (
    <div className=' rounded-md odd:bg-primary even:bg-gray-100 flex-shrink-0 mx-auto my-5 odd:text-white p-2 w-fit'>
      <h1 className='m-4 mb-2 text-2xl md:text-3xl font-heading font-medium flex items-center'>
        Clothing
        <span className='text-sm sm:text-md font-sans font-thin w-full text-right'> <DiscountOutlinedIcon fontSize='' /> Sale ending in  <b  className='text-secondary font-bold'> <Countdown date={Date.now() + 2000000000} /></b></span>
      </h1>
      <div className='flex max-w-[90vw] sm:max-w-[400px] flex-wrap items-center justify-center'>
      <div className='flex-shrink-0 w-[90vw] sm:w-auto hover:underline underline-offset-4 flex flex-col items-center mx-4 my-2 cursor-pointer'>
        <img className=' w-[80vw] h-[200px] sm:w-[120px] sm:h-[120px] object-cover' src="https://images.unsplash.com/photo-1593821684772-6865bb9413a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=mat&fit=crop&w=735&q=80" alt="" />
        <span className='text-lg my-2'> Women</span>
      </div>
      <div className='flex-shrink-0 hover:underline underline-offset-4 flex flex-col items-center mx-4 my-2 cursor-pointer'>
        <img className=' w-[80vw] h-[200px] sm:w-[120px] sm:h-[120px] object-cover' src="https://images.unsplash.com/photo-1551860863-d98db3dbbee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=mat&fit=crop&w=1170&q=80" alt="" />
        <span className='text-lg my-2'> Men</span>
      </div>
      <div className='flex-shrink-0 hover:underline underline-offset-4 hidden sm:flex flex-col items-center mx-4 my-2 cursor-pointer'>
        <img className='w-[80vw] h-[200px] sm:w-[120px] sm:h-[120px] object-cover' src="https://images.unsplash.com/photo-1606906957131-ecf341381519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=mat&fit=crop&w=687&q=80" alt="" />
        <span className='text-lg my-2  '>Popular</span>
      </div>
      <div className='flex-shrink-0 hover:underline underline-offset-4 hidden sm:flex flex-col items-center mx-4 my-2 cursor-pointer'>
        <img className='w-[80vw] h-[200px] sm:w-[120px] sm:h-[120px] object-cover' src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=mat&fit=crop&w=765&q=80" alt="" />
        <span className='text-lg my-2  '>Trending</span>
      </div>
      </div>
    </div>
  )
}
