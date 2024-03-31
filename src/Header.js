import React from 'react';
import './App.css';
import './Header.css'; // Импортируем стили

function Header() {
    return (
        <section className="info-section">
          <h1>Евакуатор Миколаїв</h1>
          <p className="phone-number">+380...</p>
          <p className="info-period">Евакуатор Миколаїв 24/7</p>
          <p className="info-service">Послуги евакуатора в Миколайові, області та по Україні</p>
        </section>
      );
}

export default Header;