import React from "react";

type FormInputProps = {
  type: string;
  id: string;
  placeholder: string;
};

export default function FormInput({
  type = "text",
  id,
  placeholder,
}: FormInputProps) {
  return (
    <div className="w-full mt-6">
      <label htmlFor={id} className="text-zinc-100">
        {placeholder}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="transition-all duration-300 w-full p-2 rounded focus:outline-none focus:bg-zinc-50 bg-zinc-200"
      />
    </div>
  );
}
