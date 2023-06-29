import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../contexts/AuthContexts";

function UserLayout() {
  const { user } = useCurrentUser();

  if (user === "user" || user === "admin") {
    return (
      <div>
        <h1>Salut user !</h1>
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/login" replace />;
}

export default UserLayout;
