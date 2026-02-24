import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(8);

  // let counter = 8;

  const addValue = () => {
    // counter += 1;
    // console.log("Value added");// yeh toh chal rha hai but screen pr q nhi ho rha? problem aarhi hai ui updation mein... isko krne k liye react humko kush methods deta hai jisko hooks bolte hai
    if (counter >= 20) {
      setCounter((counter = 20));
    } else {
      setCounter((counter += 1));
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      setCounter((counter = 0));
    } else {
      setCounter((counter -= 1));
    }
  };

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
