import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { BASE_URL } from '../requestMethods';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LockIcon from '@mui/icons-material/Lock';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Register = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visiblePassword2, setVisiblePassword2] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [genericError, setGenericError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
    };
    try {
      await axios.post(BASE_URL + `auth/register`, user); //eslint-disable-line
      setSuccessMsg(true);
    } catch (error) {
      if (error.response.status === 400) {
        setUserError(true);
      } else {
        setGenericError(true);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Register - Cart-it</title>
        <meta
          name='description'
          content='Register your own Cart-it account now to shop your favourite brands now.'
        />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } }}
        exit={{ opacity: 0, transition: { duration: 0.12, ease: 'easeIn' } }}
        className='flex bg-gradient-to-br from-slate-100 overflow-x-hidden relative justify-center'
      >
        <div className='mx-4 my-[5vh]'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-center items-center shadow-xl bg-white rounded-2xl p-5 sm:p-10 mx-auto'
          >
            <h1 className='font-central m-2 text-center text-stone-600 font-bold text-xl lg:text-2xl'>
              {' '}
              <ShoppingCartIcon
                className='-rotate-6 text-3xl bg-primary rounded-[50%] text-white p-1 mb-1'
                fontSize=''
              />{' '}
              <Link to='/'> Cart-it! </Link>
            </h1>
            <h2 className='text-lg md:text-xl font-heading text-center my-2 font-bold text-primary'>
              Register An Account
            </h2>
            <h3 className='mb-2 text-stone-400 font-medium lg:text-sm sm:text-xs text-[10px]'>
              Enter your details below
            </h3>
            {userError && (
              <span className='bg-red-300 border-red-500 border-2 py-2 px-6 rounded-md text-xs mb-2 md:text-sm text-center relative'>
                User already exists with the following username or email.{' '}
                <CloseOutlinedIcon
                  onClick={() => setUserError(false)}
                  fontSize=''
                  className='absolute top-1 right-1 cursor-pointer'
                />{' '}
              </span>
            )}
            {genericError && (
              <span className='bg-red-300 py-2 px-6 text-xs border-red-500 border-2 rounded-md mb-2 md:text-sm text-center relative'>
                An error occured with your request, please try again.{' '}
                <CloseOutlinedIcon
                  onClick={() => setGenericError(false)}
                  fontSize=''
                  className='absolute top-1 right-1 cursor-pointer'
                />
              </span>
            )}
            {successMsg && (
              <span className='bg-green-300 border-green-500 border-2 py-2 px-6 rounded-md text-xs mb-2 md:text-sm text-center relative'>
                Account successfully created, please login.{' '}
                <CloseOutlinedIcon
                  onClick={() => setSuccessMsg(false)}
                  fontSize=''
                  className='absolute top-1 right-1 cursor-pointer'
                />
              </span>
            )}
            <div className='flex flex-col w-full'>
              <input
                required
                onChange={(e) => setUsername(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 border-2  hover:border-blue-400 transition-all duration-200 my-2 text-xs md:text-sm  p-4 min-w-[300px]  focus:outline-none focus:border-blue-400 ring-2 ring-transparent rounded-xl '
                type='text'
                placeholder='Username'
              />
            </div>
            <div className='flex flex-col w-full'>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 border-2  hover:border-blue-400 transition-all duration-200 my-2 text-xs md:text-sm  p-4 min-w-[300px]  focus:outline-none focus:border-blue-400 ring-2 ring-transparent rounded-xl '
                type='text'
                placeholder='Email'
              />
            </div>
            <div className='relative flex flex-col w-full'>
              <span
                onClick={() => setVisiblePassword(!visiblePassword)}
                className='absolute right-4 bottom-[1.4rem] sm:bottom-[2rem]  cursor-pointer text-gray-500 '
              >
                {visiblePassword === true ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </span>
              <input
                minLength={8}
                required
                onChange={(e) => setPassword(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 transition-all duration-200 w-full border-2 hover:border-blue-400 my-2 sm:my-4 text-xs md:text-sm p-4 min-w-[300px] rounded-xl focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                type={visiblePassword === true ? 'text' : 'password'}
                placeholder='Password'
              />
            </div>
            <div className='flex items-center w-full text-[10px] md:text-[14px] text-stone-600'>
              {' '}
              <LockIcon fontSize='' />{' '}
              <span className='ml-1 sm:mt-[3px]'>
                Password must be longer than 8 characters.{' '}
              </span>{' '}
            </div>
            <div className='relative flex flex-col w-full'>
              <span
                onClick={() => setVisiblePassword2(!visiblePassword2)}
                className='absolute right-4 bottom-[1.4rem] sm:bottom-[2rem]  cursor-pointer text-gray-500 '
              >
                {visiblePassword === true ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </span>
              <input
                minLength={8}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 transition-all duration-200 w-full border-2 hover:border-blue-400 my-2 sm:my-4 text-xs md:text-sm p-4 min-w-[300px] rounded-xl focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                type={visiblePassword === true ? 'text' : 'password'}
                placeholder='Confirm Password'
              />
            </div>
            <div className='flex items-center w-full text-[10px] md:text-[14px] mb-2 text-stone-600'>
              {' '}
              <LockIcon fontSize='' />{' '}
              <span className='ml-1 sm:mt-[3px]'>
                Password must be longer than 8 characters.{' '}
              </span>{' '}
            </div>

            {password !== confirmPassword && (
              <span className='text-red-600 text-xs mb-2 md:text-sm text-center'>
                Passwords do not match.
              </span>
            )}
            <div className=' mt-4 flex flex-start w-full'>
              <input
                className='cursor-pointer'
                type='checkbox'
                name='newsletter'
                id=''
                defaultChecked
              />
              <span className='text-xs md:text-sm ml-2'>
                Click this to recieve our monthly newsletter and our offers.
              </span>
            </div>
            <span className='text-xs md:text-sm ml-2 my-2 w-full '>
              By clicking register you agree to our{' '}
              <u className='cursor-pointer text-blue-800 font-medium'>terms</u>{' '}
              and{' '}
              <u className='cursor-pointer text-blue-800 font-medium'>
                conditions
              </u>
              .
            </span>
            <button className=' px-2 sm:px-4 py-2 my-2 bg-primary hover:bg-primaryLight text-white font-medium rounded text-xs md:text-sm w-full '>
              Register
            </button>
            <span className='text-xs md:text-sm text-stone-600 font-bold text-center mt-2 pt-3 border-t-2 w-full'>
              <Link to='/login' > Already have an account?{' '} </Link>
            </span>
          </form>
        </div>
      </motion.div>
    </>
  );
};
