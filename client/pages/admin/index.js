import React from "react";
import Link from "next/link";
import { MdDelete, MdOutlineCancel } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ReactMarkDown from "react-markdown";
import { useAuth } from "../../context/auth-context";
import { client } from "../../utils/api-client";
import CourseForm from "../../components/course-form";

export default function Admin({}) {
  const [content, setContent] = React.useState(`# content`);
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const token = user?.accessToken;

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => client("courses", { token }).then((courses) => courses),
  });

  const create = useMutation(
    (data) => {
      client("courses", { data, token: token });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["courses"]),
    }
  );
  const deleteCourse = useMutation(
    ({ id }) => client(`courses/${id}`, { token, method: "DELETE" }),
    {
      onSuccess: () => queryClient.invalidateQueries(["courses"]),
    }
  );
  const userCourses = data?.courses?.filter(
    (course) => course?.createdBy === user?.uid
  );
  return (
    <div className="bg-slate-200">
      <div className=" mx-auto grid lg:grid-cols-2 gap-4 p-8 ">
        <div>
          <p className="capitalize mt-4 text-2xl text-green-600">
            Create a Lesson
          </p>
          <CourseForm
            onSubmit={create.mutateAsync}
            content={content}
            setContent={setContent}
          />
        </div>
        <div className="bg-white rounded p-4 max-w-lg mx-auto w-full ">
          <ReactMarkDown>{content}</ReactMarkDown>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mb-2 text-center">My Lessons</h2>
        {!userCourses?.length && (
          <h2 className="text-center text-xl">
            Your lessons will appear here!
          </h2>
        )}
      </div>
      <div className="max-w-xl mx-auto p-8 grid md:grid-cols-2 gap-4 ">
        {isLoading ? <p className="text-xl">Loading...</p> : null}
        {isSuccess
          ? userCourses?.map((lesson) => (
              <Link href={`/lesson/${lesson._id}`}>
                <h2 className="text-xl bg-zinc-400 rounded p-4 capitalize text-slate-300 flex relative cursor-pointer">
                  {lesson.title}
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      deleteCourse.mutate({ id: lesson._id });
                    }}
                    className="text-xl right-0 bottom-0 absolute p-2 bg-zinc-200  rounded-tl"
                  >
                    {deleteCourse.isLoading ? (
                      <FaSpinner className="animate-spin text-green-500" />
                    ) : deleteCourse.isError ? (
                      <MdOutlineCancel className="text-red-500" />
                    ) : (
                      <MdDelete className="text-red-500" />
                    )}
                  </button>
                </h2>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
