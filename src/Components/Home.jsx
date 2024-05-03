import React from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selected } from "../../Redux/SelectSlice";

const Home = () => {
  // const card1 = [{ id: 1, Name: "shujaat", Age:2, }];
  const Card = [{ id: 1, Name: "shujaat", Age:22, }];
  console.log(Card, "hello");
  const dispatch = useDispatch();
  return (
    <div className="border-solid border-2 border-blue-600">
      {Card?.map((item) => (
        <div key={item} className="border-2 border-solid border-red-600">
          <p>{item.id}</p>
          <p>{item.Name}</p>
          <p>{item.Age}</p>
          <button
            className="bg-yellow-400 p-2 rounded-lg"
            onClick={() => {
              dispatch(selected({Card}));
            }}
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
