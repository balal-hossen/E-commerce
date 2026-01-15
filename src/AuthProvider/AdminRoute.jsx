import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, isAdmin, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;
  if (!user || !isAdmin) return <Navigate to="/" />;

  return children;
};

export default AdminRoute;
