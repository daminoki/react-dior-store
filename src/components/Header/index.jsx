import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/images/header-logo.png';
import homeIcon from '../../assets/images/home-icon.svg';
import favoritesIcon from '../../assets/images/favorites-icon.png';
import cartIcon from '../../assets/images/cart-icon.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="Logo" width={130} height={40} />
        <div>
          <h3 className={styles.header__title}>React Dior</h3>
          <p className={styles.header__subtitle}>Магазин элитной косметики</p>
        </div>
      </div>
      <div className={styles.header__menu}>
        <Link to="/my-profile">
          <img
            className={styles.header__icon}
            src={homeIcon}
            alt="Home"
            width={18}
            height={18}
          />
        </Link>
        <img
          className={styles.header__icon}
          src={favoritesIcon}
          alt="Favorites"
          width={20}
          height={18}
        />
        <button>
          <img src={cartIcon} alt="Cart" width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default Header;
