import React from "react";
import FaqsTab from "../components/faqs-tab";

export default function Faqs() {
  return (
    <div className="bg-slate-200 ">
      <div className="max-w-3xl mx-auto py-4 bg-slate-100 p-4 drop-shadow-lg text-zinc-700">
        <h1 className="text-2xl text-center my-4 text-green-600">
          Frequently asked questions
        </h1>

        {questions.map((question, index) => (
          <FaqsTab key={`tab-${index}`} question={question} index={index} />
        ))}
      </div>
      <style jsx>{`
        p {
          margin: 1rem 0 1rem 0;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}

const questions = [
  { title: "title", content: "some content" },
  { title: "title", content: "some content" },
  { title: "title", content: "some content" },
  { title: "title", content: "some content" },
  { title: "title", content: "some content" },
  { title: "title", content: "some content" },
];
