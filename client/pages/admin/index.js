import React from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ReactMarkDown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { useAuth } from "../../context/auth-context";
import { client } from "../../utils/api-client";
import CourseForm from "../../components/course-form";

export default function Admin({}) {
  const [content, setContent] = React.useState(`# content`);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { user } = useAuth();
  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const token = user?.accessToken;

  const { data } = useQuery({
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
            Create a course item
          </p>
          <CourseForm
            onSubmit={create.mutateAsync}
            content={content}
            setContent={setContent}
          />
        </div>
        <div className="bg-white rounded p-4 max-w-lg ">
          <ReactMarkDown>{content}</ReactMarkDown>
        </div>
      </div>
      <div className="max-w-md p-8">
        {userCourses?.map((course) => (
          <div
            key={course._id}
            onClick={() => deleteCourse.mutate({ id: course._id })}
          >
            <ReactMarkDown rehypePlugins={[rehypeHighlight]}>
              {course.content}
            </ReactMarkDown>
          </div>
        ))}
      </div>
    </div>
  );
}
