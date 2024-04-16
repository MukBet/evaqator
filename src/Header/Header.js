import React from 'react';
import './Header.css'; // Импортируем стили

function Header() {
    return (
        <section >
          <div className="top-section">
            <div className='top-panel'>
              <div className="">
                <h1>Евакуатор Миколаїв</h1>
                <p className="phone-number">+380 (50) 851 88 34</p>
              </div>
            </div>
            <div className="info-section">
              <p className="info-period">Евакуатор Миколаїв 24/7</p>
              <p className="info-service">Послуги евакуатора в Миколайові, області та по Україні</p>
            </div>
          </div>
        </section>
      );
}

export default Header;