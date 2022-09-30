import React from "react";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { useAuth } from "../../context/auth-context";
import { useModal } from "../../context/modal-context";
import { links } from ".";

export default function MainNav({ setOpenNav }) {
  const { user } = useAuth();
  const { isOpen, setIsOpen } = useModal();
  return (
    <nav className="flex justify-evenly items-center p-4 text-lg bg-zinc-100">
      <div>
        <Link href="/">
          <button className="focus:outline-none">
            <img src="/assets/images/logo.svg" alt="logo" />
          </button>
        </Link>
      </div>
      <ul className="flex">
        {links.map((link, index) => (
          <li className="mr-4" key={`link-${index}`}>
            <Link href={link.link}>
              <button className="hidden md:block capitalize hover:text-green-500 focus:text-green-500 focus:underline focus:outline-none text-slate-700">
                {link.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-bold capitalize flex items-center">
        <div className="hidden md:block">
          {user ? (
            <button>
              <MdOutlineLogout className="inline mr-2" />
              sign out
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <BsPersonCircle className="inline mr-2" />
              sign in
            </button>
          )}
        </div>
        <button className="md:hidden" onClick={() => setOpenNav(true)}>
          <FaBars className="text-2xl" />
        </button>
      </div>
    </nav>
  );
}
