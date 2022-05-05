import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const TakeToTop = () => {
    const toTop = () =>{
        window.scrollTo({
            top: 100,
            behavior: 'smooth',
        });
    }
  return (
    <div onClick={()=>toTop()} className='border-2 cursor-pointer text-white transition-all hover:scale-105 hover:bg-blue-400 p-2 rounded-[50%] bg-blue-500 sticky w-fit float-right bottom-[2vh] m-5'>
        <ExpandLessIcon sx={{fontSize:25}} />
    </div>
  )
}
