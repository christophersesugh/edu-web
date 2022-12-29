import React from "react";
import Login from "./components/login";
import Register from "./components/register";

export default function Auth() {
  const [isUser, setIsUser] = React.useState(true);
  return (
    <div>
      {isUser ? <Login /> : <Register />}
      <button>user</button>
    </div>
  );
}
