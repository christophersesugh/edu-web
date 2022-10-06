import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function Lesson() {
  const content = ` 
  Lest's see how normal text will appear
  ~~~js 
  console.log('hello') 
  function add(a,b) {
    return a+b;
  }
  console.log(add(2,3)) //5
  ~~~ 
  `;
  return (
    <div className="bg-slate-200 py-8 px-2">
      <div className="max-w-2xl mx-auto border-2">
        <h1 className="text-center text-zinc-200 text-3xl text-bold py-6 bg-zinc-500 rounded">
          Lesson Title
        </h1>
        <div className="mt-4">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
