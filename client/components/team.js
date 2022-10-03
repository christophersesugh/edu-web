import React from "react";
import { BsPersonCircle } from "react-icons/bs";

export default function Team() {
  return (
    <section
      className="bg-[url('/assets/images/about-shape-3.png')] bg-center bg-cover bg-no-repeat py-12 px-8 grid place-items-center h-auto bg-zinc-200"
      id="team"
    >
      <h1 className="text-3xl text-center underline py-8 text-green-600">
        Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 place-items-center">
        {items.map((person, index) => (
          <article key={index}>
            <div className="w-[90%] flex flex-col justify-center my-8 items-center">
              <img
                src="/assets/images/avatar.webp"
                alt="team"
                className="rounded-full w-[50%]"
              />
              <div className="text-center mt-4">
                <h3 className="text-2xl text-green-700">{person.name}</h3>
                <p className="text-zinc-500 text-lg">{person.postion}</p>
                {/* <h4 className="text-zinc-500 text-xl">Meta</h4> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
const items = [
  {
    name: "Christopher Sesugh",
    postion: "Founder & CEO",
  },
  {
    name: "Samuel Ochaba",
    postion: "Software Engineer",
  },
  {
    name: "Kingsley Ugwuta",
    postion: "Software Engineer",
  },
  {
    name: "Doris Aondona",
    postion: "Marketing Lead",
  },

  {
    name: "Dominion Chukwu",
    postion: "Product Designer",
  },
];
