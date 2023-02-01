import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getItems } from './api';

import './App.scss';

import { UserAuthContextProvider } from './components/UserAuthContext';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MyProfile from './components/MyProfile';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRegisterForm from './components/ProtectedRegisterForm';
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
                <MainPage products={products} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRegisterForm>
                <SignIn />
              </ProtectedRegisterForm>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRegisterForm>
                <SignUp />
              </ProtectedRegisterForm>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
