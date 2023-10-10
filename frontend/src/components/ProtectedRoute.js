import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = localStorage.getItem("user");
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/signup" />;
};

export default ProtectedRoute;
