import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logout} from '../redux/apiCalls'


const Button = ({type,text}) => {
  return(
    <button className={`py-2 px-4 lg:px-6 lg:mx-2 mx-auto my-5 lg:my-0 text-sm md:text-md font-medium font-heading rounded-sm ${type==='login' ? 'text-primary' :'text-white bg-primary hover:bg-primaryLight'}   ring-primary ring-2 hover:ring-primaryLight `}>  {text} </button>
  )
}



export const Navbar = () => {
  const user = useSelector((state)=>state.user.currentUser);
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch();
  const handleLogout = () =>{
    logout(dispatch);
  };

   return (
    <div className={`flex items-center bg-white z-[100] flex-wrap p-5 sticky top-0 w-full shadow-lg overflow-hidden transition-all duration-200 ${toggle ? 'h-[50vh]' :'h-[70px]'} lg:h-auto `}>
        <h1 className='font-central mx-auto font-bold text-2xl lg:text-3xl text-primary'> <ShoppingCartIcon className='-rotate-6' fontSize='' /> <Link to='/'> Cart-it! </Link></h1>
        <div className='mx-auto hidden sm:block w-6/12 relative'>
            <input type="text" className='w-full p-2 peer focus:outline-none  focus:shadow-lg peer-hover:border-primary  border-b-2 border-primaryLight hover:border-primary ' placeholder='Search..' />
            <span className='p-2 absolute text-white peer peer-focus:bg-primary peer-hover:bg-primary bottom-0 peer-focus:shadow-lg  bg-primaryLight hover:bg-primary cursor-pointer left-[100%]'><SearchIcon/></span>
        </div>
        <div onClick={()=>setToggle(!toggle)} className=' block text-primary  lg:hidden cursor-pointer'>
        <MenuOutlinedIcon/>
        </div>
        <div className='mx-auto w-full lg:w-auto my-10 lg:my-0 flex items-center flex-col lg:flex-row '>
        {user && <div className='cursor-pointer mr-10 ml-5 flex items-center'> <img className='h-[32px] w-[32px] md:h-[42px] mx-3 md:w-[42px] rounded-[50%] object-cover' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" /> {user.user.username}</div> }
        <div className='mr-10 mb-5 lg:mb-0 mx-auto  w-full flex items-center justify-center  lg:w-auto cursor-pointer text-2xl lg:text-3xl relative'>
            <ShoppingCartOutlinedIcon fontSize='' />
            <span className='p-2 bg-primary flex items-center justify-center font-bold right-[50%] bottom-[50%] lg:right-4 lg:bottom-4 h-[24px] w-[24px] text-[10px] absolute rounded-[50%]'>68</span>
        </div>
        {user ? <button onClick={handleLogout} className=' flex items-center ml-10 my-2 text-primary hover:underline text-sm md:text-base'> <LogoutIcon className='mr-1' fontSize='medium' /> Logout</button> : (<><Link className='mx-auto' to='/register'><Button text={'SignUp'} type={'signup'}/> </Link> 
        <Link to='/login'> <Button text={'Login'} type={'login'}/> </Link> </>) }
        </div>
    </div>
  )
}
