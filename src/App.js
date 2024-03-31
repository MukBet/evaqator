import React from 'react';

import serviceImageA from './HeaderImage/Images/service_a.webp';
import serviceImageB from './HeaderImage/Images/service_b.webp';
import serviceImageC from './HeaderImage/Images/service_c.webp';
import HeaderImageList from './HeaderImage/HeaderImageList';
import Header from './Header';

function App() {

  const images = [
    { id: 1, src: serviceImageA, alt: 'Описание изображения 1' },
    { id: 2, src: serviceImageB, alt: 'Описание изображения 2' },
    { id: 3, src: serviceImageC, alt: 'Описание изображения 3' },
    // Добавьте больше картинок по аналогии
  ];

  return (
    <div className="App">
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
        <Header></Header>
        <HeaderImageList images={images} />
      </header>
    </div>
  );
}

export default App;
