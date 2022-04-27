
export const CategoryCard = ({title, bgColor, img, desc}) => {

  return (
    <div style={{backgroundColor:`${bgColor}`}} className={`transition-all duration-200 hover:scale-[1.08] rounded-md text-secondary pb-4 flex-shrink-0 m-4 shadow-xl `}>
        <img className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]  md:w-[250px] md:h-[250px] rounded-md object-cover object-center ' src={img} alt="" />
      <h1 className='flex my-2 items-center justify-center flex-col font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-wider w-full text-center'>
        <span className=' text-xs sm:text-sm font-light mb-2 '>{desc}</span>
        {title}
        {/* <span className='text-sm sm:text-md font-sans font-thin w-full mx-6 text-right'> <DiscountOutlinedIcon fontSize='' /> Sale ending in  <b  className='text-secondary font-bold'> <Countdown date={Date.now() + 2000000000} /></b></span> */}
      <button className='bg-secondary hover:bg-secondaryLight transition-all text-xs sm:text-sm  text-primary w-[80%] py-2 mt-4'>Shop Now</button>
      </h1>
    </div>
  )
}
