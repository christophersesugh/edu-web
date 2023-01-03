import React from "react";
import Login from "./components/login";
import Register from "./components/register";

export default function Auth() {
  const [isRegistered, setIsRegistered] = React.useState(true);
  return (
    <div className="h-auto w-screen bg-[url('/assets/images/hero-bg.svg')] bg-cover grid place-items-center py-16">
      {isRegistered ? (
        <Login isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
      ) : (
        <Register
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
        />
      )}
    </div>
  );
}
