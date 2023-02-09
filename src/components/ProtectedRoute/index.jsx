import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../UserAuthContext';

const ProtectedRoute = ({ children, isSignRoute = false }) => {
  const { user } = useUserAuth();

  if (user && isSignRoute) {
    return <Navigate to="/main-page" />;
  } else if (!user && !isSignRoute) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
