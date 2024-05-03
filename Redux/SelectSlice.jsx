import { createSlice } from "@reduxjs/toolkit";

const SelectSlice = createSlice({
  name: "card",
  initialState:{
    cartData: null
  },
  reducers:{
    selected:(state,action)=>{
      state.cartData = action.payload
      console.log(action.payload ,'ppp')
      console.log(state.cartData ,'ppp')
    }

  }
});
export const {selected} = SelectSlice.actions
export default SelectSlice.reducer;
