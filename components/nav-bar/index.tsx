import React from "react";
import { FaBookmark } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import MainNav from "./main-nav/components/main-nav";
import SideNav from "./side-nav/components/side-nav";

function Navbar() {
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

export { Navbar };
