import React from 'react';


import { CircularProgress } from '@mui/material';


function Loader() {
  return (
    <div className='w-screen h-[80vh] flex items-center justify-center'>
      <CircularProgress sx={{color:'#FF9100'}} />
    </div> 
  );
}

export default Loader;