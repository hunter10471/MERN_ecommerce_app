import React from 'react';


import {aboutUs, earnMoney, needHelp} from '../data';
import { FooterSelect } from './FooterSelect';
import { FooterList } from './FooterList';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Footer = () => {
  return (
    <footer className=' sm:px-4 md:px-8 lg:px-12 xl:px-16 bg-slate-800 text-white'>
      <div className='flex justify-center'>
        <FooterList heading={'About us'} array={aboutUs} />
        <FooterList heading={'Earn money'} array={earnMoney} />
        <FooterList heading={'Need our help?'} array={needHelp} />
      </div>
      <div className='flex flex-wrap items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 border-t-2 border-slate-600 w-full'>
        <h1 className='font-central mx-auto md:mx-20 text-white text-2xl sm:text-3xl md:text-4xl'>
          {' '}
          <ShoppingCartIcon
            className='-rotate-6 text-primary'
            fontSize=''
          />{' '}
          Cart-it
        </h1>
        <FooterSelect />
      </div>
      <p className='text-center text-[10px] md:text-xs p-2'>
        © 1996-2022 Cart-it is a reserved site with it&apos;s rights vested in the
        respective owners and affaliates.
      </p>
    </footer>
  );
};
