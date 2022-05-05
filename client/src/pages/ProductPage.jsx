import React, { useEffect, useState } from 'react'
import { ProductImgSlider } from '../components/ProductImgSlider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../requestMethods';
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch, useSelector} from 'react-redux'
import { addProduct } from '../redux/cartRedux';
import {motion} from 'framer-motion'


export const ProductPage = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState([]);
  const cart = useSelector(state=> state.cart)
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(()=>{
    window.scrollTo(0,0)
    const fetchProduct = async() =>{
      const product = await axios.get(BASE_URL+'products'+location.search)
      setData(product.data.product)     
      setCategory(product.data.product.productCategory);
    }
    fetchProduct();
  },[location.search])
  const handleClick = () => {
    if(cart.products.includes(data.productName)){

    }
    dispatch(
      addProduct({...data, quantity})
    )
  }
  return ( 
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.25,ease:'easeIn'}}} exit={{opacity:0,transition:{duration:0.12,ease:'easeIn'}}} className='px-2 flex flex-col md:flex-row justify-center items-center'>
      {data ?  <>
      <div className='m-5 md:m-2 lg:m-20 md:self-start '>
      <ProductImgSlider imgs={[data.productImg]}  />
      </div>
      <div className='m-2 sm:m-5 md:m-10 lg:m-20'>
         { category.map(el =>  <span className='py-1 px-2 mr-2 bg-gray-300 uppercase tracking-wide font-heading text-[10px] sm:text-xs md:text-sm'>{el}</span> )}
          <h1 className='my-4 text-xl md:text-2xl lg:text-3xl font-medium'>{data.productName}</h1>
            <span className='text-xs md:text-sm text-slate-400 uppercase my-2 tracking-wide'>SKU: {data._id}</span>
            <p className='max-w-[400px] my-5 text-slate-600 text-sm md:text-base tracking-wide'>
              {data.productDescription}
            </p>
            <div className='flex justify-between items-center mt-10'>
              <div className='flex flex-col'>
                <span className='text-[10px] font-medium md:text-xs text-slate-400'>
                  QUANTITY
                </span>
                <span className='flex justify-between items-center border-2 my-2 py-1 px-2 w-[100px] text-sm md:text-base'>
                 <button disabled={quantity === 0} className='cursor-pointer disabled:text-slate-400 disabled:cursor-not-allowed' onClick={()=>setQuantity( quantity > 1 ? quantity-1 : 0)} > <RemoveIcon fontSize='' /></button>
                  {quantity}
                 <button className='cursor-pointer' onClick={()=>setQuantity(quantity+1)}><AddIcon  fontSize='' /></button>
                </span>
              </div>
              <span className='flex flex-col text-lg md:text-xl lg:text-2xl text-right'>
                ${data.productPrice * quantity}
                <span className='text-xs text-slate-400 md:text-sm tracking-wide mt-1'>13% VAT included*</span>
              </span>
            </div>
            <button onClick={()=>handleClick()} className='mt-8 mb-2 w-full text-xs md:text-sm lg:text-base transition-all hover:bg-primaryLight py-2 px-4 bg-primary rounded-sm font-medium text-white'>Add to Cart</button>
            <Link to='/billing'><button className='mb-8 mt-2 w-full text-xs md:text-sm lg:text-base transition-all py-2 px-4 hover:border-primaryLight hover:text-primaryLight border-primary border-2 font-medium text-primary rounded-sm'>Checkout</button></Link>
            <div>
              <h2 className='font-medium text-sm md:text-base lg:text-lg my-5'>Specifications</h2>
              <div className='flex justify-between font-medium tracking-wide text-xs md:text-sm my-10'>
                <span className='uppercase text-slate-400 '>size</span>
                <span>sm, md, lg, xl</span>
              </div>
              <div className='flex justify-between font-medium tracking-wide text-xs md:text-sm my-10'>
                <span className='uppercase text-slate-400 '>colors</span>
                <div>
                 <input type="checkbox" name="green" className=' focus:border-green-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-green-500 ' id="" />
                <input type="checkbox" name="red" className='focus:border-red-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-red-500 ' id="" />
                <input type="checkbox" name="blue" className='focus:border-blue-800 cursor-pointer border-2 appearance-none rounded-[50%] mr-4 p-2 sm:p-2 md:p-3 bg-blue-500 ' id="" />
                <input type="checkbox" name="black" className='focus:border-gray-800 cursor-pointer border-2 appearance-none rounded-[50%] p-2 sm:p-2 md:p-3 bg-gray-800 ' id="" />     </div>
              </div>
              <div className='flex justify-between font-medium tracking-wide text-xs md:text-sm my-10'>
                <span className='uppercase text-slate-400 '>in stock</span>
                <span>{data.productStock ? 'Yes' : 'No'}</span>
              </div>
            </div>
      </div>
          </>      : <div className='w-screen h-[95vh] flex items-center justify-center'>
                    <CircularProgress sx={{color:'#FF9100'}} />
                     </div> 
}
            
    </motion.div>



    )
}
