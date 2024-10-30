import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { FormContext, useFormContext } from './Context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated } =useFormContext()

  return isAuthenticated ? <Outlet /> : <Navigate to="/authentication/login" />;
};

export default ProtectedRoute;
