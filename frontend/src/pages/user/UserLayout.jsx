import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../contexts/AuthContexts";
import NavBar from "../../components/Navbar/NavBar";

function UserLayout() {
  const { user } = useCurrentUser();

  if (user.role === "user" || user === "admin") {
    return (
      <div>
        <NavBar />
        <h1>Salut user !</h1>
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/login" replace />;
}

export default UserLayout;
