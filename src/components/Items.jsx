import React from 'react';
import Item from './Item';
import allItems from '../items.js';

const Items = ({ category, addItemToCart }) => {
  const filterItemsByCateogry = (category) => {
    if (category == 'All') {
      return allItems;
    } else {
      return allItems.filter((item) => item.category == category);
    }
  }

  const items = filterItemsByCateogry(category);

  return (
    <div className="row justify-content-around">
      {items.map((item) => (
        <Item key={item.id} item={item} addItemToCart={addItemToCart} />
      ))}
    </div>
  );
}

export default Items;
