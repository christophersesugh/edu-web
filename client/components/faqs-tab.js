import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function FaqsTab({ question, index }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div
      className="mt-8 border-2 rounded border-green-500 mb-4"
      onClick={handleToggle}
    >
      <div className=" transition-hover duration-300 p-4 text-xl bg-slate-200 cursor-pointer flex justify-between items-betwwen">
        <span>{index + 1}</span>
        <h2>{question.title}</h2>
        <span>{isOpen ? <FaCaretUp /> : <FaCaretDown />}</span>
      </div>
      {isOpen && (
        <div className="h-auto p-8">
          <p>{question.content}</p>
        </div>
      )}
    </div>
  );
}
