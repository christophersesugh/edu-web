import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function AuthForm({ onSubmit, rest }) {
  // const [password, setPassword] = React.useState(false);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    onSubmit({ email: email.value });
  };

  // const handleTogglePassword = () => {
  //   setPassword(!password);
  // };
  return (
    <form
      onSubmit={handleFormSubmit}
      className=" w-[100vw] md:w-[60vw] lg:w-[30vw]  flex flex-col items-center"
    >
      <img src="/favicon.svg" alt="Logo" className="w-12" />
      {/* <h2 className="text-3xl text-green-600 text-center mb-8">{formText}</h2> */}
      <div className="w-full mb-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="p-2 w-full border-2 border-green-200 bg-slate-200 rounded focus:outline-green-500"
        />
      </div>
      {/* <div className="w-full relative h-auto">
        <label htmlFor="password">Password</label>
        <input
          type={password ? "password" : "text"}
          placeholder="Password"
          id="password"
          name="password"
          className="p-2 w-full border-2 border-green-200 rounded focus:outline-green-500"
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute bg-green-200 p-2 rounded right-0 self-center text-2xl border-2 border-green-200 "
        >
          {password ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </div> */}
      <button
        type="submit"
        className="mt-2 rounded-md text-slate-100 p-2 bg-green-700 border-2 border-slate-300 self-start"
      >
        {/* {formText} */}
        Submit
      </button>
      {rest}
    </form>
  );
}
