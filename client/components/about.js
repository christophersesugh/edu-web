import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
export default function About() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 m-8 m-h-screen"
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
      <div className="bg-[url('/assets/images/blog-shape.png')] bg-no-repeat  p-12 lex flex-col items-center justify-center">
        {/* <h1 className="uppercase text2xl text-center text-slate-400 mb-8">
          about us
        </h1> */}
        <h3 className="text-3xl capitalize lg:text-center">
          over 10 years in{" "}
          <span className="text-green-500">distant learning</span> for skill
          development.
        </h3>
        <p className="pl-4 my-8 text-slate-500">
          Edu Web is a platform designed to maximize your understanding of data
          structure & algorithms. With over 20,000 users and growing, our online
          curriculum forms a deliberate coursework designed to maximize
          retention, while minimizing study time. We enable both aspiring and
          current software engineers to maximize their understanding of
          algorithms, preparing them for their upcoming technical interviews,
          and helping them land their dream job.
        </p>
        <ul className="pl-4 mt-4">
          {items.map((item, index) => (
            <li key={`item-${index}`} className="text-left capitalize">
              <IoCheckmarkDoneOutline className="inline mr-2 text-green-700" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const items = ["expert trainers", "online remote learning", "lifetime access"];
