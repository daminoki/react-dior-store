import React from 'react';

import styles from './Cart.module.scss';

const Cart = ({ cartOpened }) => {
  console.log(cartOpened);
  return (
    <div className={cartOpened ? styles.overlay_visible : styles.overlay}></div>
  );
};

export default Cart;
