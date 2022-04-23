import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [visiblePassword2, setVisiblePassword2] = useState(false)
        
  return (
      <>
      <div className='flex bg-gradient-to-br from-slate-100 overflow-x-hidden relative justify-center h-[110vh] sm:h-[calc(100vh_-_90px)]'>
      <div className='mx-4 mt-[5vh]'>
    <form action="" className='flex shadow-xl bg-white flex-col ring-primaryLight ring-2 rounded-sm p-5 sm:p-10 mx-auto' >
        <h1 className='text-2xl md:text-3xl font-heading text-center my-5 underline font-medium'>REGISTER</h1>
        <label className='text-sm md:text-md' htmlFor="">Username</label>
        <input className='placeholder:italic hover:bg-slate-100 ring-slate-200 hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' type="text" placeholder='Username' />
        <label className='text-sm md:text-md' htmlFor="">Email</label>
        <input className='placeholder:italic hover:bg-slate-100 ring-slate-200 hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' type="text" placeholder='Email' />
        <label className='text-sm md:text-md' htmlFor="">Password</label>
        <div className='relative'>
        <span onClick={()=>setVisiblePassword(!visiblePassword)} className='absolute right-4 bottom-[0.85rem] sm:bottom-[1.4rem]  cursor-pointer text-gray-500 '>{visiblePassword===true ? <VisibilityOffIcon/> : <VisibilityIcon/>}</span>
        <input className='placeholder:italic hover:bg-slate-100 w-full ring-slate-200 hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' type={visiblePassword === true ? 'text' : 'password'} placeholder='Password' />
        </div>
        <label className='text-sm md:text-md' htmlFor="">Confirm Password</label>
        <div className='relative'>
        <span onClick={()=>setVisiblePassword2(!visiblePassword2)}  className='absolute right-4 bottom-[0.85rem] sm:bottom-[1.4rem] cursor-pointer text-gray-500 '>{visiblePassword2===true ? <VisibilityOffIcon/> : <VisibilityIcon/>}</span>
        <input className='placeholder:italic hover:bg-slate-100 w-full ring-slate-200 hover:ring-blue-400 my-2 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:ring-blue-400 ring-2 ring-transparent' type={visiblePassword2 === true ? 'text' : 'password'} placeholder='Confirm Password' />
        </div>
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
        </>
  )
}
