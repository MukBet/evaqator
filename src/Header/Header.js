import React from 'react';
import './Header.css'; // Импортируем стили

function Header() {
    return (
        <section style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '15px',}} >
          <div className="">
            <div className='fixed-top-center' style={{}}>
              <div className="">
                <h1>Евакуатор Миколаїв</h1>
                <h2 className="phone-number">+380 (50) 851 88 34</h2>
              </div>
            </div>
            <div className="info-section">
              <h2 className="info-period">Евакуатор Миколаїв 24/7</h2>
              <h3 className="info-service">Послуги евакуатора в Миколайові, області та по Україні</h3>
            </div>
          </div>
        </section>
      );
}

export default Header;