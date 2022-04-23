import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls';
import axios from 'axios';
import { BASE_URL } from '../requestMethods';

export const Login = () => {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState(false)
    const {Error,isFetching} = useSelector((state)=>state.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = async(e) =>{
        e.preventDefault();
        try {
           let res = await axios.get(BASE_URL+`users/public/${username}`);
           if(res){
               login(dispatch, {username, password});
               navigate('/');
           }else{
               throw 'err'; //eslint-disable-line
           }
        } catch (error) {
            setUserError(true);
        }
    }
    const LoadingAnimation = () => { 
        return(
            <svg role="status" className=" w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] text-gray-200 animate-spin dark:text-gray-600 fill-primaryLight" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    )
}
    
  return (
      <>
      <div className='flex bg-gradient-to-br from-slate-100 overflow-x-hidden relative justify-center h-[110vh] sm:h-[calc(100vh_-_90px)]'>
      <div className='mx-4 w-full mt-[5vh]'>
    <form onSubmit={onSubmit} className='flex shadow-xl min-w-[200px] max-w-[350px]  bg-white flex-col ring-primaryLight ring-2 rounded-sm p-5 sm:p-10 mx-auto' >
        <h1 className='text-2xl md:text-3xl font-heading text-center my-5 underline font-medium'>Login</h1>
        <label className='text-sm md:text-md' htmlFor="">Username</label>
        <input required onChange={(e)=>setUsername(e.target.value)} className='placeholder:italic hover:bg-slate-100 ring-slate-200  hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' type="text" placeholder='Username' />
        <label className='text-sm md:text-md' htmlFor="">Password</label>
        <div className='relative'>
        <span onClick={()=>setVisiblePassword(!visiblePassword)} className='absolute right-4 bottom-[0.85rem] sm:bottom-[1.4rem]  cursor-pointer text-gray-500 '>{visiblePassword===true ? <VisibilityOffIcon/> : <VisibilityIcon/>}</span>
        <input required onChange={(e)=>setPassword(e.target.value)} className='placeholder:italic hover:bg-slate-100 w-full ring-slate-200 hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' type={visiblePassword === true ? 'text' : 'password'} placeholder='Password' />
        </div>
        { userError && <span className='text-red-600 text-xs mb-2 md:text-sm text-center'>Username or password is incorrect.</span> }
        <div className='max-w-[350px] mb-2 flex'>
        <input className=' w-[16px] h-[20px] cursor-pointer' type="checkbox" name="remember" id="" />
        <span className='text-sm md:text-md ml-2 '>Remember me</span>
        </div>
        <span className='text-sm md:text-md mb-2'>Forgot your password ? <u className='font-medium cursor-pointer'>Recover</u>.</span>
        <button disabled={isFetching} className='disabled:hover:bg-primary disabled:cursor-wait px-2 sm:px-4 py-2 mt-4 bg-primary hover:bg-primaryLight text-sm md:text-md '> { isFetching ? <span className='flex items-center justify-center'> <LoadingAnimation/> </span> : <span className='flex items-center justify-center'> <LockOutlinedIcon className='mr-1' fontSize='' /> Login </span> }</button>
        {Error && <span className='text-red-600 text-xs md:text-sm mt-2 text-center'>An error occured, please try again.</span> }
        <div className='w-full flex justify-center mt-4'><div id="my-signin2" data-onsuccess="onSignIn"></div></div>
        <span className='text-sm md:text-md text-center mt-4'>Don't have an account? <b className='underline ml-1 cursor-pointer'> <Link to='/register'>Register </Link> </b>.</span>
    </form>
      </div>
      </div>
        </>
  )
}
