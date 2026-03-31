import React from 'react';

function DrinkCard({ name, price, image }) {
  return (
    <div className="drink-card">
      <div
        className="drink-image"
        style={image ? { backgroundImage: `url(${image})` } : {}}
      ></div>
      <div className="drink-info">
        <div className="drink-price">{price} ₸</div>
        <div className="drink-name">{name}</div>
        <button className="add-to-cart">В корзину</button>
      </div>
    </div>
  );
}

DrinkCard.defaultProps = {
  name: 'Без названия',
  price: '0',
  image: null,
};

export default DrinkCard;