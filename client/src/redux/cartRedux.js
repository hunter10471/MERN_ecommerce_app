import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    products:[],
    quantity:0,
    total:0,
  },
  reducers:{
    addProduct: (state, action) =>{
      const found  = state.products.some(el => el.productName === action.payload.productName);        
      if(found) state.products.find((el,index)=>{
        if(el.productName === action.payload.productName){
          state.products[index].quantity += 1 || action.payload.quantity ;
          state.quantity += 1;
          state.total += action.payload.productPrice;
          return null;
        }
        else return null;
      });
      else {state.products.push(action.payload);
        state.quantity += action.payload.quantity;
        state.total += action.payload.productPrice * action.payload.quantity;
      }
    },
    removeProduct:(state, action) =>{
      state.quantity -= action.payload.quantity;
      state.products = state.products.filter(el => el.productName !== action.payload.productName);
      state.total -= action.payload.productPrice * action.payload.quantity;
    },
    removeOneProduct:(state, action) =>{
      state.products.find((el,index)=>{
        if(el.productName === action.payload.productName) {
          if(state.quantity > 1 && state.products[index].quantity > 1){
            state.products[index].quantity -= 1;
            state.total -= action.payload.productPrice;
            state.quantity -= 1;
          }else{
            state.quantity -= action.payload.quantity;
            state.products = state.products.filter(el => el.productName !== action.payload.productName);
            state.total -= action.payload.productPrice * action.payload.quantity;
          }
        }
        return null;
      });
    },
    resetCart:(state) =>{
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    }
  }
});

export const {addProduct, removeProduct, removeOneProduct, resetCart} = cartSlice.actions;
export default cartSlice.reducer;