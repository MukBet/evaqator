import './AdditionalService.css';
const additionalStyles = {
  container: {
    
    display: 'block', // Блочное отображение
    margin: '20px auto', // Автоматический отступ с обеих сторон для центрирования
    maxWidth: '600px', // Максимальная ширина контейнера
    width: '100%', // Ширина контейнера (занимает 100% родительского элемента, но не более maxWidth)
    padding: '15px', // Отступы внутри контейнера
    boxSizing: 'border-box', // Включает padding в общую ширину
    color: '#054685',
    fontWeight: 1000,
  },
  textSise: {
    fontSize: '1.5rem', /* Большой размер шрифта для заголовка */
  }
};

function AdditionalService() {
  return (
    <>
    <div style={additionalStyles.container}>
      <div class="intro-service">
        <h1>Додаткові послуги <img style={{width:'32px',height:'32px',}} src='https://symbl.cc/i/webp/d6/b84d80cec675b4229b9b7f6a2ea2c1.webp' alt="!"></img></h1>
      </div>
      <div style={{ textAlign:'left'}}>
        <h4 class="info-row-service">
        <span style={{color:"green", textAlign:'center', marginRight: "5px"}}>&#128667;</span> Вантажні перевезення по місту та по Україні.
        </h4>
        <h4 class="info-row-service">
        <span style={{color:"green", textAlign:'center', marginRight: "5px"}}>&#128667;</span> Квартирні, офісні переїзди, доставка різних товарів.
        </h4>
        <h4 class="info-row-service">
        <span style={{color:"green", textAlign:'center', marginRight: "5px"}}>&#128667;</span> Вантажопідйомність до 1,5 тонн.
        </h4>
      </div>
      <br></br>
      <div class="intro-service">
        <h3>Ціни &#9759;</h3>
      </div>
      <div style={{ textAlign:'left'}}>
        <h4 class="info-row-service" style={{textAlign:'center', textDecoration: 'underline'}}>
        По місту 300 грн / год
        </h4>
        <h4 class="info-row-service" style={{textAlign:'center'}}>
        За межами міста та по Україні 10 грн / км в обидві сторони
        </h4>
      </div>
    </div>
    </>
  );
}
  
export default AdditionalService;