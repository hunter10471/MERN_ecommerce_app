import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../requestMethods';
import { motion } from 'framer-motion';

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
      await axios.post(BASE_URL + `auth/register`, user);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } }}
      exit={{ opacity: 0, transition: { duration: 0.12, ease: 'easeIn' } }}
      className='flex bg-gradient-to-br from-slate-100 overflow-x-hidden relative justify-center'
    >
      <div className='mx-4 my-[5vh]'>
        <form
          onSubmit={handleSubmit}
          className='flex shadow-xl bg-white flex-col ring-primaryLight ring-2 rounded-sm p-5 sm:p-10 mx-auto'
        >
          <h1 className='text-2xl md:text-3xl font-heading text-center my-5 underline font-medium'>
            Register
          </h1>
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
          <label className='text-sm md:text-base font-medium text-stone-600'>
            Username
          </label>
          <input
            required
            onChange={(e) => setUsername(e.target.value)}
            className='placeholder:italic hover:bg-slate-100 transition-all duration-200 border-2 hover:border-blue-400 my-2 sm:my-4 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
            type='text'
            placeholder='Username'
          />
          <label className='text-sm md:text-base font-medium text-stone-600'>
            Email
          </label>
          <input
            type='email'
            required
            onChange={(e) => setEmail(e.target.value)}
            className='placeholder:italic hover:bg-slate-100 transition-all duration-200 border-2 hover:border-blue-400 my-2 sm:my-4 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
            placeholder='Email'
          />
          <div className='relative'>
            <label className='text-sm md:text-base font-medium text-stone-600'>
              Password
            </label>
            <span
              onClick={() => setVisiblePassword(!visiblePassword)}
              className='absolute right-4 bottom-[0.9rem] sm:bottom-[1.5rem]  cursor-pointer text-gray-500 '
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
              className='placeholder:italic hover:bg-slate-100 transition-all duration-200 w-full border-2 hover:border-blue-400 my-2 sm:my-4 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
              type={visiblePassword === true ? 'text' : 'password'}
              placeholder='Password'
            />
          </div>
          <div className='flex items-center text-[10px] mb-4 md:text-[14px] text-stone-600'>
            {' '}
            <LockIcon fontSize='' />{' '}
            <span className='ml-1 sm:mt-[3px]'>
              Password must be longer than 8 characters.{' '}
            </span>{' '}
          </div>
          <div className='relative'>
            <label className='text-sm md:text-base font-medium text-stone-600'>
              Confirm Password
            </label>
            <span
              onClick={() => setVisiblePassword2(!visiblePassword2)}
              className='absolute right-4 bottom-[0.9rem] sm:bottom-[1.5rem] cursor-pointer text-gray-500 '
            >
              {visiblePassword2 === true ? (
                <VisibilityOffIcon />
              ) : (
                <VisibilityIcon />
              )}
            </span>
            <input
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='placeholder:italic hover:bg-slate-100 transition-all duration-200 w-full border-2 hover:border-blue-400 my-2 sm:my-4 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
              type={visiblePassword2 === true ? 'text' : 'password'}
              placeholder='Confirm Password'
            />
          </div>
          {password !== confirmPassword && (
            <span className='text-red-600 text-xs mb-2 md:text-sm text-center'>
              Passwords do not match.
            </span>
          )}
          <div className='max-w-[350px] mt-4 flex'>
            <input
              className=' w-[20px] h-[20px] cursor-pointer'
              type='checkbox'
              name='newsletter'
              id=''
            />
            <span className='text-sm md:text-base ml-2 '>
              Click this to recieve our monthly newsletter and our offers.
            </span>
          </div>
          <span className='text-sm md:text-base ml-2 my-2'>
            By clicking register you agree to our{' '}
            <u className='cursor-pointer text-blue-800 font-medium'>terms</u>{' '}
            and{' '}
            <u className='cursor-pointer text-blue-800 font-medium'>
              conditions
            </u>
            .
          </span>
          <button className=' px-2 sm:px-4 py-2 mt-4 bg-primary hover:bg-primaryLight text-sm md:text-base '>
            Register
          </button>
          <div className='w-full flex justify-center mt-4'>
            <div id='my-signin2' data-onsuccess='onSignIn'></div>
          </div>
          <span className='text-sm md:text-base text-center mt-4'>
            Already have an account?{' '}
            <b className='underline ml-1 cursor-pointer'>
              {' '}
              <Link to='/login'> Login </Link>
            </b>
          </span>
        </form>
      </div>
    </motion.div>
  );
};
