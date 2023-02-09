import { createContext, useContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router';

export const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem('AuthToken'));
  const navigate = useNavigate();

  const logIn = async (email, password) => {
    try {
      const { _tokenResponse } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem('AuthToken', _tokenResponse.refreshToken);
      setUser(localStorage.getItem('AuthToken'));
      navigate('/main-page');
    } catch (err) {
      alert(err.message);
    }
  };

  const signUp = async (email, password) => {
    try {
      const { _tokenResponse } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem('AuthToken', _tokenResponse.refreshToken);
      setUser(localStorage.getItem('AuthToken'));
      navigate('/main-page');
    } catch (err) {
      alert(err.message);
    }
  };

  function logOut() {
    setUser(localStorage.removeItem('AuthToken'));
    navigate('/');
  }

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
