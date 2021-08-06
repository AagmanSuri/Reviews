import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [counter, setCounter] = useState(0);
  const { id, name, job, image, text } = people;
  const btnHandeler = () => {
    setCounter((preid) => preid + 1);
  };
  return (
    <div>
      <h2>{people[counter].name}</h2>
      <button onClick={btnHandeler}>Forward</button>
    </div>
  );
};

export default Review;
