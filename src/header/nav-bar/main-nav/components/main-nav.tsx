import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { links } from "../..";
import DropDown from "./drop-down";

export function MainNav({ setOpenNav }) {
  const [dropDown, setDropDown] = React.useState(false);
  const user = {
    email: "christohybrid185@gmail.com",
  };
  return (
    <>
      <nav className="flex justify-between items-center p-4 text-lg bg-zinc-100 px-8 lg:px-12">
        <div>
          <Link to="/">
            <button className="focus:outline-none">
              <img src="/assets/images/logo.svg" alt="logo" />
            </button>
          </Link>
        </div>
        <ul className="flex">
          {links.map((link, index) => (
            <li className="mr-8" key={`link-${index}`}>
              <Link to={link.link}>
                <button className="transition hidden md:block capitalize hover:text-green-500 focus:text-green-500 focus:underline focus:outline-none text-slate-700">
                  {link.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-bold capitalize flex items-center">
          <div className="hidden md:block">
            {user ? (
              <button className="text-3xl" onClick={() => setDropDown(!dropDown)}>
                <RxDropdownMenu />
              </button>
            ) : (
              <button>
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
      {dropDown ? <DropDown /> : null}
    </>
  );
}
