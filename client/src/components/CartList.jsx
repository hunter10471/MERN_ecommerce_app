import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from 'react-redux'
import {addProduct, removeOneProduct, removeProduct} from '../redux/cartRedux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../requestMethods';

export const CartList = () => {
    const navigate = useNavigate()
    const cart = useSelector(state=> state.cart)
    const dispatch = useDispatch()
    const handleRemove = (product) =>{
        dispatch(removeProduct({...product}))
    }

    const addProd = (product) =>{
         dispatch(addProduct(product));
    }
    const removeProd = (product) =>{
         dispatch(removeOneProduct(product));
    }
  return (
    <table className='w-full lg:w-[700px] xl:w-[1000px]'>
        <tr className='text-xs md:text-sm lg:text-base text-slate-400 uppercase'>
            <th className='sm:p-4 font-[400] lg:p-6'>Product</th>
            <th className='sm:p-4 font-[400] lg:p-6'>Price</th>
            <th className='sm:p-4 font-[400] lg:p-6'>Quantity</th>
            <th className='sm:p-4 font-[400] lg:p-6'>Total</th>
        </tr>
       { cart.products.length !== 0  ? cart.products.map(el => {
        return <tr>
            <td className='flex sm:p-4 lg:p-6 justify-center sm:flex-row flex-col items-center'><img className='rounded-[50%] object-cover w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' src={el.productImg} alt="product" />
            <div className='ml-4 flex flex-col font-medium text-sm md:text-base lg:text-lg cursor-pointer hover:text-gray-700'>
             <span onClick={()=>navigate('/product?id='+el._id)}> {el.productName} </span>
             <span className='text-slate-400 text-[10px] sm:text-xs md:text-sm mb-4'>SKU : {el._id}</span>
            </div>  
            </td>
            <td className='text-center text-sm md:text-base lg:text-lg sm:p-4 lg:p-6'>
                ${el.productPrice}
            </td>
            <td className='p-6'>
            <span className='flex justify-between mx-auto items-center border-2 my-2 py-1 px-2 w-[80px] md:w-[100px] text-base lg:text-lg'>
                 <button className='cursor-pointer disabled:text-slate-400 disabled:cursor-not-allowed' onClick={()=>removeProd(el)} > <RemoveIcon fontSize='' /></button>
                  {el.quantity}
                 <button className='cursor-pointer' onClick={()=>addProd(el)}><AddIcon  fontSize='' /></button>
                </span>
            </td>
            <td className='text-center text-sm md:text-base lg:text-lg sm:p-4 lg:p-6'>
                ${el.quantity * el.productPrice}
            </td>
            <td>
               <button onClick={()=>handleRemove(el)}> <CloseIcon  sx={{fontSize:25}} /> </button>
            </td>
        </tr>
    })     
        :  <td colSpan={4} className='text-center font-bold italic text-xl py-20 text-gray-300 uppercase '> 
            Add products to see here <AddShoppingCartIcon className='mx-2 rotate-[-12deg]' fontSize='large' />
        </td>
}


    </table>
  )
}
