import React from 'react';

import styles from './MainPage.module.scss';

import Card from '../../components/Card';
import Header from '../../components/Header';

const MainPage = ({ products }) => {
  const renderProducts = () => {
    return products.map((product, index) => {
      return <Card key={index} product={product} />;
    });
  };

  return (
    <>
      <Header />
      <div className={styles['cards-container']}>{renderProducts()}</div>
    </>
  );
};

export default MainPage;
