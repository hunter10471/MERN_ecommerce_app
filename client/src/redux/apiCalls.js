import { loginStart,loginFailure,loginSuccess, logoutSuccess, logoutFailure } from "./userRedux";
import { publicRequest } from "../requestMethods";

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
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutFailure());
        return error;
    }
};