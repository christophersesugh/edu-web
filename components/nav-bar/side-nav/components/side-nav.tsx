import React from "react";
import Link from "next/link";
import { MdOutlineLogout } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { SideBar } from "../../../../components/side-bar";
import { links } from "../..";

type SideNavProps = {
  openNav: boolean;
  setOpenNav: (openNav: boolean) => void;
};

export default function SideNav({ openNav, setOpenNav }: SideNavProps) {
  const user = true;
  return (
    <SideBar openNav={openNav} setOpenNav={setOpenNav} position="right">
      <ul className="m-8">
        {links.map((link, index) => (
          <li
            key={`link-${index}`}
            className="mb-8 text-xl text-slate-200 hover:text-slate-300"
          >
            <Link href={link.link}>
              <button
                className="transition capitalize flex items-center"
                onClick={() => setOpenNav(false)}
              >
                <span className="mr-2"> {link.icon}</span> {link.name}
              </button>
            </Link>
          </li>
        ))}
        <li className="mb-4 text-xl text-slate-200 hover:text-slate-300">
          {user ? (
            <div className="flex flex-col gap-5">
              <Link href="/profile">
                <BsPersonCircle className="inline mr-2" />
                profile
              </Link>
              <button>
                <MdOutlineLogout className="inline mr-2" />
                sign out
              </button>
            </div>
          ) : (
            <button>
              <BsPersonCircle className="inline mr-2" />
              sign in
            </button>
          )}
        </li>
      </ul>
    </SideBar>
  );
}
