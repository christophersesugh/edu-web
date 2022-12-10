import React from "react";
import { Link } from "react-router-dom";

export function ArraysAndStrings() {
  return (
    <div>
      arrays and strings
      <Link to="/stack">
        <button>stack</button>
      </Link>
      <Link to="/functions">
        <button>functions</button>
      </Link>
    </div>
  );
}
