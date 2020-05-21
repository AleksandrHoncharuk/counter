import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState({
    num: 0
  });

  const plus = () => {
    counter.num++;

    setCounter({ ...counter, num: counter.num });
  };

  const minus = () => {
    counter.num--;
    setCounter({ ...counter, num: counter.num-- });
  };

  return (
    <div className="counter-wrapper">
      <button className="btn btn-minus" onClick={minus}>
        -
      </button>
      <h3>{counter.num}</h3>
      <button className="btn btn-plus" onClick={plus}>
        +
      </button>
    </div>
  );
}
