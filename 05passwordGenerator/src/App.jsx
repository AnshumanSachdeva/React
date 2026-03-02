import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "!@#$%^&*()_+|}{[],.`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  // passwordGenerator() // nhi hoga bcz useCallback use kiya hai humne

useEffect(()=>{
  passwordGenerator()
}, [length, numberAllowed, characterAllowed, passwordGenerator])


  const copyPassToClipboard  = useCallback(()=>{
    passwordRef.current?.select()   //animation dene k liye
    passwordRef.current?.setSelectionRange(0, length) // range dedi kitna select krna hai
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-2 text-orange-500 bg-gray-700">
        <h1 className="text-center  text-white my-1">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="bg-white outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 shrink-0 py-0.5" onClick={copyPassToClipboard}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2"></div>
        <div className="flex items-center gap-x-3">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev); //reverse
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev); //reverse
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
