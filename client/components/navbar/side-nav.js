import Link from "next/link";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { useAuth } from "../../context/auth-context";
import { sideLinks } from ".";

export default function SideNav({ openNav, setOpenNav } = {}) {
  const { user } = useAuth();
  return (
    <>
      {openNav ? (
        <nav className="max-w-sm w-[300px] fixed right-0 top-0 p-4 flex flex-col items-start justify-start h-full bg-green-700 md:hidden origin-right z-10">
          <button
            onClick={() => setOpenNav(false)}
            className="self-end mr-2 border-2 px-2 text-xl text-slate-200 border-red-700 rounded"
          >
            &times;
          </button>
          <ul className="m-8">
            {sideLinks.map((link, index) => (
              <li
                key={`link-${index}`}
                className="mb-4 text-xl text-slate-200 hover:text-slate-300"
              >
                <Link href={link.link}>
                  <button
                    className="capitalize flex items-center"
                    onClick={() => setOpenNav(false)}
                  >
                    <span className="mr-2"> {link.icon}</span> {link.name}
                  </button>
                </Link>
              </li>
            ))}
            <li className="mb-4 text-xl text-slate-200 hover:text-slate-300">
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
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}
