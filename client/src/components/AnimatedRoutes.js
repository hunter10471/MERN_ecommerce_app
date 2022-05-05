import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { BillingPage } from '../pages/BillingPage'
import { CartPage } from '../pages/CartPage'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { ProductPage } from '../pages/ProductPage'
import { Register } from '../pages/Register'
import { AnimatePresence } from 'framer-motion'

export const AnimatedRoutes = () => {
    const user = useSelector((state)=>state.user.currentUser);
    const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter >
    <Routes location={location} key={location.pathname} >
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<ProductPage/>} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/billing" element={<BillingPage/>} />
    <Route path="/register" element={ user ? <Navigate replace to='/' /> : <Register/>} />
    <Route path="/login" element={user ? <Navigate replace to='/' /> :<Login/>}/>
    </Routes>
    </AnimatePresence>
  )
}
