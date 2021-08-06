import React, { useState } from "react";
import people from "./data";
//import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [counter, setCounter] = useState(0);
  const btnHandeler = () => {
    setCounter((preid) => preid + 1);
  };
  const backwardbtnHandeler = () => {
    setCounter((preid) => preid - 1);
  };
  return (
    <div>
      <img
        style={{ height: "5rem" }}
        src={people[counter].image}
        alt="yes"
      ></img>
      <h3>Name: {people[counter].name}</h3>
      <h4>Job : {people[counter].job}</h4>
      <p>{people[counter].text}</p>

      <button onClick={btnHandeler}>Forward</button>
      <button onClick={backwardbtnHandeler}>Backward</button>
    </div>
  );
};

export default Review;
