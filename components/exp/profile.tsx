import React from "react";

type ProfileProps = {
  name: string;
  age: number;
  info: string;
};

export default function Profile({ name, age, info }: ProfileProps) {
  const [showDetails, setShowDetails] = React.useState(true);
  return (
    <div>
      {showDetails && (
        <div
          className={`bg-blue-300 h-[300px] w-[300px] grid place-items-center m-12 `}
        >
          <h1>{name}</h1>
          <h3>{age}</h3>
          <p>{info}</p>
        </div>
      )}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="bg-blue-400 rounded p-2 m-12"
      >
        {showDetails ? "Hide details" : "Show details"}
      </button>
      <div role="heading" aria-level={1}>
        for testing purpose
      </div>
    </div>
  );
}
