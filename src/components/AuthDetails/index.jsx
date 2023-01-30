import { useUserAuth } from '../UserAuthContext';
import { Link } from 'react-router-dom';

import styles from './AuthDetails.module.scss';
import arrow from '../../images/back-arrow.svg';

const AuthDetails = () => {
  const { logOut } = useUserAuth();
  const handleLogout = () => {
    logOut();
  };

  return (
    <div className={styles.container}>
      <div className={styles.button__wrapper}>
        <Link to="/main-page">
          <button className={styles.button}>
            <img
              className={styles.button__icon}
              src={arrow}
              alt="Go back"
              width={22}
              height={22}
            />
          </button>
        </Link>
        <p className={styles.button__title}>на главную</p>
      </div>
      <p className={styles.title}>{`Вы вошли в приложение`}</p>
      <button className={styles['sign-out-button']} onClick={handleLogout}>
        Выйти из приложения
      </button>
    </div>
  );
};

export default AuthDetails;
