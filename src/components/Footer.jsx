import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-logo">BAHANDI</div>
        <div className="footer-copyright">© 2024 ТОО Баханди. Все права защищены</div>
        <div className="footer-column">
          <div className="footer-column-title">Компания</div>
          <button className="footer-link">Франшиза</button>
          <button className="footer-link">Вакансии</button>
          <button className="footer-link">Оферта</button>
          <button className="footer-link">Политика конфиденциальности</button>
          <button className="footer-link">Карта сайта</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;