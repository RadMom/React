import React from "react";
import { useState } from "react";

function CounteruseState() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum((num) => num + 1);
  };

  const decrement = () => {
    setNum((num) => num - 1);
  };

  const reset = () => {
    setNum(0);
  };
  return (
    <div className="counter">
      <h2>{num}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounteruseState;
