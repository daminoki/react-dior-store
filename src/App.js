import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getItems } from './api';

import './App.scss';

import { UserAuthContextProvider } from './components/UserAuthContext';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MyProfile from './components/MyProfile';
import ProtectedRoute from './components/ProtectedRoute';
import MainPage from './pages/MainPage';

function App() {
  const [products, setProducts] = useState([]);

  const fetchItems = async () => {
    const { data } = await getItems();
    setProducts(data);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchItems();
    }

    fetchData();
  }, []);

  return (
    <div className="containter">
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/main-page"
            element={
              <ProtectedRoute>
                <MainPage products={products} isSignRoute={false} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute>
                <MyProfile isSignRoute={false} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SignIn isSignRoute={true} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <SignUp isSignRoute={true} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
