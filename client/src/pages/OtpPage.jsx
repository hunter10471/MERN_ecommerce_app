import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import otpSvg from '../images/otp.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Filter4Icon from '@mui/icons-material/Filter4';
import LockIcon from '@mui/icons-material/Lock';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import axios from 'axios';
import { BASE_URL } from '../requestMethods';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
export const OtpPage = () => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const email = useLocation().search.split('=')[1]
  const [otp, setOtp] = useState(null)
  const [password, setPassword] = useState('')
  const [visiblePassword, setVisiblePassword] = useState(false)
  const changePass = async(e) =>{
    e.preventDefault()
    try {
      await axios.post(BASE_URL+'auth/change-password',{email: email,otpCode: otp,password: password})
      setSuccess(true)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center relative'>
        <img className='w-[80%] h-[20%] mb-5' src={otpSvg} alt='otp' />
        <h1 className='font-heading font-bold text-center text-stone-600 text-sm  sm:text-base lg:text-xl mt-2'>Check your email for verification 4-digit OTP</h1>
        <h2 className='text-center text-stone-500 text-[10px]  sm:text-xs lg:text-sm my-2'>Enter OTP we sent to your registered email and update your password</h2>
        <form className='flex flex-col' onSubmit={changePass} >
        <div>
        <label className=' text-stone-500 mr-2' htmlFor=""><Filter4Icon/></label>
        <input onChange={(e)=>setOtp(e.target.value)} required className='placeholder:italic hover:bg-slate-100 border-2 hover:border-blue-400 my-2 transition-all duration-200  text-sm md:text-md  px-2 sm:px-4 min-w-[250px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent' type='number' placeholder='0000' />
        </div>
        <div className='relative'>
        <span onClick={()=>setVisiblePassword(!visiblePassword)} className='absolute right-4 bottom-[0.95rem] sm:bottom-[1.5rem]  cursor-pointer text-gray-500 '>{visiblePassword===true ? <VisibilityOff fontSize='small' /> : <Visibility fontSize='small' />}</span>
        <label className=' text-stone-500 mr-2' htmlFor=""><LockIcon/></label>
        <input required onChange={(e)=>setPassword(e.target.value)} className='placeholder:italic hover:bg-slate-100 border-2 hover:border-blue-400 my-2 transition-all duration-200 sm:my-4 text-sm md:text-md  px-2 sm:px-4 min-w-[250px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent' type={visiblePassword === true ? 'text' : 'password'} placeholder='New Password' />
        </div>
        <button className='px-2 w-fit self-center my-2 text-xs sm:text-sm sm:px-4 py-2 bg-primary hover:bg-primaryLight'>Update my password</button>
        </form>
        {error && <span className='bg-red-300 py-2 px-6 text-xs border-red-500 border-2 rounded-md my-2 md:text-sm text-center relative'>An error occured with your request, please try again.  <CloseOutlined onClick={()=>setError(false)} fontSize='' className='absolute top-1 right-1 cursor-pointer' /></span>}
        {success && <><span className='bg-green-300 border-green-500 border-2 py-2 px-6 rounded-md text-xs my-2 md:text-sm text-center relative'>Password updated successfully, please login.  <CloseOutlined onClick={()=>setSuccess(false)} fontSize='' className='absolute top-1 right-1 cursor-pointer' /></span>
        <Link to='/login' ><span className='flex items-center underline text-blue-600 text-xs sm:text-sm my-10 font-thin px-5 sm:mx-10 md:px-20'>Login to your account now <ArrowForwardIcon fontSize='small' /></span></Link>
        </>
        }
    </div>
  )
}
