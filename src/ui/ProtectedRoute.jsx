/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // 1.Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //2.if their is np authenticated user redirect to login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);
  //3. while loading show spinner
  if (isLoading) return <Spinner />;
  //4.if their is user render the app
  if (isAuthenticated) return <div>{children}</div>;
};

export default ProtectedRoute;
