import React from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../context/auth-context";
import { client } from "../../utils/api-client";
import CourseForm from "../../components/course-form";

export default function Admin({}) {
  const router = useRouter();
  const { user } = useAuth();
  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);
  const token = user?.accessToken;

  const create = useMutation((data) => {
    // client("courses", { data: data, token: token });
  });

  return (
    <div className="bg-slate-200">
      <div className="max-w-xl mx-auto flex flex-col ">
        <p className="capitalize mt-4 text-2xl text-green-600">
          Create a course item
        </p>
        <CourseForm onSubmit={create.mutateAsync} />
      </div>
    </div>
  );
}
