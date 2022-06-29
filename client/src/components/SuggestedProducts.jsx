import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { BASE_URL } from '../requestMethods';
import { CardSkeleton } from './CardSkeleton';
import { ProductCard } from './ProductCard';

const responsive = {
    Bigdesktop: {
      breakpoint: { max: 3000, min: 1440},
      items: 5,
      slidesToSlide: 2,
      partialVisibilityGutter: 10 
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024},
      items: 4,
      slidesToSlide: 2,
      partialVisibilityGutter: 10 
    },
    tablet: {
      breakpoint: { max: 1024, min: 768},
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 10 
    },
    phone: {
      breakpoint: { max: 768, min: 0},
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 10 
    },
  };



export const SuggestedProducts = ({category = null}) => {
    const [data, setData] = useState(null)

    
    useEffect(()=>{
        const fetchCat = async() =>{
          const products = await axios.get(BASE_URL+'products/category?category='+category[0]);
          console.log(products.data)
          setData(products.data.products)
        }
        fetchCat()
      },[category])


  return (
    <div>
        <h1 className='text-center my-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-extrabold bg-rose-500 text-white border-b-4 border-rose-600 p-4'>Suggested Products</h1>
          <Carousel
    additionalTransfrom={0}
    autoPlaySpeed={5000}
    centerMode={false}
    className="z-[0] flex justify-center mb-10"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    responsive={responsive}
    sliderClass=""
    swipeable
  >
     {data ?  data.map(el=>{
         return <ProductCard title={el.productName} discount={el.productDiscount} price={el.productPrice} img={el.productImg} category={el.productCategory} id={el._id}  />;
        }) : <div className='flex justify-center w-screen'>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
            </div>
            }
  </Carousel>
  </div>
  )
}
