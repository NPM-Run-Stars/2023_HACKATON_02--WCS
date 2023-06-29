import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../contexts/AuthContexts";
import NavBar from "../../components/Navbar/NavBar";

function AdminLayout() {
  const { user } = useCurrentUser();

  if (user === "admin") {
    return (
      <div>
        <NavBar />
        <h1>Salut admin!</h1>
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/login" replace />;
}

export default AdminLayout;
