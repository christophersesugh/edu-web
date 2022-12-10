import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Admin,
  BinaryTrees,
  Course,
  Courses,
  Functions,
  Home,
  LinkedLists,
  NotFound,
  Numbers,
  Stack,
} from "../screens";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/course/courses" element={<Courses />} />
      <Route path="/course/:id" element={<Course />} />
      <Route path="/course/stack" element={<Stack />} />
      <Route path="/course/binary-trees" element={<BinaryTrees />} />
      <Route path="/course/functions" element={<Functions />} />
      <Route path="/course/linked-lists" element={<LinkedLists />} />
      <Route path="/course/numbers" element={<Numbers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
