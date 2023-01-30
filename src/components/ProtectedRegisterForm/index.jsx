import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../UserAuthContext';

const ProtectedRegisterForm = ({ children }) => {
  const { user } = useUserAuth();

  console.log(123, user);

  if (user) {
    return <Navigate to="/main-page" />;
  } else {
    return children;
  }
};

export default ProtectedRegisterForm;
