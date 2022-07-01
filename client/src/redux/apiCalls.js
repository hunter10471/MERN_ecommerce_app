import React from 'react';
import { loginStart,loginFailure,loginSuccess, logoutSuccess, logoutFailure } from './userRedux';
import { publicRequest } from '../requestMethods';
import { Navigate } from 'react-router-dom';


export const login = async(dispatch, user) =>{
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('auth/login', user);
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