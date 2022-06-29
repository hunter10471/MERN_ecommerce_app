import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../images/avatar.png'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/apiCalls';
import CloseOutlined from '@mui/icons-material/CloseOutlined';

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logoutModal, setLogoutModal] = React.useState(false)
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const user = useSelector((state)=>state.user.currentUser)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () =>{
    logout(dispatch);
    setLogoutModal(true);
    setTimeout(()=>{
     setLogoutModal(false)
    },5000)
  };

  const CustomButton = ({type,text}) => {

    return(
      <button className={`py-2 px-4 lg:px-6 lg:mx-2  my-2 lg:my-0 text-sm md:text-md font-medium font-heading rounded-sm ${type==='login' ? 'text-primary' :'text-white bg-primary hover:bg-primaryLight'}   ring-primary ring-2 hover:ring-primaryLight `}>  {text} </button>
    )
  }
  
  

  return (
    <div>
     { user ? <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <span className='flex items-center text-primary capitalize'>
       {user && <img className='rounded-[50%] h-[30px] w-[30px] object-cover  mr-2 ' src={user.user.avatar || avatar } alt='avatar' /> }
       {user && user.user.username}
        </span>
        </Button> :
        <span className='flex flex-col lg:flex-row items-center justify-center'>
        <Link className='' to='/register'><CustomButton text={'SignUp'} type={'signup'}/> </Link> 
        <Link to='/login'> <CustomButton text={'Login'} type={'login'}/> </Link>
         </span>
      }
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <Link to='/account'> <MenuItem onClick={handleClose}><AccountCircleIcon className='mr-2 text-stone-600' /> My account</MenuItem> </Link>
        <Link to='/orders' ><MenuItem onClick={handleClose}><LocalShippingIcon className='mr-2 text-stone-600 ' /> My Orders</MenuItem> </Link> 
        <MenuItem onClick={handleClose}>
        <button onClick={handleLogout}> <LogoutIcon className='mr-2 text-stone-600' /> Logout</button>
        </MenuItem>
      </Menu>
      { logoutModal && <span className='w-[250px] bg-green-300 border-green-500 border-2 py-2 px-6 rounded-md text-xs mb-2 md:text-sm text-center absolute bottom-0 left-[calc(50%_-_115px)] '>Logged out successfully. <CloseOutlined onClick={()=>setLogoutModal(false)} fontSize='' className='absolute top-1 right-1 cursor-pointer' /></span>}
    </div>
  );
}
