import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="">
      <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 py-12 bg-zinc-500 text-slate-100 items-center">
        <div>
          <img
            src="/assets/images/logo-light.svg"
            alt="edu web"
            className="max-w-[200px]"
          />
        </div>
        <div>
          <h1 className="uppercase  text-slate-300 underline hover:text-slate-100">
            platform
          </h1>
          <ul className="mt-4">
            {platformLinks.map((link, index) => (
              <li key={`platform-${index}`}>
                <Link href={link.link}>
                  <button className="capitalize hover:text-slate-300 focus:underline focus:text-green-300">
                    {link.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="uppercase underline text-slate-300 hover:text-slate-100">
            help
          </h1>
          <ul className="mt-4">
            {helpLinks.map((link, index) => (
              <li key={`help-${index}`}>
                <Link href={link.link}>
                  <button className="capitalize hover:text-slate-300 focus:underline focus:text-green-300">
                    {link.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="uppercase underline text-slate-300 hover:text-slate-100">
            subscribe
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className=" my-4 flex">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded w-[80%]"
              />
              <button className="absolute right-0  rounded-r p-2 bg-slate-300 text-zinc-500">
                subscribe
              </button>
            </div>
          </form>
          <ul className="flex">
            {socialLinks.map((link, index) => (
              <li key={`help-${index}`} className="mr-2">
                <Link href={link.link}>
                  <button className="capitalize hover:text-slate-300 focus:underline focus:text-green-300 text-2xl">
                    {link.icon}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

const platformLinks = [
  { name: "about", link: "#about" },
  { name: "testimonial", link: "#testimonial" },
  { name: "team", link: "#team" },
  { name: "enroll", link: "/enroll" },
];

const helpLinks = [
  { name: "FAQs", link: "/faqs" },
  { name: "terms", link: "/terms" },
  { name: "privacy", link: "/privacy" },
  { name: "news", link: "/news" },
];

const socialLinks = [
  { icon: <FaGithub />, link: "#" },
  { icon: <AiFillLinkedin />, link: "#" },
  { icon: <AiOutlineTwitter />, link: "#" },
  { icon: <AiOutlineInstagram />, link: "#" },
];
