import React, { useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';


import { CategoryCard } from '../components/CategoryCard';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { PolicyCard } from '../components/PolicyCard';
import { Subscribe } from '../components/Subscribe';
import { CardSkeleton } from '../components/CardSkeleton';
import { motion } from 'framer-motion';
import { TakeToTop } from '../components/TakeToTop';
import { SkeletonContainer } from '../components/SkeletonContainer';


import StarsIcon from '@mui/icons-material/Stars';
import packageSvg from '../images/package.svg';
import hrsSvg from '../images/24hrs.svg';
import tickSvg from '../images/tick.svg';
import customerSvg from '../images/customer.svg';
import CategoryIcon from '@mui/icons-material/Category';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PolicyIcon from '@mui/icons-material/Policy';


const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 3.5 },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: { ease: 'easeInOut', duration: 1.75 },
  },
};

export const Home = () => {
  const [data, setData] = useState(null);
  const [catData, setCatData] = useState(null);
  const [category, setCategory] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios.get('/api/products');
      setData(products);
    };

    fetchProducts();
    window.scrollTo(0, 0);
}, []); //eslint-disable-line

  useEffect(() => {
    const fetchCat = async () => {
      const products = await axios.get(
        '/api/products/category?category=' + category
      );
      setCatData(products.data.products);
    };
    if (isMounted.current) fetchCat();
    else isMounted.current = true;
  }, [category]);

  return (
    <>
      <Helmet>
        <title>Home - Cart-it</title>
        <meta
          name='description'
          content='All your favourite products are on sale so shop now!'
        />
      </Helmet>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } }}
        exit={{ opacity: 0, transition: { duration: 0.12, ease: 'easeIn' } }}
      >
        <Hero />
        <TakeToTop />
        <div className='overflow-x-hidden '>
          {category ? (
            <>
              <motion.h1
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'backInOut' }}
                exit={{ x: 200, opacity: 0 }}
                className='flex  items-center font-heading font-extrabold border-b-4 tracking-wide border-primary  text-xl md:text-2xl mt-0 mb-5 p-2 sm:p-3 md:p-4 lg:p-5 justify-center lg:text-3xl text-white bg-primaryLight rounded capitalize '
              >
                {category}{' '}
                <CategoryIcon sx={{ fontSize: 25 }} className='ml-2' />
              </motion.h1>
              <button
                onClick={() => setCategory(null)}
                className='flex items-center hover:underline hover:text-blue-600 text-xs sm:text-sm my-10 font-thin px-5 sm:mx-10 md:px-20'
              >
                <KeyboardBackspaceIcon className='mr-2' fontSize='medium' />
                      Back to categories
              </button>
              <motion.div
                variants={container}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ ease: 'backInOut', duration: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className='flex flex-wrap justify-center'
              >
                {catData ? (
                  catData.map((el, index) => {
                    return (
                      <ProductCard
                        key={index}
                        variants={item}
                        title={el.productName}
                        discount={el.productDiscount}
                        price={el.productPrice}
                        img={el.productImg}
                        category={el.productCategory}
                        id={el._id}
                      />
                    );
                  })
                ) : (
                  <SkeletonContainer />
                )}
              </motion.div>{' '}
            </>
          ) : (
            <>
              {' '}
              <motion.h1
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'backInOut' }}
                exit={{ x: 200, opacity: 0 }}
                className='flex  items-center font-heading font-extrabold border-b-4 tracking-wide border-primary  text-xl md:text-2xl mt-0 mb-5 p-2 sm:p-3 md:p-4 lg:p-5 justify-center lg:text-3xl text-white bg-primaryLight rounded '
              >
                Categories{' '}
                <CategoryIcon sx={{ fontSize: 25 }} className='ml-2' />
              </motion.h1>
              <motion.div
                variants={container}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ ease: 'backInOut', duration: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className='flex flex-wrap items-center justify-center'
              >
                <button onClick={() => setCategory('clothing')}>
                  <CategoryCard
                    variants={item}
                    bgColor={'#FDFFFF'}
                    title={'Clothing'}
                    desc={'Trending this week'}
                    img={
                      'https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
                    }
                  />{' '}
                </button>
                <button onClick={() => setCategory('phone')}>
                  <CategoryCard
                    variants={item}
                    bgColor={'#C4CDCC'}
                    title={'Mobile'}
                    desc={'Latest Tech. Phones'}
                    img={
                      'https://images.unsplash.com/photo-1544198841-dbeb20d385ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    }
                  />{' '}
                </button>
                <button onClick={() => setCategory('household')}>
                  {' '}
                  <CategoryCard
                    variants={item}
                    bgColor={'#C3FEF5'}
                    title={'Household'}
                    desc={'Top-selling Products'}
                    img={
                      'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    }
                  />{' '}
                </button>
                <button onClick={() => setCategory('shoes')}>
                  {' '}
                  <CategoryCard
                    variants={item}
                    bgColor={'#B3E140'}
                    title={'Shoes'}
                    desc={'Shoes made for you'}
                    img={
                      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                    }
                  />{' '}
                </button>
              </motion.div>{' '}
            </>
          )}
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'backInOut' }}
            exit={{ y: 200, opacity: 0 }}
            className='flex items-center justify-center font-heading font-extrabold tracking-wide w-full p-2 sm:p-3 md:p-4 lg:p-5 text-white rounded bg-blue-400 border-b-4 border-blue-500   text-xl md:text-2xl my-10 lg:text-3xl '
          >
            {' '}
            Products On Sale!{' '}
            <Countdown
              className='text-xs mx-2 bg-primary px-4 py-2 rounded-md md:text-sm lg:text-base'
              date={Date.now() + 100000000}
            />
          </motion.h1>
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            exit='exit'
            className='flex flex-wrap justify-center '
          >
            {data ? (
              data.data.products.map((el, index) => {
                return (
                  <ProductCard
                    key={index}
                    variants={item}
                    title={el.productName}
                    discount={el.productDiscount}
                    price={el.productPrice}
                    img={el.productImg}
                    category={el.productCategory}
                    id={el._id}
                  />
                );
              })
            ) : (
              <SkeletonContainer />
            )}
          </motion.div>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'backInOut' }}
            exit={{ y: -100, opacity: 0 }}
            className='flex items-center justify-center bg-emerald-400 p-2 sm:p-3 md:p-4 lg:p-5 rounded font-heading font-extrabold tracking-wide border-b-4 border-emerald-500 text-white w-full  text-xl md:text-2xl mb-10  mt-20 lg:text-3xl '
          >
            Featured Products{' '}
            <StarsIcon
              fontSize='large'
              className='ml-2 text-primaryLight rounded-[50%] bg-white'
            />{' '}
          </motion.h1>
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            exit='exit'
            className='flex flex-wrap justify-center '
          >
            {data ? (
              data.data.products.map((el, index) => {
                return (
                  <ProductCard
                    key={index}
                    variants={item}
                    title={el.productName}
                    discount={el.productDiscount}
                    price={el.productPrice}
                    img={el.productImg}
                    category={el.productCategory}
                    id={el._id}
                  />
                );
              })
            ) : (
              <div className='flex flex-wrap justify-center'>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            )}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'backInOut' }}
            exit={{ opacity: 0 }}
            className='flex items-center justify-center font-heading text-center my-8 md:my-10 font-extrabold w-full border-b-4 p-2 sm:p-3 md:p-4 lg:p-5 rounded bg-slate-700 border-slate-800 text-white tracking-wide text-xl md:text-2xl lg:text-3xl '
          >
            Our Policies{' '}
            <PolicyIcon className='ml-2 text-primary' sx={{ fontSize: 30 }} />{' '}
          </motion.h1>
          <div className='flex flex-wrap justify-evenly '>
            <PolicyCard title={'Fast Delivery Guranteed'} img={packageSvg} />
            <PolicyCard title={'100% Branded Products'} img={tickSvg} />
            <PolicyCard title={'1500+ Positive Reviews'} img={customerSvg} />
            <PolicyCard title={'Customer Support 24/7'} img={hrsSvg} />
          </div>
        </div>
        <Subscribe />
      </motion.main>
    </>
  );
};
