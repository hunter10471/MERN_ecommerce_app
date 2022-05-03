import products from '../data'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const responsive = {
    Bigdesktop: {
      breakpoint: { max: 3000, min: 0},
      items: 1,
      slidesToSlide: 1,
    }
  };



export const Hero = () => {
  return (
    <div className='pb-[30px] w-full'>
  <Carousel
    additionalTransfrom={0}
    arrows
    removeArrowOnDeviceType={["tablet", "mobile"]}
    autoPlaySpeed={5000}
    centerMode={false}
    className="z-[80]"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    responsive={responsive}
    showDots
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
   { products.map(el=>{
    return <div aria-label='product' key={el.title} className='h-[65vh]'>
     <img src={el.img} className='absolute w-full -z-10 h-full object-cover' alt="" />
     <div className='flex flex-col h-full w-full bg-gradient-to-r from-secondary justify-center pl-5 md:pl-10  '>
         <h1 className=' text-3xl sm:text-4xl lg:text-6xl w-[80%] text-white font-bold font-heading my-1'>{el.title}</h1>
         <span className='lg:text-xl sm:text-lg w-[60%] text-base text-white my-1'>Get them now for 60% off on selected banks. <br /> <span className='font-light text-xs sm:text-sm '>Terms and conditions apply.* </span> </span>
          <span className='my-5'>
              <button className='text-white text-xs md:text-sm lg:text-base px-2 md:px-4 py-2 mx-2 rounded-sm ring-2 ring-primary hover:ring-primaryLight hover:bg-primaryLight bg-primary'>Add to cart</button>
              <button className='text-primaryLight text-xs md:text-sm lg:text-base px-2 md:px-4 py-2 mx-2 rounded-sm ring-primaryLight hover:ring-primary hover:text-primary ring-2'>Add to wishlist</button>
          </span>
     </div>
     </div>})}
  </Carousel>
</div>

    );
}