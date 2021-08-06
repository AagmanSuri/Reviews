import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [counter, setCounter] = useState(0);
  const forwardbtnHandeler = () => {
    if (counter === 3) {
      setCounter(0);
    } else {
      setCounter((preid) => preid + 1);
    }
  };
  const backwardbtnHandeler = () => {
    if (counter === 0) {
      setCounter(people.length - 1);
    } else {
      setCounter((preid) => preid - 1);
    }
  };
  const surpriseHandeler = () => {
    const randno = Math.floor(Math.random() * people.length);
    setCounter(randno);
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
      <button onClick={backwardbtnHandeler}>
        <FaChevronLeft />
      </button>
      <button onClick={forwardbtnHandeler}>
        <FaChevronRight />
      </button>
      <button onClick={surpriseHandeler}>SurpriseMe</button>
    </div>
  );
};

export default Review;
