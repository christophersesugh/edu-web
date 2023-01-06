import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsPersonCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { IoIosMoon } from "react-icons/io";
import { BsSun } from "react-icons/bs";
import { links } from "../..";
import DropDown from "./drop-down";
import { useTheme } from "utils/hooks/use-theme";
import { useAuth } from "context/auth-context";

export default function MainNav({
  setOpenNav,
}: {
  setOpenNav: (openNav: boolean) => void;
}) {
  const [dropDown, setDropDown] = React.useState(false);
  const [colorTheme, setTheme] = useTheme();
  const [darkMode, setDarkMode] = React.useState(
    colorTheme === "light" ? true : false
  );
  const toggleThemeMode = React.useCallback(() => {
    setTheme(colorTheme);
    setDarkMode(!darkMode);
  }, [colorTheme, darkMode, setTheme]);
  const { user, logout } = useAuth();
  return (
    <>
      <nav
        className={`flex justify-between items-center dark:bg-zinc-400 p-4 text-lg bg-zinc-100 px-8 lg:px-12 h-[80px] w-auto`}
      >
        <div>
          <Link href="/">
            <button className="focus:outline-none h-inherit w-auto">
              <Image
                src={
                  darkMode
                    ? "/assets/images/logo-light.svg"
                    : "/assets/images/logo.svg"
                }
                width={150}
                height={80}
                alt="logo"
                className="animate-pulse h-inherit w-inherit"
              />
            </button>
          </Link>
        </div>
        <ul className="flex">
          {links.map((link: any, index: number) => (
            <li className="mr-8" key={`link-${index}`}>
              <Link href={link.link}>
                <button className="transition hidden md:block capitalize hover:text-green-500 focus:text-green-500 focus:underline focus:outline-none text-slate-700">
                  {link.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-bold capitalize flex items-center">
          {/* drop down button */}
          <button
            className="mr-4 p-1 bg-zinc-400 rounded-full"
            onClick={toggleThemeMode}
          >
            {darkMode ? (
              <BsSun className="text-2xl text-slate-50" />
            ) : (
              <IoIosMoon className="text-2xl" />
            )}
          </button>
          <div className="hidden md:block">
            {user ? (
              <button
                className="text-3xl"
                onClick={() => setDropDown(!dropDown)}
              >
                <RxDropdownMenu />
              </button>
            ) : (
              <Link href="/auth">
                <button>
                  <BsPersonCircle className="inline mr-2" />
                  sign in
                </button>
              </Link>
            )}
          </div>
          <button className="md:hidden" onClick={() => setOpenNav(true)}>
            <FaBars className="text-2xl" />
          </button>
        </div>
      </nav>
      {dropDown && user ? <DropDown user={user} logout={logout} /> : null}
    </>
  );
}
