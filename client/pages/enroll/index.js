import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useFetchQuery } from "../../utils/hooks/queries";
import { client } from "../../utils/api-client";
import { useAuth } from "../../context/auth-context";

export default function Enroll() {
  const { user, checkAuth } = useAuth();
  React.useEffect(() => {
    checkAuth("/");
  }, [user]);
  // const { data } = useFetchQuery();
  // console.log(data);
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center text-2xl mt-8 capitalize">
        enroll and unlock courses
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 py-8 justify-between mx-auto max-w-4xl ">
        {courses.map((course, index) => (
          <div
            key={`item-${index}`}
            className={`w-full rounded-md p-8 m-2 ${
              index === 0 ? "bg-green-200" : "bg-zinc-200"
            } `}
          >
            <p className="pb-4">{course}</p>
            <div
              className={` p-4 rounded-md flex flex-col items-center text-slate-200 ${
                index === 0 ? "bg-green-600" : "bg-zinc-500"
              }`}
            >
              <h3 className="text-2xl">$79</h3>
              <p className="text-lg mb-4">{course}</p>
              <button className="p-2 rounded border-2 self-start capitalize">
                purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const courses = ["some1", "some2"];
