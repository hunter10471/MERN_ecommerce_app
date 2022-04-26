import React from 'react'
import { CategoryCard } from '../components/CategoryCard'
import { Hero } from '../components/Hero'

export const Home = () => {
  return (
    <>
    <Hero/>
    <div className='sm:px-4 md:px-8 lg:px-12 xl:px-16'>
      <div className="flex flex-wrap items-center justify-center ">  
        <CategoryCard bgColor={'#FDFFFF'} title={'Clothing'} desc={'Trending this week'} img={'https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'}  />
        <CategoryCard bgColor={'#C4CDCC'} title={'Mobile'} desc={'Latest Tech. Phones'} img={'https://images.unsplash.com/photo-1544198841-dbeb20d385ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} />
        <CategoryCard bgColor={'#C3FEF5'} title={'Household'} desc={'Top-selling Products'} img={'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
        <CategoryCard bgColor={'#4A8DFE'} title={'Shoes'} desc={'Shoes made for you'} img={'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
      </div>
      
    </div>
    </>
  )
}
