import React from "react";
import { useState } from "react";
import "./Counter.css";

function Counter() {
  let count = 0;
  const [currentstate, updatestate] = useState(count);
  const handleclick = () => {
    updatestate(currentstate + 1);
  };

  let number = 1; 
  const [firststate,newstate] = useState(number); 
  const clickme = () => {

    newstate(firststate + 1 );

  };

  return (
    <>
      <div className="Counter_parent">
        <div className="main-div">
          <h1> this is a Counter </h1>
          <button onClick={handleclick}>{currentstate}</button>
          <button onClick={clickme}> {firststate} </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
