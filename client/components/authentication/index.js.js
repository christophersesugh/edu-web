import React from "react";
import Link from "next/link";
import Google from "./google";
import Github from "./github";
import Facebook from "./facebook";
import Yahoo from "./yahoo";
import { useModal } from "../../context/modal-context";
import { useAuth } from "../../context/auth-context";

export default function Auth() {
  const { setIsOpen, isOpen } = useModal();
  const {
    loginWithGitHub,
    loginWithGoogle,
    loginWithFacebook,
    loginWithYahoo,
  } = useAuth();
  const handleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div className="max-w-md flex flex-col items-center justify-center">
      <img src="/favicon.svg" alt="logo" className="w-16 mb-4" />
      <p className="text-2xl mb-8 capitalize text-stone-800">sign in with</p>
      <div className="flex gap-12 w-full bg-slate-200 p-8 rounded justify-center">
        <Google onClick={loginWithGoogle} />
        <Github onClick={loginWithGitHub} />
        <Facebook onClick={loginWithFacebook} />
        <Yahoo onClick={loginWithYahoo} />
      </div>
      <p className="mt-4 text-center text-stone-800">
        By signing in, you agree to our{" "}
        <Link href="/terms-of-service">
          <button className="capitalize text-slate-200" onClick={handleIsOpen}>
            terms of service
          </button>
        </Link>{" "}
        and{" "}
        <Link href="privacy-policy">
          <button className="capitalize text-slate-200" onClick={handleIsOpen}>
            privacy policy.
          </button>
        </Link>
      </p>
    </div>
  );
}
