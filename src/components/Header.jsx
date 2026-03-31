import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">BAHANDI</div>
        <div className="nav">
          <div className="nav-item">Бургеры</div>
          <div className="nav-item">Напитки</div>
          <div className="nav-item">Комбо</div>
          <div className="nav-item cart-button">Корзина</div>
        </div>
      </div>
    </div>
  );
}

export default Header;