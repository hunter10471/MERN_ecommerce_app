import React, { useState } from 'react'


export const ProductImgSlider = ({imgs = []}) => {
  const [img, setImg] = useState(0)
  return (
      <div className='w-fit flex flex-col items-center'>
        <img className=' w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover' src={imgs[img]} alt="product" />
        <div className='flex pt-4'>
          {imgs.map(el=>{
              return <img key={imgs.indexOf(el)} onClick={()=>setImg(imgs.indexOf(el))} className={`cursor-pointer w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] object-cover ${imgs.indexOf(el) === img ? 'opacity-90' : 'opacity-50'  }`} src={el} alt="" />
          })}
        </div>
      </div>
  )
}
