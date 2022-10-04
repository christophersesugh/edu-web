import React from "react";
import Link from "next/link";
import Google from "./google";
import { useModal } from "../../context/modal-context";
import { useAuth } from "../../context/auth-context";
import AuthForm from "./auth-form";

export default function Auth() {
  const { setIsOpen, isOpen } = useModal();
  const [register, setRegister] = React.useState(false);
  const { loginWithGoogle, login, signin } = useAuth();
  const handleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div className="max-w-md flex flex-col items-center justify-center">
      <img src="/favicon.svg" alt="logo" className="w-16 -mt-6 mb-2" />
      <p className="text-2xl mb-8 capitalize text-stone-800">
        {register ? "Register" : "Login"}
      </p>
      <div className="flex flex-col  w-full p-2 rounded justify-center items-center">
        {register ? (
          <AuthForm onSubmit={signin} />
        ) : (
          <AuthForm onSubmit={login} />
        )}
        <div>
          {register ? (
            <>
              Already have an account?{" "}
              <button onClick={() => setRegister(false)} className="underline">
                Login
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button onClick={() => setRegister(true)} className="underline">
                Register
              </button>
            </>
          )}
        </div>
      </div>
      <p className="mt-4 text-center text-stone-800 border-t-2 pt-2">
        By signing in, you agree to our{" "}
        <Link href="/terms-of-service">
          <button className="capitalize text-slate-200" onClick={handleIsOpen}>
            terms of service
          </button>
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy">
          <button className="capitalize text-slate-200" onClick={handleIsOpen}>
            privacy policy.
          </button>
        </Link>
      </p>
    </div>
  );
}
