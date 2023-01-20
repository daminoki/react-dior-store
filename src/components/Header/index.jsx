import React from 'react';
import styles from './Header.module.scss';
import logo from '../../images/header-logo.png';
import homeIcon from '../../images/home-icon.svg';
import favoritesIcon from '../../images/favorites-icon.png';
import cartIcon from '../../images/cart-icon.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="Logo" width={130} height={40} />
        <div>
          <h3 className={styles.header__title}>React Dior</h3>
          <p className={styles.header__subtitle}>Store элитной косметики</p>
        </div>
      </div>
      <div className={styles.header__menu}>
        <img src={homeIcon} alt="Home" width={18} height={18} />
        <img src={favoritesIcon} alt="Favorites" width={20} height={18} />
        <button>
          <img src={cartIcon} alt="Cart" width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default Header;
