// PrivateRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Aap Redux store ya sessionStorage se token ya authentication status check kar sakte hain
  const token = useSelector((state) => state.auth.token) || JSON.parse(sessionStorage.getItem("access"));

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
