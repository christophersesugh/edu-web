import React from "react";
import { useAsync } from "../utils/hooks/use-async";
import FormInput from "./form-input";

export default function CourseForm({ onSubmit, content, setContent }) {
  const { run, reset, isLoading, isError, isSuccess } = useAsync();
  const handleCourseSubmit = (event) => {
    event.preventDefault();
    const { title, tag } = event.target.elements;
    if (isError) {
      reset();
    } else {
      run(
        onSubmit({
          title: title.value,
          content,
          tag: tag.value,
        })
      );
    }
    title.value = "";
    // content.value = "";
    setContent("");
  };

  return (
    <form
      onSubmit={handleCourseSubmit}
      className="w-full flex-1 my-4 border-2 border-slate-300 p-4 rounded-md drop-shadow-lg"
    >
      <div className="w-full">
        <FormInput name="title" placeholder="Title" required={true} />
      </div>

      <div className="w-full my-4">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Course content..."
          id="content"
          cols="30"
          rows="10"
          className="w-full border-2 border-green-300 rounded-md  p-2 bg-slate-100 focus:outline-green-500"
          required
        ></textarea>
      </div>
      <div className="w-full">
        <label htmlFor="tags">Tag</label>
        <select
          name="tag"
          id="tag"
          className="w-full border-2 border-green-300 rounded-md  p-2 bg-slate-100 focus:outline-green-500"
        >
          {options.map((opt, index) => (
            <option value={opt} key={`opt-${index}`}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="drop-shasow-xl bg-green-500 p-2 mt-4 rounded"
      >
        {isLoading ? (
          <img src="/favicon.svg" alt="logo" className="w-8 animate-spin" />
        ) : isError ? (
          <span className="text-red-500">Reset</span>
        ) : (
          <span>Submit</span>
        )}
      </button>
      {isSuccess ? (
        <p className="text-xl text-green-500 animate-pulse mt-4">Created!</p>
      ) : null}
    </form>
  );
}

const options = [
  "strings",
  "arrays",
  "objects",
  "searching",
  "sorting",
  "data-structures",
  "functions",
];
