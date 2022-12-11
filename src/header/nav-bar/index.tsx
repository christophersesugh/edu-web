import React from "react";
import { FaBookmark } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdMenuBook } from "react-icons/md";
import { MainNav } from "./main-nav";
import { SideNav } from "./side-nav";

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(true);
  return (
    <>
      <MainNav setOpenNav={setOpenNav} />
      <SideNav openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
}

export const links = [
  {
    icon: <MdMenuBook />,
    name: "courses",
    link: "/courses",
  },
  {
    icon: <FaBookmark />,
    name: "about",
    link: "/#about",
  },

  {
    icon: <RiTeamFill />,
    name: "team",
    link: "/#team",
  },
];
