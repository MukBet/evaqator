import './Price.css'; 
import Card from 'react-bootstrap/Card';
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
          <Card style={{ width: '27rem', background: '#2c3e50', color:'white', textAlign:'justify' }} className="info-block">
            <Card.Body>
            <div class="intro">
              <h2 style={{color:'#e0f5e4'}}>Оренда лафети</h2>
            </div><br></br>
            <div style={{ textAlign:'justify'}}>
              <h4 class="info-row-price">
              &#10148;<span style={{marginLeft:'15px'}}>4м/2,2м.</span>
              </h4>
              <h4 class="info-row-price">
              &#10148;<span style={{marginLeft:'15px'}}>Навантаження до 2 тонн.</span> 
              </h4>
              <h4 class="info-row-price">
              &#10148;<span style={{marginLeft:'15px'}}>800 грн /доба , залогова сума 200&#128178; (повертається при отриманні лафети).</span> 
              </h4>
              <h4 class="info-row-price">
              &#10148;<span style={{marginLeft:'15px'}}>Паспортні дані.</span> 
              </h4>
            </div>
            </Card.Body>
          </Card>
          
        </div>
      </>
    );
  }
  
  export default Price;