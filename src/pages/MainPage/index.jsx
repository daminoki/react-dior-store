import React from 'react';

import styles from './MainPage.module.scss';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Categories from '../../components/Categories';

const MainPage = ({ products }) => {
  const renderProducts = () => {
    return products.map((product, index) => {
      return <Card key={index} product={product} />;
    });
  };

  return (
    <>
      <Header />
      <Categories />
      <p className={styles.title}>Все продукты для макияжа</p>
      <div className={styles['cards-container']}>{renderProducts()}</div>
    </>
  );
};

export default MainPage;
