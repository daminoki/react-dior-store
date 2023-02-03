import React from 'react';
import priceFormat from '../../utils/priceFormat';

import styles from './Card.module.scss';
import favoriteBtn from '../../assets/images/favorite-btn-unliked.svg';

const Card = ({ product }) => {
  return (
    <div className={styles.container}>
      <button className={styles['favorite-btn']} aria-label="Add to favorite">
        <img
          src={favoriteBtn}
          alt="Добавить в закладки"
          width="20"
          height="18"
        />
      </button>
      <img
        className={styles['product-img']}
        src={`./images/products/${product.imageUrl}.jpeg`}
        alt="Продукт"
        height="195"
      />
      <p className={styles.description}>{product.subtitle}</p>
      <p className={styles.name}>{product.title}</p>
      <div className={styles['details-wrapper']}>
        <p className={styles.price}>{priceFormat(product.price)}</p>
        <div className={styles['product-type']}>
          <button className={styles['product-type-btn']}>30 мл</button>
          <button className={styles['product-type-btn']}>50 мл</button>
        </div>
        <button className={styles['order-btn']}>добавить в корзину</button>
      </div>
    </div>
  );
};

export default Card;
