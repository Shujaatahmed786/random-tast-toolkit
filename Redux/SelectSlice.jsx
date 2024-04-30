import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    Name: "shujaat",
    Age: 12,
    Education: "graduate",
    Email: "ahmed.shujaat",
    MobileNumber: 32222222222,
    Zipcode: 12,
    City: "Karachi",
    Country: "Pakistan",
    Language: "urdu",
  },
];

const SelectSlice = createSlice({
  name: "card",
  initialState,
});

export default SelectSlice.reducer;
