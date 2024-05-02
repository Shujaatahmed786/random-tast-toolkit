import React from "react";
import dummyData from "../assets/dummyData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selected } from "../../Redux/SelectSlice";

const Home = () => {

  const Card = useSelector((state)=>state.select);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-black text-white flex justify-end">
        <Link to= '/Checkout'><h2 className="text-2xl">Cart</h2></Link></div>
    <div className="flex gap-5 justify-center items-center mt-[14rem]">
      {dummyData?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center rounded-lg text-center items-center w-44 h-74 border-blue-600 border-solid border-4"
        >
          <p>{item.id}</p>
          <p>{item.Name}</p>
          <p>{item.Age}</p>
          <p>{item.Education}</p>
          <p>{item.Email}</p>
          <p>{item.MobileNumber}</p>
          <p>{item.Zipcode}</p>
          <p>{item.City}</p>
          <p>{item.Country}</p>
          <p>{item.Language}</p>
          <button onClick={()=>{dispatch(selected())}} className="bg-yellow-600 p-4 rounded-lg text-white">
            select
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
