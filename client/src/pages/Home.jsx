import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import StarsIcon from '@mui/icons-material/Stars';
import packageSvg from '../images/package.svg';
import hrsSvg from '../images/24hrs.svg';
import tickSvg from '../images/tick.svg';
import customerSvg from '../images/customer.svg';
import { CategoryCard } from '../components/CategoryCard'
import { Hero } from '../components/Hero'
import { ProductCard } from '../components/ProductCard';
import { PolicyCard } from '../components/PolicyCard';
import { Subscribe } from '../components/Subscribe';
import { CardSkeleton } from '../components/CardSkeleton';


const data = [
  <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />,
  <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />,
  <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />,
  <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />,
  <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />,
  <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />,
]

export const Home = () => {
  const [fetchData, setFetchData] = useState(null)
  useEffect(()=>{
    window.scrollTo(0,0)
    setTimeout(()=>{
      setFetchData(data)
    },5000)
},[])
  return (
    <>
    <Hero/>
    <div className='md:px-6 lg:px-10 xl:px-14'>
      <h1 className='flex  items-center font-heading font-medium w-fit border-b-4 pb-2 border-primary ml-2 text-xl md:text-2xl my-5 lg:text-3xl '>Categories</h1> 
      <div className="flex flex-wrap items-center justify-center  "> 
        <CategoryCard bgColor={'#FDFFFF'} title={'Clothing'} desc={'Trending this week'} img={'https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'}  />
        <CategoryCard bgColor={'#C4CDCC'} title={'Mobile'} desc={'Latest Tech. Phones'} img={'https://images.unsplash.com/photo-1544198841-dbeb20d385ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} />
        <CategoryCard bgColor={'#C3FEF5'} title={'Household'} desc={'Top-selling Products'} img={'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <CategoryCard bgColor={'#B3E140'} title={'Shoes'} desc={'Shoes made for you'} img={'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'} />
      </div>
      <h1 className='flex items-center font-heading font-medium w-fit  ml-2 text-xl md:text-2xl my-10 lg:text-3xl '> <span className='border-b-4 border-primary pb-2'>Products On Sale! </span>  <Countdown className='text-xs mx-2 bg-primary px-4 py-2 rounded-md md:text-sm lg:text-base' date={Date.now() + 100000000} /></h1>
      <div className='flex flex-wrap  '>
          {fetchData ?  fetchData.map(el=>{
            return el;
          }) :<div className='flex flex-wrap '> 
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
            </div>       
            }
      </div>
      <h1 className='flex font-heading font-medium w-fit ml-2 text-xl md:text-2xl mb-10  mt-20 lg:text-3xl '><span className='border-b-4 border-primary pb-2'> Featured Products </span> <StarsIcon fontSize='large' className='text-primary ml-2' /> </h1>
      <div className='flex flex-wrap  '>
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
      </div>
      <h1 className='font-heading text-center my-8 md:my-10 font-medium w-fit border-b-4 pb-2 border-primary text-xl md:text-2xl lg:text-3xl '>Our Policies</h1>
    <div className='flex flex-wrap justify-evenly '>  
          <PolicyCard title={'Fast Delivery Guranteed'} img={packageSvg} />
          <PolicyCard title={'100% Branded Products'} img={tickSvg} />
          <PolicyCard title={'1500+ Positive Reviews'} img={customerSvg} />
          <PolicyCard title={'Customer Support 24/7'} img={hrsSvg} />
    </div>
    </div>
    <Subscribe/>
    </>
  )
}

