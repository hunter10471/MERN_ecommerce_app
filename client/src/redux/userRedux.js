import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isFetching:false,
        Error:false,
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true;
        },
        loginSuccess:(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
            state.Error = false;

        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.Error = true;
        },
        logoutSuccess:(state)=>{
            state.isFetching = false;
            state.currentUser = null;
            state.Error = false;

        },
        logoutFailure:(state)=>{
            state.Error = true;
        },
    }
});

export const {loginStart, loginSuccess, loginFailure, logoutFailure, logoutSuccess} = userSlice.actions;
export default userSlice.reducer;