import React from 'react';


import { Skeleton } from '@mui/material';

export const CardSkeleton = () => {
  return (
    <div className='flex-shrink-0 m-5'>
      <Skeleton variant='rectangular' width={200} height={200} />
      <Skeleton variant='text' width={200} height={60} />
      <Skeleton variant='text' width={150} height={20} />
      <Skeleton variant='text' width={200} height={30} />
    </div>
  );
};
