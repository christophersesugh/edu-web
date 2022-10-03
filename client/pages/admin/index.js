import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/auth-context";

export default function Admin() {
  const router = useRouter();
  const { user } = useAuth();
  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const handleCourseSubmit = (event) => {
    event.preventDefault();
    const { title, content, tag } = event.target.elements;
    console.log(tag.value);
  };
  return (
    <div className="bg-slate-200">
      <div className="max-w-xl mx-auto flex flex-col ">
        <p className="capitalize mt-4 text-2xl text-green-600">
          Create a course item
        </p>
        <form
          onSubmit={handleCourseSubmit}
          className="w-full flex-1 my-4 border-2 border-slate-300 p-4 rounded-md drop-shadow-lg"
        >
          <div className="w-full">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              className="border-2 border-green-300 p-2 w-full rounded-md bg-slate-100 focus:outline-green-500"
            />
          </div>

          <div className="w-full my-4">
            <label htmlFor="content">Content</label>
            <textarea
              name="body"
              placeholder="Course content..."
              id="body"
              cols="30"
              rows="10"
              className="w-full border-2 border-green-300 rounded-md  p-2 bg-slate-100 focus:outline-green-500"
            ></textarea>
          </div>
          <div className="w-full">
            <label htmlFor="tags">Tag</label>
            <select
              name="tag"
              id="tag"
              className="w-full border-2 border-green-300 rounded-md  p-2 bg-slate-100 focus:outline-green-500"
            >
              {options.map((opt) => (
                <option value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="drop-shasow-xl bg-green-500 p-2 mt-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
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
