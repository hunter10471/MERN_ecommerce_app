import React from 'react'
import { CategoryCard } from '../components/CategoryCard'
import { Hero } from '../components/Hero'

export const Home = () => {
  return (
    <>
    <Hero/>
    <div className='sm:px-[50px] xl:px-[200px]'>
      <div className="flex flex-wrap items-center">  
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
    </>
  )
}
