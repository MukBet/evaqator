import React from 'react';

import './App.css'; // Импортируем стили
import serviceImageA from './HeaderImage/Images/service_a.webp';
import serviceImageB from './HeaderImage/Images/service_b.webp';
import serviceImageC from './HeaderImage/Images/service_c.webp';
import HeaderImageList from './HeaderImage/HeaderImageList';
import Header from './Header/Header.js';
import Lafeta from './Lafeta/Lafeta.js';
import Order from './Order/Order.js';
import Timing from './Timing/Timing.js';
import Price from './Price/Price.js';
import AdditionalService from './Additional/AdditionalService.js';

function App() {

  const images = [
    { id: 1, src: serviceImageA, alt: 'Описание изображения 1' },
    { id: 2, src: serviceImageB, alt: 'Описание изображения 2' },
    { id: 3, src: serviceImageC, alt: 'Описание изображения 3' },
    // Добавьте больше картинок по аналогии
  ];

  return (
    <div className="App merriweather-light">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="top-container">
          <div className="top-container-item">
            <Header></Header>
          </div>
          <div className="top-container-item">
            <HeaderImageList images={images} />
          </div>
          <div className="top-container-item">
            <Lafeta></Lafeta>
          </div>
        </div>
        <div className="Flex-container">
          <div className="Flex-container-item">
            <Timing></Timing>
          </div>
          <div className="Flex-container-item">
            <Order></Order>
          </div>
          <div className="Flex-container-item">
            <Price></Price>
          </div>
          <div className="Flex-container-item">
            <AdditionalService></AdditionalService>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
