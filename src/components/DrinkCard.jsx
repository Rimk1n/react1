import React from "react";
import { useNavigate } from "react-router-dom";

function DrinkCard(props) {
  const navigate = useNavigate();

  return (
    <div
      className="drink-card"
      onClick={() => navigate(`/drinks/${props.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img className="drink-image" src={props.image} alt={props.name} />
      <div className="drink-info">
        <div className="drink-price">{props.price} ₸</div>
        <div className="drink-name">{props.name}</div>
        <button
          className="add-to-cart"
          onClick={(e) => {
            e.stopPropagation();
            props.addToCart();
          }}
        >
          В корзину
        </button>
      </div>
    </div>
  );
}

DrinkCard.defaultProps = {
  name: "Без названия",
  price: 0,
  image: null,
};

export default DrinkCard;
