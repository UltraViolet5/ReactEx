import React from "react";
import ReactDOM from "react-dom/client";

// window.React = React
// window.ReactDOM = ReactDOM

const root = ReactDOM.createRoot(document.getElementById("root")!);

const users = [
  {
    id: "123",
    name: "Alice",
    color: "red",
    pet: { name: "Cat" },
  },
  {
    id: "234",
    name: "Bob",
    color: "blue",
    pet: { name: "Dog" },
  },
  {
    id: "345",
    name: "Kate",
    color: "green",
  },
];

const user = users[1];

const vdiv = React.createElement(
  "div",
  {
    id: user.id,
    className: "placki",
    style: { color: user.color },
  },
  user.pet
    ? React.createElement("p", null, `${user.name} has a ${user.pet.name}`)
    : React.createElement("p", null, `${user.name} has no pet`)
);

root.render(vdiv);

// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
