import { useState } from 'react';

import styles from './Categories.module.scss';

const Categories = () => {
  const [chosenCategory, setChosenCategory] = useState(0);

  const handleCategoryClick = (index) => {
    setChosenCategory(index);
  };

  const categories = [
    'Все',
    'Лаки',
    'Тональные средства',
    'Пудры для лица',
    'Туши'
  ];

  return (
    <div className={styles.categories}>
      <ul className={styles.categories__list}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={
              chosenCategory === index
                ? styles['categories__list-item_active']
                : styles['categories__list-item']
            }
            onClick={() => handleCategoryClick(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
