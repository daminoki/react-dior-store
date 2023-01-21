import React from 'react';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const AuthDetails = ({ authUser }) => {
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Вы вышли из приложения');
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <p>{`Вы вошли в приложение под логином ${authUser.email}`}</p>
      <button onClick={userSignOut}>Выйти из приложения</button>
    </div>
  );
};

export default AuthDetails;
