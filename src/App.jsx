import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import Checkout from "./Components/Checkout";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
