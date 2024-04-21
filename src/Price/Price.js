import './Price.css'; 
import Card from 'react-bootstrap/Card';
const priceStyles = {
  container: {
    display: 'block', // Блочное отображение
    margin: '20px auto', // Автоматический отступ с обеих сторон для центрирования
    maxWidth: '600px', // Максимальная ширина контейнера
    width: '100%', // Ширина контейнера (занимает 100% родительского элемента, но не более maxWidth)
    padding: '15px', // Отступы внутри контейнера
    borderRadius: '10px', // Закругленные углы
    boxSizing: 'border-box' // Включает padding в общую ширину
  },
  textSise: {
    fontSize: '1.5rem', /* Большой размер шрифта для заголовка */
  }
};

function Price() {
      return (
        <>
        <div style={priceStyles.container} >
          <div class="">
            <h2>Ціни</h2>
          </div>
          <div style={{ textAlign:'left',}} >
            <h4 class="info-row-price" style={{ fontWeight:'bold', border:'2px solid red', borderRadius:'10px', padding: '10px 10px 10px 20px'}}>
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
          <div style={{ background: '#2c3e50', color:'white', textAlign:'center', padding: '10px 10px 10px 20px', justifyContent: 'center', borderRadius:'10px'}} className="">
            <div>
            <div class="intro">
              <h2 style={{color:'#e0f5e4'}}>Оренда лафети</h2>
            </div><br></br>
            <div style={{ textAlign:'left'}}>
              <h4 class="info-row-price">
              &#10148;<span style={{marginLeft:'15px'}}>4м/2,2м.</span>
              </h4>
              <h4 class="info-row-price">
              &#10148;<span style={{marginLeft:'15px'}}>Навантаження до 2 тонн.</span> 
              </h4>
              <h4 class="info-row-price">
              &#10148;<span style={{marginLeft:'15px'}}>800 грн /доба , залогова сума 200<span>&#36;</span> (повертається при отриманні лафети).</span> 
              </h4>
              <h4 class="info-row-price">
              &#10148;<span style={{marginLeft:'15px'}}>Паспортні дані.</span> 
              </h4>
            </div>
            </div>
          </div>
          
        </div>
      </>
    );
  }
  
  export default Price;