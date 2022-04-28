import React, { useState } from 'react'

const data = [
  'https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
  'https://images.unsplash.com/photo-1564864310852-e1e98eb07010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
  'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
]

export const ProductImgSlider = ({imgs}) => {
  const [img, setImg] = useState(0)
  return (
      <div className='w-fit'>
        <img className='w-full h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover' src={data[img]} alt="" />
        <div className='flex pt-4'>
          {data.map(el=>{
              return <img onClick={()=>setImg(data.indexOf(el))} className={`cursor-pointer w-[100px] h-[100px] object-cover ${data.indexOf(el) === img ? 'opacity-90' : 'opacity-50'  }`} src={el} alt="" />
          })}
        </div>
      </div>
  )
}
