import React from "react";

function Card({channel ="Me"}) { // we can also do function Card(props)
  // console.log("props: ", props); 
  console.log(channel); // if we use function card(props) the we can do it as this: console.log(props.channel);
  
  return (
    <>
      
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
            
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="/src/assets/react.svg"
          />
        </div>
        <div className="flex">
          <span className="text-2xl font-medium">{channel} Warfare</span>
          <span>The Anti-Patterns</span>
        </div>
      </div>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
            
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="/src/assets/react.svg"
          />
        </div>
        <div className="flex">
          <span className="text-2xl font-medium">{channel || "Hello"} Warfare</span> {/*added a default value*/}
          <span>The Anti-Patterns</span>
        </div>
      </div>
      
    </>
  );
}

export default Card;
