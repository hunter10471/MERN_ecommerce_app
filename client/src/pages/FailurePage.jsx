import React from 'react';


import { Link } from 'react-router-dom';


import failureSvg from '../images/failure.svg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const FailurePage = () => {
  return (
    <main className='w-full h-[80vh] flex flex-col items-center justify-center'>
      <img className='w-[80%] h-[40%]' src={failureSvg} alt='error-404' />
      <h1 className='font-heading font-bold text-center text-stone-600 text-sm sm:text-base lg:text-xl my-4'>
        {' '}
        We couldn&apos;t process your request at the moment...
      </h1>
      <Link to='/'>
        <span className='flex items-center underline text-blue-600 text-sm sm:text-base my-2 font-thin px-5 sm:mx-10 md:px-20'>
          <KeyboardBackspaceIcon className='mr-2' fontSize='medium' />
          Take me home
        </span>
      </Link>
    </main>
  );
};
