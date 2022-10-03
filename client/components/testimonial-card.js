import React from "react";
import { VscQuote } from "react-icons/vsc";

export default function TestimonialCard({ person }) {
  return (
    <div className="drop-shadow-2xl border-2 p-2 rounded-md border-green-500 w-auto flex flex-col place-items-center bg-zinc-100 w-[80%]">
      <div className="md:shrink-0">
        <img
          src="/assets/images/avatar.webp"
          alt="testimonial images"
          className="rounded-full self-center w-auto w-[150px] h-[150px] border-2 border-green-700 my-4"
        />
      </div>
      <div className="m-4 text-zinc-400 overflow-scroll h-[200px]">
        <p>
          <VscQuote className="text-zinc-500 inline text-2xl" />
          {person.text}
        </p>
      </div>
      <div className="text-center my-4">
        <h3 className="text-2xl text-green-700">{person.name}</h3>
        <p className="text-zinc-400 text-lg">{person.occupation}</p>
        <h4 className="text-zinc-500 text-xl">{person.company}</h4>
      </div>
    </div>
  );
}
