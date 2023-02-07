import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../UserAuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (user && children.props.isSignRoute) {
    return <Navigate to="/main-page" />;
  } else if (!user && children.props.isSignRoute) {
    return children;
  } else if (user && !children.props.isSignRoute) {
    return children;
  } else if (!user && !children.props.isSignRoute) {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
