import React from "react";

export default function FormInput({
  type = "text",
  name = "",
  placeholder = "",
  styles = "",
  required = false,
  rest,
}) {
  return (
    <>
      <label htmlFor={name}>{placeholder}:</label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        className={`border-2 border-green-300 p-2 w-full rounded-md bg-slate-100 focus:outline-green-500 ${styles}`}
        required={required}
        {...rest}
      />
    </>
  );
}
