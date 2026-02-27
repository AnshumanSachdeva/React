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
      // setCounter((counter += 1));
      // setCounter((counter += 1));
      // setCounter((counter += 1));
      // setCounter((counter += 1));
      // Agar counter ko bar bar +=1kar rhe hai jaise upar kiya toh vo ek hi bar hoga. Jaise is case mein counter ki value suppose 8 hai aur mai +1 kiya 4 bar toh vo ek hi bar hoga .ie. value 12 ki jagah 9 hogi. Yeh useState ki vjh se hota hai, actually vo kya krta hai ki yeh charo statement ek hi batch mein jati hai aur vo dekhta hai ki sab ek hi kaam krne ki bat kr rhe hai isliye vo ek var hi krta hai.

      setCounter((prevCounter)=> prevCounter+1) // setCounter k andar ek callback milta hai jo vo value return krke deta hai jo update hone se pahle thi and hum usko use karke update kr rhe hai.
      setCounter((prevCounter)=> prevCounter+1)
      setCounter((prevCounter)=> prevCounter+1) // ab chalega aaram se
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
