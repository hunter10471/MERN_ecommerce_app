import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SearchBar } from './SearchBar';
import Profile from './Profile';

export const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='relative shadow-lg z-[100] bg-white'>
      <SearchBar />
      <div
        className={`flex items-center justify-between  flex-wrap p-5 w-full overflow-hidden transition-all duration-200 ${
          toggle ? 'h-[300px]' : 'h-[70px]'
        } lg:h-auto `}
      >
        <h1 className='font-central mx-4 text-center font-bold text-2xl lg:text-3xl text-primary'>
          {' '}
          <ShoppingCartIcon className='-rotate-6' fontSize='' />{' '}
          <Link to='/'> Cart-it! </Link>
        </h1>
        <section
          onClick={() => setToggle(!toggle)}
          className=' block text-primary mx-4 lg:hidden cursor-pointer'
        >
          <MenuOutlinedIcon />
        </section>
        <section className=' w-full mx-4 lg:w-auto my-10 lg:my-0 flex items-center flex-col lg:flex-row '>
          <Profile />
          <div className='my-10 lg:my-0 lg:mx-5 xl:mx-10  w-full flex items-center justify-center  lg:w-auto cursor-pointer text-2xl lg:text-3xl relative'>
            <Link to='/cart'>
              <ShoppingCartOutlinedIcon fontSize='' />
              <span className='p-2 bg-primary flex items-center justify-center font-bold right-[50%] bottom-[50%] lg:right-4 lg:bottom-4 h-[24px] w-[24px] text-[10px] absolute rounded-[50%]'>
                {cart.quantity}
              </span>
            </Link>
          </div>
        </section>
      </div>
    </nav>
  );
};
