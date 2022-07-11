import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { motion } from 'framer-motion';
import {useSelector} from 'react-redux';
import {Order} from '../components/Order';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { CircularProgress } from '@mui/material';
import orderSvg from '../images/noOrder.svg';
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';


export const OrdersPage = () => {
  const user = useSelector((state)=>state.user.currentUser);
  const [data, setData] = useState(null);
  const [orders, setOrders] = useState(false);


  useEffect(()=>{
    const getOrders = async() =>{
      const res = await axios.get(`/orders/${user.user._id}`,{headers: {'token' : user.accessToken}});
      if(res.data){
        setData(res.data.order);
        setOrders(true);
      }
      else setOrders(false);
    };
    getOrders();
  },[orders]);



  return (<>
    <Helmet>
      <title>Orders{user && ` - ${user.user.username}`} - Cart-it</title>
      <meta
        name='description'
        content='All your present and past cart-it orders are listed here.'
      />
    </Helmet> 
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.25,ease:'easeIn'}}} exit={{opacity:0,transition:{duration:0.12,ease:'easeIn'}}} className='p-6' >
      {
        orders ? (data ? <div className='flex flex-col items-center'>
          <div className='max-w-[1000px] w-full my-5'>
            <h1 className='font-heading font-bold capitalize text-stone-700 lg:text-2xl sm:text-xl text-lg'>
              Orders
            </h1>
            <h2 className='text-xs sm:text-sm lg:text-base text-stone-600'>
              Following are your orders details 
            </h2>
          </div>
          {data.map((el, index)=> {
            return <Order key={index} id={el._id} totalAmount={el.amount} paymentStatus={el.paymentStatus} shipmentStatus={el.shipmentStatus} products={el.products} address={el.billingAddress} />;
          })}
        </div> :
        <div className={`w-[95vw] h-[60vh] flex items-center justify-center`}> {/*eslint-disable-line*/}
            <CircularProgress sx={{color:'#FF9100'}} />
          </div> ) :
          <div className='w-full h-[80vh] flex flex-col items-center justify-center'>
            <img className='w-[80%] h-[40%]' src={orderSvg} alt='no-orders-exist' />
            <h1 className='font-heading font-bold text-center text-stone-600 text-sm sm:text-base lg:text-xl my-4'> We couldn&apos;t find any orders for you...</h1>
            <Link to='/'><span className='flex items-center underline text-blue-600 text-sm sm:text-base my-2 font-thin px-5 sm:mx-10 md:px-20'><KeyboardBackspace className='mr-2' fontSize='medium' />Take me home</span></Link>
          </div>
      }
    </motion.div>
  </>
  );
};
