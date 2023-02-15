import { useState } from 'react';

import styles from './MainPage.module.scss';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import Cart from '../../components/Cart';

const MainPage = ({ products }) => {
  const [cartOpened, setCartOpened] = useState(false);

  const handleCartClick = () => {
    setCartOpened(!cartOpened);
  };

  const renderProducts = () => {
    return products.map((product, index) => {
      return <Card key={index} product={product} />;
    });
  };

  return (
    <>
      <Header handleCartClick={handleCartClick} />
      <Cart cartOpened={cartOpened} handleCartClick={handleCartClick} />
      <Categories />
      <p className={styles.title}>Все продукты для макияжа</p>
      <div className={styles['cards-container']}>{renderProducts()}</div>
    </>
  );
};

export default MainPage;
