import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/AnshumanSachdeva")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

    const data = useLoaderData()
  return (
    <div className="text-center m-4 bg-gray-500 text-white p4 text-3xl">
      Github Followers: {data.followers}
      <img className="w-50" src={data.avatar_url} alt="Git picture" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/AnshumanSachdeva")
      return response.json()
}