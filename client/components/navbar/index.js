import React from "react";
import MainNav from "./main-nav";

export default function Navbar() {
  return (
    <>
      <MainNav />
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
