import React from "react";
import { FcCheckmark } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io";
export default function About() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 m-8 m-h-screen bg-zinc-100"
      id="about"
    >
      <div className="bg-[url('/assets/images/about-shape-3.png')] bg-center bg-no-repeat bg-cover p-4 flex flex-col items-center justify-center p-12">
        <div className="relative w-full h-full max-w-lg md:p-8">
          <img
            src="/assets/images/about-banner.jpg"
            alt="student"
            className="rounded-md w-full object-fit"
          />
          <img
            src="/assets/images/about-shape-1.svg"
            alt="student name"
            className="absolute -top-[8rem] -right-[8rem] animate-pulse hidden md:block"
          />
          <img
            src="/assets/images/about-shape-2.svg"
            alt="student name"
            className="static md:absolute -bottom-[8rem] -left-[8rem] ml-8 animate-bounce"
          />
        </div>
      </div>
      <div className="bg-[url('/assets/images/blog-shape.png')] bg-no-repeat  p-12 lex flex-col items-center justify-center ">
        {/* <h1 className="uppercase text2xl text-center text-slate-400 mb-8">
          about us
        </h1> */}
        <h3 className="text-3xl capitalize lg:text-center">
          over 10 years in{" "}
          <span className="text-green-500">distant learning</span> for skill
          development.
        </h3>
        <p className="pl-4 my-8 text-slate-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          temporibus eos provident, minima ullam vero molestias omnis hic
          obcaecati natus dolorem corrupti nesciunt delectus quia saepe,
          doloribus beatae sequi. Quae!
        </p>
        <ul className="pl-4 mt-4">
          {items.map((item, index) => (
            <li key={`item-${index}`} className="text-left capitalize">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const items = ["expert trainers", "online remote learning", "lifetime access"];
