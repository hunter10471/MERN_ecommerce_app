import React, { useState } from 'react';
import axios from 'axios';


import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../requestMethods';
import { Helmet } from 'react-helmet-async';


import recoverSvg from '../images/forgot.svg';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseOutlined from '@mui/icons-material/CloseOutlined';


export const RecoverPage = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const sendMail = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL + 'auth/email-sent', { email: email });
      navigate(`/otp-verify?email=${email}`, { replace: true });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };


  return ( <>
    <Helmet>
      <title>Recover your account — Cart-it</title>
      <meta
        name='description'
        content='Enter your email to recieve an OTP and recover your cart-it account'
      />
    </Helmet>
    <div className='w-full h-[80vh] flex flex-col items-center justify-center relative'>
      <img className='w-[80%] h-[20%]' src={recoverSvg} alt='error-404' />
      <h1 className='font-heading font-bold text-center text-stone-600 text-sm  sm:text-base lg:text-xl mt-2'>
        It&apos;s okay, we can all forget our password sometimes...
      </h1>
      <h2 className='text-center text-stone-500 text-[10px]  sm:text-xs lg:text-sm my-2'>
        Enter your email and we&apos;ll fetch your account right away for you!
      </h2>
      <form onSubmit={sendMail}>
        <label className=' text-stone-500 mr-2' htmlFor=''>
          <EmailIcon />
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          className='placeholder:italic hover:bg-slate-100 border-2 hover:border-blue-400 my-4 transition-all duration-200 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[250px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
          type='email'
          placeholder='Email'
        />
        <button className=' px-2 py-2 text-primary hover:text-primaryLight'>
          <ArrowForwardIcon />
        </button>
      </form>
      {error && (
        <span className='bg-red-300 py-2 px-6 text-xs border-red-500 border-2 rounded-md mb-2 md:text-sm text-center relative'>
          An error occured with your request, please try again.{' '}
          <CloseOutlined
            onClick={() => setError(false)}
            fontSize=''
            className='absolute top-1 right-1 cursor-pointer'
          />
        </span>
      )}
    </div>
  </>
  );
};
