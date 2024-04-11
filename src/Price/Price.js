import './Price.css'; 
const priceStyles = {
  container: {
    justifyContent: 'center',
    padding: '15px', // Отступы для контейнера, чтобы картинки не касались краев экрана
    paddingTop: '10px', // Добавляем прокрутку, если картинки не помещаются
    overflow: 'hidden', /* Скрываем всё, что выходит за пределы блока */
    borderRadius: '15px', /* Скругленные углы для контейнера галереи */
    borderColor: 'black',
    width: '30rem',
  },
  textSise: {
    fontSize: '1.5rem', /* Большой размер шрифта для заголовка */
  }
};

function Price() {
      return (
        <>
        <div style={priceStyles.container}>
          <div class="intro">
            <h2>Ціни</h2>
          </div>
          <div style={{ textAlign:'left'}}>
            <h4 class="info-row-price" style={{ fontWeight:'bold', border:'2px solid red', borderRadius:'10px', padding:'10px'}}>
            &#9757; По місту 500 грн замовлення + 25 грн / км  (до 100 км).
            </h4>
            <h4 class="info-row-price">
            &#9757; По Україні та більше 100 км 22 грн / км в обидві сторони.
            </h4>
            <h4 class="info-row-price">
            &#9757; Складність погрузки 200 грн.
            </h4>
            <h4 class="info-row-price">
            &#9757; Евакуатор + лафета + 50% від повної суми замовлення.
            </h4>
          </div>
          <br></br>
          <div class="intro">
            <h2>Оренда лафети</h2>
          </div>
          <div style={{ textAlign:'left'}}>
            <h4 class="info-row-price">
             &#129086; 4м/2,2м.
            </h4>
            <h4 class="info-row-price">
              &#129086; Навантаження до 2 тонн.
            </h4>
            <h4 class="info-row-price">
             &#129086; 800 грн /доба , залогова сума 200 $ (повертається при отриманні лафети).
            </h4>
            <h4 class="info-row-price">
              &#129086; Паспортні дані.
            </h4>
          </div>
        </div>
      </>
    );
  }
  
  export default Price;