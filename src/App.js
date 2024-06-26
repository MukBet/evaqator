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
import Metatag from './Metatag/Metatag.js';

function App() {

  const images = [
    { id: 1, src: serviceImageA, alt: 'Евакуація авто у Миколаєві' },
    { id: 2, src: serviceImageB, alt: 'Допомога з авто у Миколаєві' },
    { id: 3, src: serviceImageC, alt: 'Швидкий підїзд по  Миколаєву' },
  ];

  return (
    <div className="App merriweather-light">
      <header className="App-header">
        <Metatag></Metatag>
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
        <div className="main-container">
          <div className="main-container-block">
            <Header></Header>
          </div>
          <div className="main-container-block">
            <HeaderImageList images={images} />
          </div>
          <div className="main-container-block">
            <Lafeta></Lafeta>
          </div>
        </div>
        <div className="main-container">{/* Flex-container*/}
          <div className="main-container-block">{/* Flex-container-item*/}
            <Timing></Timing>
          </div>
          <div className="main-container-block">{/* Flex-container-item*/}
            <Order></Order>
          </div>
          <div className="main-container-block">{/* Flex-container-item*/}
            <Price></Price>
          </div>
          <div className="main-container-block">{/* Flex-container-item*/}
            <AdditionalService></AdditionalService>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
