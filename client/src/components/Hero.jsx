import React, { useState } from 'react'
import img2 from '../images/cards.png'
import products from '../data';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    transition: all 500ms ease-in;
    transform: translateX(${props => -props.next+'vw'});

`


export const Hero = () => {
    const [next, setNext] = useState(0)
    return (
    <div className='w-full relative mb-10 overflow-x-hidden h-[600px]'>
         <Container next={next}>
        {products.map(el=>{
            return(
     <div key={el.title} className='w-full h-full shrink-0'>
       <img src={el.img} className='absolute w-full -z-10 h-full object-cover' alt="" />
       <div className='flex flex-col h-full w-full bg-gradient-to-r from-secondary justify-center pl-10  '>
           <h1 className=' text-3xl sm:text-4xl lg:text-6xl w-[80%] text-white font-bold font-heading my-1'>{el.title}</h1>
           <span className='lg:text-xl sm:text-lg w-[60%] text-base text-white my-1'>Get them now for 60% off on selected banks. <br /> <span className='font-light text-xs sm:text-sm '>Terms and conditions apply.* </span> </span>
            <span className='my-5'>
                <button className='text-white text-xs md:text-sm lg:text-base px-2 md:px-4 py-2 mx-2 rounded-sm ring-2 ring-primary hover:ring-primaryLight hover:bg-primaryLight bg-primary'>Add to cart</button>
                <button className='text-primaryLight text-xs md:text-sm lg:text-base px-2 md:px-4 py-2 mx-2 rounded-sm ring-primaryLight hover:ring-primary hover:text-primary ring-2'>Add to wishlist</button>
            </span>
       </div>
       </div>
            )
        })}
        </Container> 
       <div className='absolute left-[calc(50%_-_50px)] bottom-[10px]'>
           <span onClick={()=>setNext(0)} className={`cursor-pointer rounded-[50%] px-[7px] mr-5 ${next===0 ? 'bg-white' : 'bg-primaryLight'}`}></span>
          <span onClick={()=>setNext(100)} className={` cursor-pointer rounded-[50%] px-[7px] mr-5 ${next===100 ? 'bg-white' : 'bg-primaryLight'}`}></span>
           <span onClick={()=>setNext(200)} className={` cursor-pointer rounded-[50%] px-[7px] mr-5 ${next===200 ? 'bg-white' : 'bg-primaryLight'}`}></span>
           <span onClick={()=>setNext(300)} className={` cursor-pointer rounded-[50%] px-[7px] mr-5 ${next===300 ? 'bg-white' : 'bg-primaryLight'}`}></span>
           <span onClick={()=>setNext(400)} className={` cursor-pointer rounded-[50%] px-[7px] mr-5 ${next===400 ? 'bg-white' : 'bg-primaryLight'}`}></span>
       </div>
       <img className='absolute bottom-0 left-[10px] w-[100px] md:w-[150px] object-contain h-[30px]' src={img2} alt="" />
    </div>
  )
}
