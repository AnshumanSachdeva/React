import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../components/card.jsx";

function App() {
  const [count, setCount] = useState(0);

  let myobj = {
    username:"Anshuman",
    age:19
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl">TailwindTest</h1>
      <Card channel='Anshuman' someobj={myobj}  someArr={newArr}/>
      <Card channel='Sachdeva' />
    </>
  );
}

export default App;
