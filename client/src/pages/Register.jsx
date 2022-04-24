import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../requestMethods';

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
    const handleSubmit = async(e) =>{
      e.preventDefault();
      const user = {
        username:username,
        email:email,
        password:password,
      };
      try {
        await axios.post(BASE_URL+`auth/register`,user)
        setSuccessMsg(true)
      } catch (error) {
        if(error.response.status === 400){
          setUserError(true);
        }else{
          setGenericError(true)
        }
      };
    }
  return (
      <div className='flex bg-gradient-to-br from-slate-100 overflow-x-hidden relative justify-center h-[110vh] sm:h-[calc(100vh_-_90px)]'>
      <div className='mx-4 mt-[5vh]'>
    <form onSubmit={handleSubmit} className='flex shadow-xl bg-white flex-col ring-primaryLight ring-2 rounded-sm p-5 sm:p-10 mx-auto' >
        <h1 className='text-2xl md:text-3xl font-heading text-center my-5 underline font-medium'>Register</h1>
        {userError && <span className='bg-red-300 py-2 px-6 rounded-md text-xs mb-2 md:text-sm text-center relative'>User already exists with the following username or email. <CloseOutlinedIcon onClick={()=>setUserError(false)} fontSize='' className='absolute top-1 right-1 cursor-pointer' /> </span>}
        {genericError && <span className='bg-red-300 py-2 px-6 text-xs rounded-md mb-2 md:text-sm text-center relative'>An error occured with your request, please try again.  <CloseOutlinedIcon onClick={()=>setGenericError(false)} fontSize='' className='absolute top-1 right-1 cursor-pointer' /></span>}
        {successMsg && <span className='bg-green-300 py-2 px-6 rounded-md text-xs mb-2 md:text-sm text-center relative'>Account successfully created, please login.  <CloseOutlinedIcon onClick={()=>setSuccessMsg(false)} fontSize='' className='absolute top-1 right-1 cursor-pointer' /></span>}
        <label className='text-sm md:text-md' htmlFor="">Username</label>
        <input required onChange={(e)=>setUsername(e.target.value)} className='placeholder:italic hover:bg-slate-100 ring-slate-200 hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' type="text" placeholder='Username' />
        <label className='text-sm md:text-md' htmlFor="">Email</label>
        <input type='email'  required onChange={(e)=>setEmail(e.target.value)} className='placeholder:italic hover:bg-slate-100 ring-slate-200 hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' placeholder='Email' />
        <label className='text-sm md:text-md' htmlFor="">Password</label>
        <div className='relative'>
        <span  onClick={()=>setVisiblePassword(!visiblePassword)} className='absolute right-4 bottom-[0.85rem] sm:bottom-[1.4rem]  cursor-pointer text-gray-500 '>{visiblePassword===true ? <VisibilityOffIcon/> : <VisibilityIcon/>}</span>
        <input required onChange={(e)=>setPassword(e.target.value)} className='placeholder:italic hover:bg-slate-100 w-full ring-slate-200 hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' type={visiblePassword === true ? 'text' : 'password'} placeholder='Password' />
        </div>
        <div className='flex items-center text-slate-600 text-[10px] mb-4 md:text-[14px]'> <LockIcon fontSize='' /> <span className='ml-1 mt-[3px]' >Password must be longer than 8 characters. </span> </div>
        <label className='text-sm md:text-md' htmlFor="">Confirm Password</label>
        <div className='relative'>
        <span onClick={()=>setVisiblePassword2(!visiblePassword2)}  className='absolute right-4 bottom-[0.85rem] sm:bottom-[1.4rem] cursor-pointer text-gray-500 '>{visiblePassword2===true ? <VisibilityOffIcon/> : <VisibilityIcon/>}</span>
        <input required onChange={(e)=>setConfirmPassword(e.target.value)} className='placeholder:italic hover:bg-slate-100 w-full ring-slate-200 hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' type={visiblePassword2 === true ? 'text' : 'password'} placeholder='Confirm Password' />
        </div>
        {(password !== confirmPassword) && <span className='text-red-600 text-xs mb-2 md:text-sm text-center'>Passwords do not match.</span> }
        <div className='max-w-[350px] mt-4 flex'>
        <input className=' w-[20px] h-[20px] cursor-pointer' type="checkbox" name="newsletter" id="" />
        <span className='text-sm md:text-md ml-2 '>Click this to recieve our monthly newsletter and our offers.</span>
        </div>
        <span className='text-sm md:text-md ml-2 my-2'>By clicking register you agree to our <u className='cursor-pointer text-blue-800 font-medium'>terms</u>  and <u className='cursor-pointer text-blue-800 font-medium'>conditions</u>.</span>
        <button className=' px-2 sm:px-4 py-2 mt-4 bg-primary hover:bg-primaryLight text-sm md:text-md '>Register</button>
        <div className='w-full flex justify-center mt-4'><div id="my-signin2" data-onsuccess="onSignIn"></div></div>
        <span className='text-sm md:text-md text-center mt-4'>Already have an account? <b className='underline ml-1 cursor-pointer'> <Link to='/login'> Login </Link></b>.</span>
    </form>
      </div>
      </div>
  )
}
