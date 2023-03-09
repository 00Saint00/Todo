import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../components/register/Register";
import TodoContainer from "../components/TodoContainer";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
