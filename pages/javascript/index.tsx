import React from "react";
import { DocumentData } from "firebase/firestore";
import { useFetchWithQuery } from "utils/hooks/use-fetch";
import Markdown from "components/markdown";

export default function JavaScript() {
  const [value, setValue] = React.useState(0);
  const [data] = useFetchWithQuery({ key: "language", value: "javascript" });
  const items = data?.docs
    ?.map((doc: DocumentData) => {
      return doc.data();
    })
    .sort();

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="flex md:flex-col justify-center md:justify-start flex-row m-6 w-full md:w-[20%] overflow-x-scroll">
        {items?.map((item: any, index: number) => (
          <button
            key={index}
            className={`transition-all duration-300 mr-4 capitalize p-4 mb-2 text-lg hover:bg-zinc-200 rounded ${
              value === index && "border-b-4 border-b-zinc-600 "
            }`}
            onClick={() => setValue(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="w-full md:w-[80%]">
        {items?.length ? (
          <div>
            <h1 className="text-center text-2xl capitalize bg-zinc-400 rounded p-2 text-zinc-50 mb-4">
              {items[value].title}
            </h1>
            <Markdown code={items[value].content} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
