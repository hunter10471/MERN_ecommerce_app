import React from 'react';


import { Link } from 'react-router-dom';


import purchaseSvg from '../images/purchase.svg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const SuccessPage = () => {
  return (
    <div className='w-full h-[80vh] flex flex-col items-center justify-center'>
      <img className='w-[80%] h-[40%]' src={purchaseSvg} alt='purchase-done' />
      <h1 className='font-heading font-bold text-center text-stone-600 text-sm sm:text-base lg:text-xl my-2'>
        You have successfully placed your order with us.
      </h1>
      <h2 className='mb-4 text-stone-500'>
        You will soon recieve a confirmation email from us.
      </h2>
      <Link to='/orders'>
        <span className='flex items-center underline text-blue-600 text-sm sm:text-base my-2 font-thin px-5 sm:mx-10 md:px-20'>
          <KeyboardBackspaceIcon className='mr-2' fontSize='medium' />
          Show my orders
        </span>
      </Link>
    </div>
  );
};
