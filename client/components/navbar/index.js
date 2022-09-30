import React from "react";
import { FaBookmark, FaStar } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import MainNav from "./main-nav";
import SideNav from "./side-nav";
import { MdMenuBook } from "react-icons/md";

export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  return (
    <>
      <MainNav setOpenNav={setOpenNav} />
      <SideNav openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
}

export const links = [
  {
    name: "about",
    link: "/#about",
  },
  {
    name: "testimonials",
    link: "/#testimonials",
  },
  {
    name: "team",
    link: "/#team",
  },
  {
    name: "courses",
    link: "/courses",
  },
  {
    name: "enroll",
    link: "/enroll",
  },
];

export const sideLinks = [
  {
    icon: <FaBookmark />,
    name: "about",
    link: "/#about",
  },
  {
    icon: <FaStar />,
    name: "testimonials",
    link: "/#testimonials",
  },
  {
    icon: <RiTeamFill />,
    name: "team",
    link: "/#team",
  },
  {
    icon: <MdMenuBook />,
    name: "courses",
    link: "/courses",
  },
  {
    icon: <IoMdCart />,
    name: "enroll",
    link: "/enroll",
  },
];
