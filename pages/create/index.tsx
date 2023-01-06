import React from "react";
import { collection, addDoc } from "firebase/firestore";
import Form from "./components/form";
import View from "./components/view";
import { db } from "config/firebase";

type AddCourseProps = {
  title: string;
  author: string;
  language: string;
  content: string;
};

export default function Create() {
  const [content, setContent] = React.useState(``);

  async function addCourse({
    title,
    author,
    language,
    content,
  }: AddCourseProps) {
    console.log(title, author, language, content);

    const doc = await addDoc(collection(db, "courses"), {
      title,
      author,
      language,
      content,
    });
    console.log(doc.id);

    return doc;
  }

  return (
    <div className="flex xs:flex-col md:flex-row gap-4 p-6">
      <Form onSubmit={addCourse} content={content} setContent={setContent} />
      <View content={content} />
    </div>
  );
}
