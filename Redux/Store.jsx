import { configureStore } from "@reduxjs/toolkit";
import SelectReducer from "./SelectSlice";

const store = configureStore({
  reducer: {
    select: SelectReducer,
  },
});

export default store;
