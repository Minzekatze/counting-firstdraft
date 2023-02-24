import React, { useState } from "react";
import "./styles.css";
import Instructions from "./Instructions";

export default function App() {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const [count3, setcount3] = useState(0);

  function increaseCount1() {
    setcount1(count1 + 1);
  }
  function decreaseCount1() {
    setcount1(count1 - 1);
  }
  function increaseCount2() {
    setcount2(count2 + 1);
  }
  function decreaseCount2() {
    setcount2(count2 - 1);
  }
  function increaseCount3() {
    setcount3(count3 + 1);
  }
  function decreaseCount3() {
    setcount3(count3 - 1);
  }

  function increaseAll() {
    setcount1(count1 + 1);
    setcount2(count2 + 1);
    setcount3(count3 + 1);
  }

  function decreaseAll() {
    setcount1(count1 - 1);
    setcount2(count2 - 1);
    setcount3(count3 - 1);
  }

  return (
    <>
      <Instructions />
      <div class="block">
        <em>Put your counters here</em>
        <div>
          <button onClick={increaseCount1}>+</button>
          {count1}
          <button onClick={decreaseCount1}>-</button>
        </div>
        <div>
          <button onClick={increaseCount2}>+</button>
          {count2}
          <button onClick={decreaseCount2}>-</button>
        </div>
        <div>
          <button onClick={increaseCount3}>+</button>
          {count3}
          <button onClick={decreaseCount3}>-</button>
        </div>
        <button onClick={increaseAll}>increase all</button>
        <button onClick={decreaseAll}>decrease all</button>
      </div>
    </>
  );
}
