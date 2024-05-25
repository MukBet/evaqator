import { Helmet } from 'react-helmet';

const Metatag = () => {
  return (
    <Helmet>
      <title>Евакуатор Миколаїв цілодобово - Телефон +380508518834</title>
      <meta name="description" content="Евакуація автомобілів у Миколаєві та по Україні 24/7. Виклик евакуатора, оренда лафету, вантажні перевезення. Телефонуйте зараз +380508518834 для швидкої допомоги."/>
      <meta name="keywords" content="евакуація авто, евакуатор Миколаїв, аварійна допомога на дорогах, вантажоперевезення Миколаїв, оренда лафети, транспортування автомобілів, автовоз Миколаїв, цілодобова евакуація, дешевий евакуатор, послуги евакуатора, ціни на евакуацію, швидка евакуація" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
      <link rel="manifest" href="/manifest.json" />
      <meta name="robots" content="index, follow"/>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "Евакуатор Миколаїв",
        "image": "https://evacuator.top/logo512.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Вул. Космос, 100",
          "addressLocality": "Миколаїв",
          "addressRegion": "МК",
          "postalCode": "54056",
          "addressCountry": "UA"
        },
        "telephone": "+380508518834",
        "url": "https://evacuator.top"
      })}
      </script>
    </Helmet>
  );
};

export default Metatag;