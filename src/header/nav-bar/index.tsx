import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="bg-red-200 text-3xl">
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/stack">stack</Link>
      Navbar
    </div>
  );
}
