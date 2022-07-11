import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../redux/cartRedux';
import { Helmet } from 'react-helmet-async';


import img from '../images/shoe.jpg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const STRIPE_PUBLIC =
  'pk_test_51JgXuYSJbpeK7y2B8gp14PC5o6QdeofhURiwQQzdGVH3OASYZWqGIFyCzlOrLofvenHL1ZHMq6zWTquHRRaAC29w00wqlrxBxK';

export const BillingPage = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const [billingAddress, setBillingAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [vat, setVatNumber] = useState('');
  const [companyName, setCompanyName] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [stripeToken, setStripeToken] = useState(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const token = (token) => {
    setStripeToken(token);
  };

  const order = {
    userId: user.user._id,
    products: cart.products,
    amount: cart.total + (cart.total * 21) / 100,
    billingAddress: billingAddress,
    city: city,
    country: country,
    zipCode: zipCode,
    companyName: companyName,
    paymentMode: 'card',
    paymentStatus: 'pending',
    vatNumber: vat,
  };

  useEffect(() => {
    const stripeRequest = async () => {
      await axios.post(
        `/api/payment/${user && user.user._id}`,
        {
          tokenId: stripeToken.id,
          amount: (cart.total + 20) * 100,
          description: stripeToken.card.id,
        },
        { headers: { token: user.accessToken } }
      );
      try {
        await axios.post(`/api/orders/${user && user.user._id}`, order, {
          headers: { token: user.accessToken },
        });
        dispatch(resetCart());
        navigate('/success', { replace: true });
      } catch (error) {
        navigate('/failure', { replace: true });
        console.log(error);
      }
    };
    stripeToken && stripeRequest();
    window.scrollTo(0, 0);
  }, [stripeToken, cart.total]);

  useEffect(() => {
    if (cart.total > 0) {
      if (billingAddress !== '' && zipCode !== '') {
        if (city !== '' && country !== '') {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      } else {
        setDisabled(true);
      }
    } else {
      setDisabled(true);
    }
  }, [zipCode, billingAddress, country, city, cart.total]);

  return (<>
    <Helmet>
      <title>{`Billing ${user && ` - ${user.user.username}`} - Cart-it`}</title>
      <meta
        name='description'
        content='Checkout now to get your favourite products delivered at your doorstep!'
      />
    </Helmet> 
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } }}
      exit={{ opacity: 0, transition: { duration: 0.12, ease: 'easeIn' } }}
      className='px-2 my-10'
    >
      <Link to='/cart'>
        <span className='flex items-center hover:underline hover:text-blue-600 text-xs sm:text-sm my-10 font-thin px-5 sm:mx-10 md:px-20'>
          <KeyboardBackspaceIcon className='mr-2' fontSize='medium' />
          Back to cart
        </span>
      </Link>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-heading font-medium my-5 px-5 sm:mx-10 md:px-20'>
        Billing Info
      </h1>
      <div className='flex justify-around flex-col sm:flex-row '>
        <form className='w-full px-2 max-w-[1000px]  sm:mx-4 md:px-8 lg:px-12 xl:px-16'>
          <div className='flex flex-col'>
            <h2 className='text-base lg:text-lg font-medium mt-10 mb-2'>
              Billing Details
            </h2>
            <div className='flex mb-2 lg:my-2 lg:flex-row flex-col '>
              <div className='flex w-full my-2 lg:my-0 lg:mr-4 flex-col'>
                <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>
                  email
                </label>
                <input
                  type='email'
                  className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2'
                  placeholder='Enter Email'
                />
              </div>
              <div className='flex w-full lg:ml-4 flex-col'>
                <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>
                  company name
                </label>
                <input
                  onChange={(e) => setCompanyName(e.target.value)}
                  type='text'
                  className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2'
                  placeholder='Enter Company Name'
                />
              </div>
            </div>
            <div className='flex my-4 lg:my-2 lg:flex-row flex-col '>
              <div className='flex w-full my-2 lg:my-0 lg:mr-4 flex-col'>
                <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>
                  vat number
                </label>
                <input
                  onChange={(e) => setVatNumber(e.target.value)}
                  type='text'
                  className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2'
                  placeholder='Enter VAT Number'
                />
              </div>
              <div className='flex w-full lg:ml-4 flex-col'>
                <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>
                  billing address
                </label>
                <input
                  onChange={(e) => setBillingAddress(e.target.value)}
                  type='address'
                  className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2'
                  placeholder='Enter Billing Address'
                />
              </div>
            </div>
            <div className='flex my-4 lg:my-2 lg:flex-row flex-col '>
              <div className='flex w-full my-2 lg:my-0 lg:mr-4 flex-col'>
                <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>
                  zip code
                </label>
                <input
                  onChange={(e) => setZipCode(e.target.value)}
                  type='text'
                  className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2'
                  placeholder='Enter ZIP Code'
                />
              </div>
              <div className='flex w-full lg:ml-4 flex-col'>
                <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>
                  city
                </label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type='text'
                  className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2'
                  placeholder='Enter City'
                />
              </div>
            </div>
            <div className='flex w-full my-2 flex-col'>
              <label className='uppercase text-slate-400 tracking-wider font-medium text-[10px] md:text-xs my-2'>
                country
              </label>
              <input
                onChange={(e) => setCountry(e.target.value)}
                type='text'
                className=' px-2 transition-all duration-200 focus:border-blue-400 hover:border-blue-400 sm:px-4 w-full py-2 max-w-[500px]  text-sm lg:text-base focus:outline-none border-2'
                placeholder='Enter Country'
              />
            </div>
          </div>
          <h2 className='text-sm md:text-base lg:text-lg font-medium mt-10 mb-4'>
            Delivery Details
          </h2>
          <input
            type='checkbox'
            name='address'
            defaultChecked
            className='w-[16px] mr-4 h-[16px]'
            id=''
          />
          <span>Same as billing address</span>
          <button className='px-4 py-2 block my-10 border-2 font-medium hover:border-primaryLight hover:text-primaryLight text-primary border-primary text-sm sm:text-base w-[120px] transition-all rounded'>
            Save
          </button>
        </form>
        <div className='flex flex-col mx-auto sm:mx-10  lg:mr-5 my-10 lg:my-0 md:max-w-[300px] lg:max-w-[400px] w-[80%]'>
          <div className='flex flex-col p-4 lg:p-6 bg-gray-100'>
            <h2 className='font-medium text-base md:text-lg lg:text-xl'>
              Order Summary
            </h2>
            <span className='my-2 text-sm text-slate-400 flex justify-between'>
              Item(s) total{' '}
              <span className='text-black font-medium'>{cart.quantity}</span>{' '}
            </span>
            <span className='my-2 text-sm text-slate-400 flex justify-between'>
              Price{' '}
              <span className='text-black font-medium'>${cart.total}</span>{' '}
            </span>
            <span className='my-2 text-slate-400 text-sm flex justify-between '>
              VAT (21%){' '}
              <span className='text-black font-medium'>
                + ${(cart.total * 21) / 100}
              </span>
            </span>
          </div>
          <div className='flex flex-col p-4 lg:p-6  bg-gray-100 mt-2'>
            <span className='mb-2 text-sm text-slate-400 flex'>
              Total Price{' '}
            </span>
            <span className='font-medium text-sm flex items-center justify-between '>
              ${cart.total + (cart.total * 21) / 100}
              <StripeCheckout
                name='Cart-it'
                description='Bring out the best in you!'
                email={user.user.email}
                allowRememberMe={true}
                image={img}
                amount={(cart.total + (cart.total * 21) / 100) * 100}
                token={token}
                stripeKey={STRIPE_PUBLIC}
              >
                <button
                  disabled={disabled}
                  className='py-2 px-6 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 bg-primary hover:bg-primaryLight text-white rounded-sm'
                >
                  Pay
                </button>
              </StripeCheckout>
            </span>
          </div>
        </div>
      </div>
    </motion.main>
  </>
  );
};
