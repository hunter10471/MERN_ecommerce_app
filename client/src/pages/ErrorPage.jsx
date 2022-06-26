import React from 'react'
import { Link } from 'react-router-dom'
import errorSvg from '../images/404.svg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const ErrorPage = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <img className='w-[80%] h-[40%]' src={errorSvg} alt='error-404' />
        <h1 className='font-heading font-bold text-stone-600 text-xl my-4'>Oops...looks like you wandered far away</h1>
        <Link to='/'><span className='flex items-center underline text-blue-600 text-sm sm:text-base my-2 font-thin px-5 sm:mx-10 md:px-20'><KeyboardBackspaceIcon className='mr-2' fontSize='medium' />Take me home</span></Link>
    </div>
  )
}
