import React from 'react'
import Countdown from 'react-countdown'
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { CategoryCard } from '../components/CategoryCard'
import { Hero } from '../components/Hero'
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  return (
    <>
    <Hero/>
    <div className='px-2 md:px-6 lg:px-10 xl:px-14'>
      <h1 className='flex items-center font-heading font-medium text-xl md:text-2xl my-5 lg:text-3xl'>Categories</h1> 
      <div className="flex flex-wrap items-center justify-center "> 
        <CategoryCard bgColor={'#FDFFFF'} title={'Clothing'} desc={'Trending this week'} img={'https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'}  />
        <CategoryCard bgColor={'#C4CDCC'} title={'Mobile'} desc={'Latest Tech. Phones'} img={'https://images.unsplash.com/photo-1544198841-dbeb20d385ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} />
        <CategoryCard bgColor={'#C3FEF5'} title={'Household'} desc={'Top-selling Products'} img={'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <CategoryCard bgColor={'#B3E140'} title={'Shoes'} desc={'Shoes made for you'} img={'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'} />
      </div>
      <h1 className='flex items-center font-heading font-medium text-lg md:text-xl my-5 lg:text-2xl'>Products On Sale! <Countdown className='text-xs mx-2 bg-primary px-4 py-2 rounded-md md:text-sm lg:text-base' date={Date.now() + 100000000} /></h1>
      <div className='flex flex-wrap justify-center '>
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <ProductCard title={'Brauss Grill'} discount={50} price={750} img={'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
      </div>
    </div>
    </>
  )
}
