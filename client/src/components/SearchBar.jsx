import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { BASE_URL } from '../requestMethods';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CloseIcon from '@mui/icons-material/Close';

export const SearchBar = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [width, setWidth] = useState(false)
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await axios.get(BASE_URL+'products/search?name='+value);
            setData(res.data);
        }
        fetchData();
      },[value])
    return (
    <div  className={`z-[100] absolute sm:left-[180px] md:left-[200px] lg:left-[250px] xl:left-[300px] top-[25%]  hidden lg:block transition-all duration-200 ease-in-out ${width ? 'w-4/12' : 'w-2/12'}`}>
    <div  onFocus={()=>setWidth(true)} onBlur={()=>{setWidth(false)}}>
    <input  onChange={(e)=>setValue(e.target.value)} type="text" className='w-full p-2 peer focus:outline-none  focus:shadow-sm peer-hover:border-primary  border-b-2 border-primaryLight hover:border-primary ' placeholder='Search..' />
    <span  onClick={()=>setValue('')} className={` ${value==='' ? 'hidden' : 'absolute'} right-[4px] bottom-[10px] text-slate-600 cursor-pointer `}><CloseIcon/></span>
    </div>
    <span className='p-2 absolute text-white peer peer-focus:bg-primary peer-hover:bg-primary bottom-0 peer-focus:shadow-lg  bg-primaryLight hover:bg-primary cursor-pointer left-[100%]'><SearchIcon/></span>
    <div  className={` ${value === '' ? 'hidden' : 'flex'} flex-col justify-center w-full absolute bg-white border-2 rounded z-[100]  max-h-[50vh] overflow-y-auto p-2 pb-0`}>
       { data.product ? ( data.product.length > 0 ? data.product.map(el => {
            return <Link to={'product?id='+el._id}> <span className='flex items-center justify-between hover:bg-slate-100  px-1 py-4 border-b-2 '>
                    <div className='flex items-center font-medium'>
                    <img className='w-[48px] h-[48px] rounded mr-2 object-cover' src={el.productImg} alt="product" />
                    <h2 className='text-sm'>{el.productName}</h2>
                    </div>
                    <Rating name="half-rating" size='small' defaultValue={2.5} precision={0.5} readOnly />
                </span>
                </Link>
        }) : <span className='flex items-center  p-2 border-b-2 last:border-b-0'>
            <h2 className='text-sm font-medium capitalize'>No products found</h2>
            </span>)
        : ''    
}
        </div>
    </div>
  )
}
