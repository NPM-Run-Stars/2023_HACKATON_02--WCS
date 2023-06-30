import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../contexts/AuthContexts";
import NavBar from "../../components/Navbar/NavBar";

function AdminLayout() {
  const { user } = useCurrentUser();

  if (user.role === "admin") {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/login" replace />;
}

export default AdminLayout;
