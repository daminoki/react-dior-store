import React, { useEffect } from 'react';

import styles from './Cart.module.scss';

const Cart = ({ cartOpened, handleCartClick }) => {
  useEffect(() => {
    if (cartOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [cartOpened]);

  return (
    <div
      className={`${styles.overlay} ${
        cartOpened ? styles.overlay_visible : ''
      }`}
    >
      <div className={styles.cart}>
        <img
          className={styles['cart__close-icon']}
          src="./images/close-button.svg"
          alt="Закрыть корзину"
          width={20}
          height={20}
          onClick={handleCartClick}
        />
        <div className={styles['cart-wrapper']}>
          <h2 className={styles.cart__title}>в корзине ничего нет...</h2>
          <p className={styles.cart__description}>
            воспользуйтесь поиском, если ищете что-то конкретное
          </p>
        </div>
        <button className={styles.cart__button} onClick={handleCartClick}>
          к покупкам
        </button>
      </div>
    </div>
  );
};

export default Cart;
