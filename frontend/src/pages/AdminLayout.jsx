import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../contexts/AuthContexts";

function AdminLayout() {
  const { user } = useCurrentUser();

  if (user === "admin") {
    return (
      <div>
        <h1>Salut admin!</h1>
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/login" replace />;
}

export default AdminLayout;
