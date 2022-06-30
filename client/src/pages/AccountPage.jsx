import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import avatar from '../images/avatar.png';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';
import { BASE_URL } from '../requestMethods';
import { Alert } from '@mui/material';
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

export const AccountPage = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  var updatedUserInfo = {};

  const [email, setEmail] = useState('');
  const [userAvatar, setUserAvatar] = useState(null);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [data, setData] = useState(null);
  const [successModal, setSuccessModal] = useState(false);
  const [failureModal, setFailureModal] = useState(false);

  email !== '' && (updatedUserInfo.email = email);
  userAvatar !== ('' || null) && (updatedUserInfo.avatar = userAvatar);
  password !== '' && (updatedUserInfo.password = password);
  username !== '' && (updatedUserInfo.username = username);
  city !== '' && (updatedUserInfo.city = city);
  postalCode !== '' && (updatedUserInfo.postalCode = postalCode);
  address !== '' && (updatedUserInfo.address = address);

  const updateAvatar = async (e) => {
    let formData = new FormData();
    formData.append('file', e);
    formData.append('upload_preset', 'ecommerce_media');
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dz79wze9e/image/upload',
      formData
    );
    setUserAvatar(res.data.url);
  };

  const updateInfo = async (e) => {
    try {
      e.preventDefault();
      await axios.put(BASE_URL + `users/${user.user._id}`, updatedUserInfo, {
        headers: { token: user.accessToken },
      });
      setSuccessModal(true);
      setTimeout(() => setSuccessModal(false), 10000);
    } catch (error) {
      setFailureModal(true);
      setTimeout(() => setFailureModal(false), 10000);
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const getUser = async () => {
        try {
          let res = await axios.get(BASE_URL + `users/${user.user._id}`, {
            headers: { token: user.accessToken },
          });
          if (res) setData(res.data);
          else throw Error;
        } catch (error) {
          navigate('/failure', { replace: true });
          console.log(error.response);
        }
      };
      getUser();
    } catch (error) {
      setFailureModal(true);
      setTimeout(() => setFailureModal(false), 10000);
      console.log(error);
    }
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } }}
      exit={{ opacity: 0, transition: { duration: 0.12, ease: 'easeIn' } }}
      className='w-fit mx-auto p-6'
    >
      <h1 className='text-lg sm:text-xl lg:text-2xl font-heading font-bold text-stone-700 capitalize'>
        Hello, {user.user.username}
      </h1>
      <h2 className='text-xs sm:text-sm lg:text-base text-stone-600'>
        Following are your account details
      </h2>
      {data ? (
        <form
          onSubmit={updateInfo}
          className='my-5 w-full mx-auto flex items-center flex-col'
        >
          <div className='flex flex-col items-center my-4 '>
            <label
              htmlFor='avatar'
              className='relative w-[80px] h-[80px] object-cover border-2 border-stone-400 cursor-pointer rounded-[50%]'
            >
              <img src={data.user.avatar || avatar} alt='avatar' />
              <AddCircleIcon
                fontSize='small'
                className='text-primary absolute bottom-1 right-0 bg-white rounded-[50%]'
              />
            </label>
            <input
              id='avatar'
              onChange={(e) => updateAvatar(e.target.files[0])}
              className='hidden'
              type='file'
              alt='avatar'
            />
          </div>
          <div className='flex lg:flex-row flex-col gap-10'>
            <div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Email
                </label>
                <input
                  autoComplete='false'
                  onChange={(e) => setEmail(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='email'
                  defaultValue={user.user.email}
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Username
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='text'
                  defaultValue={user.user.username}
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Password
                </label>
                <input
                  minLength={8}
                  onChange={(e) => setPassword(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='password'
                  defaultValue='12345678'
                />
              </div>
            </div>
            <div className='self-start w-full'>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Address
                </label>
                <textarea
                  onChange={(e) => setAddress(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='address'
                  defaultValue={data.user.address}
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Postal Code
                </label>
                <input
                  onChange={(e) => setPostalCode(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='text'
                  defaultValue={data.user.postalCode}
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  City
                </label>
                <input
                  minLength={8}
                  onChange={(e) => setCity(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='text'
                  defaultValue={data.user.city}
                />
              </div>
            </div>
          </div>
          <button className='bg-primary py-2 px-4 m-5 hover:bg-primaryLight'>
            Update
          </button>
        </form>
      ) : (
        <div className={`w-[95vw] h-[60vh] flex items-center justify-center`}>
          <CircularProgress sx={{ color: '#FF9100' }} />
        </div>
      )}
      <Alert
        style={{ display: successModal ? 'flex' : 'none', marginTop: '14px' }}
        sx={{ backgroundColor: 'lightgreen', fontWeight: '500' }}
        severity='success'
      >
        Account updated successfully
      </Alert>
      <Alert
        style={{ display: failureModal ? 'flex' : 'none', marginTop: '14px' }}
        sx={{ backgroundColor: 'lightred', fontWeight: '500' }}
        severity='error'
      >
        There was an error with your request
      </Alert>
    </motion.main>
  );
};
