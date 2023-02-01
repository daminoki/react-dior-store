import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../UserAuthContext';

const ProtectedRegisterForm = ({ children }) => {
  const { user } = useUserAuth();

  if (user) {
    return <Navigate to="/main-page" />;
  } else {
    return children;
  }
};

export default ProtectedRegisterForm;
