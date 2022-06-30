import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartList } from '../components/CartList';
import { useSelector, useDispatch } from 'react-redux';
import { resetCart } from '../redux/cartRedux';
import { motion } from 'framer-motion';

export const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleReset = () => {
    dispatch(resetCart());
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } }}
      exit={{ opacity: 0, transition: { duration: 0.12, ease: 'easeIn' } }}
      className='px-2 pr-4 my-10'
    >
      <h1 className='text-xl md:text-2xl lg:text-3xl font-heading font-medium my-5 px-5 sm:mx-10 md:px-20'>
        Cart
      </h1>
      <div className='flex justify-center flex-col lg:flex-row '>
        <div className='flex flex-col items-center sm:mx-4'>
          <CartList />
          <button
            onClick={() => handleReset()}
            className='my-10 px-4 py-1 font-medium w-fit  text-xs md:text-sm lg:text-base rounded border-2 border-primary text-primary hover:text-primaryLight hover:border-primaryLight'
          >
            Empty Cart
          </button>
        </div>
        <div className='flex flex-col my-10 lg:my-0 self-center max-w-[400px] w-[80%] mx-6'>
          <div className='flex flex-col p-4 lg:p-6 bg-gray-100'>
            <h2 className='font-medium text-base md:text-lg lg:text-xl'>
              Order Summary
            </h2>
            <span className='my-2 text-sm text-slate-400 flex justify-between'>
              Item(s) total{' '}
              <span className='text-black font-medium'>{cart.quantity}</span>{' '}
            </span>
            <span className='my-2 text-sm text-slate-400 flex justify-between'>
              Price{' '}
              <span className='text-black font-medium'>${cart.total}</span>{' '}
            </span>
            <span className='my-2 text-slate-400 text-sm flex justify-between '>
              VAT (21%){' '}
              <span className='text-black font-medium'>
                + ${(cart.total * 21) / 100}
              </span>
            </span>
          </div>
          <div className='flex flex-col p-4 lg:p-6  bg-gray-100 mt-2'>
            <span className='mb-2 text-sm text-slate-400 flex justify-between'>
              Total Price{' '}
            </span>
            <span className='font-medium text-sm flex justify-between items-center '>
              ${cart.total + (cart.total * 21) / 100}{' '}
              <Link to={user ? '/billing' : '/login'}>
                <button className='py-2 px-6 transition-all bg-primary hover:bg-primaryLight text-white rounded-sm'>
                  Checkout
                </button>{' '}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </motion.main>
  );
};
