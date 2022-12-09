import React from "react";
import { Routes, Route } from "react-router-dom";
import { ArraysAndStrings, Stack, BinaryTrees, Courses, Functions, LinkedLists, Numbers } from "../screens";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ArraysAndStrings />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/stack" element={<Stack />} />
      <Route path="/binary-trees" element={<BinaryTrees />} />
      <Route path="/functions" element={<Functions />} />
      <Route path="/linked-lists" element={<LinkedLists />} />
      <Route path="/numbers" element={<Numbers />} />
    </Routes>
  );
}
