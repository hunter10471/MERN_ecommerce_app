import React from 'react';
import { loginStart,loginFailure,loginSuccess, logoutSuccess, logoutFailure } from './userRedux';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


export const login = async(dispatch, user) =>{
  dispatch(loginStart());
  try {
    const res = await axios.post('/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
    return error;
  }
};

export const logout = async(dispatch) =>{
  try { 
    <Navigate to='/login' />;
    dispatch(logoutSuccess());
    return;
  } catch (error) {
    dispatch(logoutFailure());
    return error;
  }
};