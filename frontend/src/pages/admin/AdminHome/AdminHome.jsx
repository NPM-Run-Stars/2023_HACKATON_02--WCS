import React from "react";
import { useCurrentUser } from "../../../contexts/AuthContexts";

function AdminHome() {
  const { user } = useCurrentUser();

  return <div>{user.firstname}</div>;
}

export default AdminHome;
