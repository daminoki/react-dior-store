import { useUserAuth } from '../UserAuthContext';
import { Link } from 'react-router-dom';

import styles from './MyProfile.module.scss';
import arrow from '../../assets/images/back-arrow.svg';

const MyProfile = () => {
  const { logOut } = useUserAuth();
  const handleLogout = () => {
    logOut();
  };

  return (
    <div className={styles.container}>
      <div className={styles.button__wrapper}>
        <Link className={styles.button} to="/main-page">
          <img
            className={styles.button__icon}
            src={arrow}
            alt="Go back"
            width={22}
            height={22}
          />
          на главную
        </Link>
      </div>
      <p className={styles.title}>Вы вошли в приложение</p>
      <button className={styles['sign-out-button']} onClick={handleLogout}>
        Выйти из приложения
      </button>
    </div>
  );
};

export default MyProfile;
