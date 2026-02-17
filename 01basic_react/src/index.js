import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// html file k andar humne script toh kahi par nhi di fir yeh js ka code chal kaise raha hai??
// humare pass package.json k andar dependencies k andar ek cheej hoti hai "react-script" yehi index.js ko html file k sath link kar leti hai, Yeh cheej hum check kar skte hai inspect karke