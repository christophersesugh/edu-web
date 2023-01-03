import React from "react";

interface FormFooterProps {
  isRegistered: boolean;
  setIsRegistered: (isRegistered: boolean) => void;
}

export default function FormFooter({
  isRegistered,
  setIsRegistered,
}: FormFooterProps) {
  return (
    <div>
      {isRegistered ? "Don't have an account? " : "Already have an account? "}
      <button
        onClick={() => setIsRegistered(!isRegistered)}
        type="button"
        className="mt-4 text-zinc-200"
      >
        {isRegistered ? "Register" : "Login"}
      </button>
    </div>
  );
}
