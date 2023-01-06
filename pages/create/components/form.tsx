import React from "react";
import FormInput from "../../../components/form-input";
import { useAsync } from "utils/hooks/use-async";

type OnSubmitProps = {
  title: string;
  author: string;
  language: string;
  content: string;
};

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  author: HTMLInputElement;
  language: HTMLInputElement;
  content: HTMLInputElement;
}
interface PostFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}
interface FormProps {
  onSubmit: ({ title, author, language, content }: OnSubmitProps) => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form({ onSubmit, content, setContent }: FormProps) {
  const { run, error, reset, isError, isLoading, isSuccess } = useAsync();

  function handleFormSubmit(event: React.FormEvent<PostFormElements>) {
    event.preventDefault();
    const { title, author, language } = event.currentTarget.elements;
    if (isError) {
      reset();
    } else {
      run(
        onSubmit({
          title: title.value,
          author: author.value,
          language: language.value,
          content: content,
        })
      );
    }
    title.value = "";
    author.value = "";
    language.value = "";
    setContent("");
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        autoComplete="off"
        className="md:w-[50%] w-full rounded border-2 border-zinc-600 bg-zinc-300 text-zinc-600 dark:text-zinc-200 dark:bg-zinc-400 p-4"
      >
        <h1 className="text-center text-2xl">Create course item</h1>
        <FormInput type="text" placeholder="Title" id="title" />
        <FormInput type="text" placeholder="Author" id="author" />
        <div className="w-full mt-6">
          <label htmlFor="language" className="w-full">
            Choose language:
          </label>
          <select
            id="language"
            name="language"
            className="transition-all duration-300 w-full p-2 rounded focus:outline-none focus:bg-zinc-50 bg-zinc-200 text-black"
          >
            {languages.map((language, index) => (
              <option
                key={`${language}-${index}`}
                value={language}
                className="capitalize"
              >
                {language}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
            name="content"
            id="content"
            className="w-full rounded p-1 text-black"
            rows={10}
          ></textarea>
        </div>
        <button
          className={`rounded w-full mt-10 p-2 bg-zinc-400 border-2 border-zinc-50 text-zinc-50 ${
            error ? "text-red-700" : null
          }`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading
            ? "Submitting..."
            : isError
            ? error.message
                .substring(22, error.message.length - 2)
                .split("-")
                .join(" ")
            : isSuccess
            ? "Success!"
            : "Submit"}
        </button>
      </form>
    </>
  );
}
const languages = ["javascript", "c", "python"];
