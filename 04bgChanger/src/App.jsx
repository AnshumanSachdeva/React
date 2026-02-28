import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-l bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="rounded-full py-2 outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="rounded-full py-2 outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("pink")}
            className="rounded-full py-2 outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("olive")}
            className="rounded-full py-2 outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("black")}
            className="rounded-full py-2 outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
