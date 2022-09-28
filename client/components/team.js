import React from "react";

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
        {items.map((item, index) => (
          <article key={index}>
            <div className="w-[90%] flex flex-col justify-center my-8 items-center">
              <img
                src="/assets/images/blog-2.jpg"
                alt="team"
                className="rounded-full w-[60%]"
              />
              <div className="text-center mt-4">
                <h3>Christopher Sesugh</h3>
                <p>FullStack Developer</p>
                <h4>Amazon</h4>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const items = ["1", "2", "3", "4", "5"];
