import React from "react";
import { Navigate } from "react-router-dom";

function UserAuthGuard({ children }) {
  const user = true;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
}

export default UserAuthGuard;
