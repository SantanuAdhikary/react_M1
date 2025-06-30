import React, { useRef, useState } from "react";
import Task from "./components/Task";

const App = () => {
  let [count, setCount] = useState(0);

  let num = 0;

  // !  1st step

  let num1 = useRef(0);

  let btnRef = useRef();

  let increase = () => {
    setCount(count + 1);

    num = num + 1;
    console.log(`the value of num is : ${num}`);

    // ! incrementing useRef variable

    num1.current = num1.current + 1;

    console.log(`the value of num1 is : ${num1.current}`);
  };

  let changeColor = () => {
    console.log(btnRef.current);
    btnRef.current.style.backgroundColor = "red";
  };
  return (
    <div className="outer">
      <div className="card">
        <h1> Count is : {count}</h1>

        <h2> Num1 value is : {num1.current}</h2>

        <button onClick={increase}> increase</button>

        <div className="box">
          <button ref={btnRef}> button2 </button>

          <button onClick={changeColor}> change color</button>
        </div>
      </div>

      <Task />
    </div>
  );
};

export default App;
