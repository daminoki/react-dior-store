import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import './App.scss';

import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AuthDetails from './components/AuthDetails';

function App() {
  const [authUser, setAuthUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAuthLoading(true);
      setAuthUser(user || {});
    });
  }, []);

  useEffect(() => {
    if (authUser) setAuthLoading(false);
  }, [authUser]);

  return (
    <div className="containter">
      <Routes>
        <Route path="/" element={<Header />} />

        {!authLoading && (
          <>
            <Route
              path="/register"
              element={
                authUser.email ? (
                  <AuthDetails authUser={authUser} />
                ) : (
                  <SignUp />
                )
              }
            />
            <Route
              path="/login"
              element={
                authUser.email ? (
                  <AuthDetails authUser={authUser} />
                ) : (
                  <SignIn />
                )
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
