import React from "react";
import { Routes, Route } from "react-router-dom";
import { Admin, Course, Courses, Home } from "../screens";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/course/:id" element={<Course />} />
      {/* <Route path="/stack" element={<Stack />} />
      <Route path="/binary-trees" element={<BinaryTrees />} />
      <Route path="/functions" element={<Functions />} />
      <Route path="/linked-lists" element={<LinkedLists />} />
      <Route path="/numbers" element={<Numbers />} /> */}
    </Routes>
  );
}
