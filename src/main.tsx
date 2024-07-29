import React from "react";
import ReactDOM from "react-dom/client";

// window.React = React
// window.ReactDOM = ReactDOM

const root = ReactDOM.createRoot(document.getElementById("root")!);

interface User {
  id: string;
  name: string;
  color: string;
  pet?: {
    name: string;
  };
}

const users: User[] = [
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

// const user: User = users[1];
const user = users[1];

type Props = {
  user: User;
};

const UserProfile = (props: Props) => {
  const user = props.user;

  return React.createElement(
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
};

const UsersList = (props: { users: User[] }) => {
  const users = props.users;

  return React.createElement(
    "ul",
    null,
    users.map((user) =>
      // React.createElement("li", { key: user.id }, UserProfile({ user }))
      React.createElement("li", { key: user.id }, React.createElement(UserProfile,{ user }))
    )
  );
};

// console.log(UsersList({ users })); // UserProfile

root.render(UsersList({ users }));

// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
