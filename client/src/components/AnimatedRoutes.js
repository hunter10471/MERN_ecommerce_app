import React from 'react';


import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { BillingPage } from '../pages/BillingPage';
import { CartPage } from '../pages/CartPage';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { ProductPage } from '../pages/ProductPage';
import { Register } from '../pages/Register';
import { AnimatePresence } from 'framer-motion';
import { ErrorPage } from '../pages/ErrorPage';
import { SuccessPage } from '../pages/SuccessPage';
import { FailurePage } from '../pages/FailurePage';
import { RecoverPage } from '../pages/RecoverPage';
import { OtpPage } from '../pages/OtpPage';
import { AccountPage } from '../pages/AccountPage';
import { OrdersPage } from '../pages/OrdersPage';

export default function AnimatedRoutes (){
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/billing' element={<BillingPage />} />
        <Route
          path='/account'
          element={user ? <AccountPage /> : <Navigate replace to='/login' />}
        />
        <Route
          path='/orders'
          element={user ? <OrdersPage /> : <Navigate replace to='/login' />}
        />
        <Route
          path='/register'
          element={user ? <Navigate replace to='/' /> : <Register />}
        />
        <Route
          path='/login'
          element={user ? <Navigate replace to='/' /> : <Login />}
        />
        <Route
          path='/success'
          element={user ? <SuccessPage /> : <Navigate replace to='/error' />}
        />
        <Route
          path='/failure'
          element={user ? <FailurePage /> : <Navigate replace to='/error' />}
        />
        <Route path='/recover' element={<RecoverPage />} />
        <Route path='/recover/otp-verify' element={<OtpPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}
