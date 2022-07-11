import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [genericError, setGenericError] = useState(false);
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`/api/users/public?username=${username}`);
      login(dispatch, { username, password })
        .then((res) => {
          if (res.response.status === 403) {
            setGenericError(true);
            return;
          } else if (res.response.status === 200) {
            navigate('/');
          }
        })
        .catch((err) => console.log(err.response));
    } catch (error) {
      setUserError(true);
    }
  };

  const LoadingAnimation = () => {
    return (
      <svg
        role='status'
        className=' w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] text-gray-200 animate-spin dark:text-gray-600 fill-primaryLight'
        viewBox='0 0 100 101'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
          fill='currentColor'
        />
        <path
          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
          fill='currentFill'
        />
      </svg>
    );
  };

  return (
    <>
      <Helmet>
        <title>Cart-it - Login</title>
        <meta
          name='description'
          content='Login to your Cart-it account now to continue shopping of your favourite brands now.'
        />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } }}
        exit={{ opacity: 0, transition: { duration: 0.12, ease: 'easeIn' } }}
      >
        <div className='flex bg-slate-100 overflow-x-hidden relative justify-center'>
          <div className='mx-4 w-full my-[5vh]'>
            <form
              onSubmit={onSubmit}
              className='flex flex-col items-center justify-center shadow-xl min-w-[250px] w-fit  bg-white rounded-2xl p-5 sm:p-10 mx-auto'
            >
              <h1 className='font-central m-2 text-center text-stone-600 font-bold text-xl lg:text-2xl'>
                {' '}
                <ShoppingCartIcon className='-rotate-6 text-3xl bg-primary rounded-[50%] text-white p-1 mb-1' fontSize='' />{' '}
                <Link to='/'> Cart-it! </Link>
              </h1>
              <h2 className='text-lg md:text-xl font-heading text-center my-2 font-bold text-primary'>
                Hi, Welcome Back
              </h2>
              <h3 className='mb-2 text-stone-400 font-medium lg:text-sm sm:text-xs text-[10px]'>
                Enter your credentials to continue
              </h3>
              {userError && (
                <span className='bg-red-300 border-2 border-red-500 px-4 py-2 rounded-md text-xs mb-2 md:text-sm text-center relative'>
                  Username does not exists.{' '}
                  <CloseOutlinedIcon
                    onClick={() => setUserError(false)}
                    fontSize=''
                    className='absolute top-1 right-1 cursor-pointer'
                  />{' '}
                </span>
              )}
              {genericError && (
                <span className='bg-red-300 border-2 border-red-500 px-4 py-2 rounded-md text-xs mb-4 md:text-sm text-center relative'>
                  User credentials incorrect.{' '}
                  <CloseOutlinedIcon
                    onClick={() => setGenericError(false)}
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
              <div className='relative flex flex-col w-full'>
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
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 w-full border-2 hover:border-blue-400 transition-all duration-200 my-2 text-xs md:text-sm  p-4 min-w-[300px]  focus:outline-none focus:border-blue-400 ring-2 ring-transparent rounded-xl '
                  type={visiblePassword === true ? 'text' : 'password'}
                  placeholder='Password'
                />
              </div>
              <div className='max-w-[350px] mb-2 w-full'>
                <input
                  className='cursor-pointer'
                  type='checkbox'
                  name='remember'
                  id=''
                  defaultChecked
                />
                <span className='text-xs md:text-sm ml-2 text-stone-500 font-medium'>
                  Remember me
                </span>
              </div>
              <span className='text-xs md:text-sm mb-2 text-primary font-medium text-left w-full'>
                <Link to='/recover'>Forgot your password?</Link>
              </span>
              <button
                disabled={isFetching}
                className='w-full disabled:hover:bg-primary disabled:cursor-wait px-2 sm:px-4 py-2 my-2 bg-primary hover:bg-primaryLight rounded text-xs md:text-sm font-medium text-white'
              >
                {' '}
                {isFetching ? (
                  <span className='flex items-center justify-center'>
                    {' '}
                    <LoadingAnimation />{' '}
                  </span>
                ) : (
                  <span className='flex items-center justify-center'>
                    {' '}
                    <LockOutlinedIcon className='mr-1' fontSize='' /> Login{' '}
                  </span>
                )}
              </button>
              <span className='text-xs md:text-sm text-center mt-2 text-stone-600 font-bold pt-3 border-t-2 w-full'>
                {' '}
                <Link to='/register'>Don&apos;t have an account? </Link>
              </span>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};
