import React from "react";
import dummyData from "../assets/dummyData";

const Home = () => {
  return (
    
    <div className="flex gap-5 justify-center items-center mt-[14rem]">
      {dummyData?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center rounded-lg text-center items-center w-44 h-74 border-blue-600 border-solid border-2"
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
          <button className="bg-yellow-400 p-4 rounded-lg text-white">
            select
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
