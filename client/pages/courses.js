import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/auth-context";
import { client } from "../utils/api-client";

export default function Courses() {
  const { user, checkAuth } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    checkAuth("/");
  }, [user]);

  const token = user?.accessToken;

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => client("courses", { token }).then((courses) => courses),
  });

  const lessons = [...new Set(data?.courses?.map((course) => course.tag))];
  console.log(data);
  console.log(lessons);
  return (
    <div className="bg-slate-200">
      <h2 className="text-2xl text-center py-4">Courses</h2>
      <div className="mx-auto max-w-3xl grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-4">
        {isLoading ? <p className="text-xl">Loading...</p> : null}
        {isSuccess
          ? lessons?.map((tag, index) => (
              <Link href={`/${tag}`}>
                <button
                  key={`tag-${index}`}
                  className="transition-hover duration-300 bg-green-600 text-slate-200 p-2 rounded-tl rounded-tr text-xl capitalize hover:bg-green-300 hover:text-black"
                >
                  {tag}
                </button>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
