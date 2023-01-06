import React from "react";
import { DocumentData } from "firebase/firestore";
import { useFetchWithQuery, useFetch } from "utils/hooks/use-fetch";
import CourseCard from "./components/course-card";
import { CoursesIndicator } from "components/loading-indicators";

export default function Courses() {
  const [data, isLoading, isError, error] = useFetch();

  const languages = [
    ...new Set(
      data?.docs?.map((doc: DocumentData) => {
        return doc.data()?.language;
      })
    ),
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12 mx-8">
      {isLoading
        ? Array(8)
            .fill(null)
            .map((_, index) => <CoursesIndicator key={index} />)
        : null}

      {languages?.length ? (
        <>
          {languages.map((language: any, index: number) => {
            return <CourseCard key={index} language={language} />;
          })}
        </>
      ) : null}

      {isError ? <h2>{error.message}</h2> : null}
    </div>
  );
}

const images = [
  "/assets/images/c_logo.png",
  "/assets/images/js_logo.png",
  "/assets/images/python_logo.png",
];
