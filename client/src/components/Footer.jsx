import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';

export const Footer = () => {
  return (
    <div className=' sm:px-4 md:px-8 lg:px-12 xl:px-16 bg-slate-800 text-white'>
        <div className='flex justify-center'>
        <ul className='lg:m-12 md:m-10 sm:m-8 m-6 max-w-[160px]'>
            <li className='font-medium text-base md:text-lg tracking-wider mb-2'>About us</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Careers</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Blogs</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Our timeline</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Investor relations</li>
        </ul>
        <ul className='lg:m-12 md:m-10 sm:m-8 m-6 max-w-[160px]'>
            <li className='font-medium text-base md:text-lg tracking-wider mb-2'>Earn Money</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Become a seller on Cart-it</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Affiliate program</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Lucky draws & prizes</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Sell services on Cart-it</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Promotions & publicity</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Blog writing oppurtunities</li>
        </ul>
        <ul className='lg:m-12 md:m-10 sm:m-8 m-6 max-w-[160px]'>
            <li className='font-medium text-base md:text-lg tracking-wider mb-2'>Need Our Help?</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Cart-it is battling COVID-19</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Your account</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Your orders</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Shipping rates & policies</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Returns & replacements</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Manage your products and orders</li>
            <li className='text-xs font-light md:text-sm hover:underline cursor-pointer my-3'>Help</li>
        </ul>
        </div>
        <div className='flex flex-wrap items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 border-t-2 border-slate-600 w-full'>
            <h1 className='font-central mx-auto md:mx-20 text-white text-2xl sm:text-3xl md:text-4xl'> <ShoppingCartIcon className='-rotate-6 text-primary' fontSize='' /> Cart-it</h1>
            <div className='flex m-4'>
            <div className="mx-2 text-sm md:text-base z-10 relative">
            <LanguageIcon fontSize='' className='absolute cursor-pointer right-1 bottom-2 md:bottom-[9px]' />
            <select className="appearance-none cursor-pointer hover:shadow-xl bg-slate-800 focus:outline-none  text-white font-light border-white border-[1px] rounded-sm w-[120px] py-1 px-2 text-left" name="language" id="">
                <option selected>Language</option>
                <option value="en">English</option>
                <option value="en">Francias</option>
                <option value="es">Espanol</option>
            </select>
            </div>
            <div className="mx-2 z-10 text-sm md:text-base relative">
            <SouthAmericaIcon fontSize='' className='absolute cursor-pointer right-1 bottom-2 md:bottom-[9px] ' />
            <select className="appearance-none cursor-pointer hover:shadow-xl bg-slate-800 focus:outline-none  text-white font-light border-white border-[1px] rounded-sm w-[120px] py-1 px-2 text-left" name="language" id="">
                <option selected>Region</option>
                <option value="us">United States</option>
                <option value="as">Asia</option>
                <option value="eu">Europe</option>
                <option value="af">Africa</option>
            </select>
            </div>
        </div>
            </div>
        <p className='text-center text-[10px] md:text-xs p-2'>© 1996-2022 Cart-it is a reserved site with it's rights vested in the respective owners and affaliates.</p>
    </div>
  )
}
