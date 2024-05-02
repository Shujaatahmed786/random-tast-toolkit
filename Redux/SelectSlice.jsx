import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../src/assets/dummyData";

const initialState = dummyData

const SelectSlice = createSlice({
  name: "card",
  initialState,
  reducers:{
    selected:(state,action)=>{
      console.log(state, 'hellostate');
      console.log(action, 'helloaction')
    }

  }
});
export const {selected} = SelectSlice.actions
export default SelectSlice.reducer;
