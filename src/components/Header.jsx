import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const filter = (category) => {
    if (category) {
      navigate(`?category=${category}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div>
          <a className="logo" href="/">
            BAHANDI
          </a>
        </div>
        <div className="nav">
          <button className="nav-item" onClick={() => filter(null)}>
            Все продукты
          </button>
          <button className="nav-item" onClick={() => filter("burgers")}>
            Бургеры
          </button>
          <button className="nav-item" onClick={() => filter("drinks")}>
            Напитки
          </button>
          <button className="nav-item" onClick={() => filter("combo")}>
            Комбо
          </button>
          <div className="nav-item cart-button">Корзина</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
