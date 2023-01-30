import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import { UserAuthContextProvider } from './components/UserAuthContext';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="containter">
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/main-page"
            element={
              <ProtectedRoute>
                <Header />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute>
                <AuthDetails />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
