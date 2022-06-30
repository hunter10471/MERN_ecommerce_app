import React from 'react'
import { CardSkeleton } from './CardSkeleton'

export const SkeletonContainer = () => {
  return (
    <div className='flex flex-wrap justify-center '>
                  <CardSkeleton /> 
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </div>
  )
}
