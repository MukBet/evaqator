import './AdditionalService.css';
const additionalStyles = {
  container: {
    justifyContent: 'center',
    padding: '15px', // Отступы для контейнера, чтобы картинки не касались краев экрана
    paddingTop: '10px', // Добавляем прокрутку, если картинки не помещаются
    overflow: 'hidden', /* Скрываем всё, что выходит за пределы блока */
    borderRadius: '15px', /* Скругленные углы для контейнера галереи */
    width: '30rem',
    color: '#054685',
    fontWeight: 1000,
    FontFace: 'Arial, sans-serif' 
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
        <h1>Додаткові послуги <img style={{width:'32px',height:'32px',}} src='https://symbl.cc/i/webp/d6/b84d80cec675b4229b9b7f6a2ea2c1.webp'></img></h1>
      </div>
      <div style={{ textAlign:'left'}}>
        <h4 class="info-row-service">
        <span style={{color:"green", marginRight: "5px"}}>&#128667;</span> Вантажні перевезення по місту та по Україні.
        </h4>
        <h4 class="info-row-service">
        <span style={{color:"green", marginRight: "5px"}}>&#128667;</span> Квартирні, офісні переїзди, доставка різних товарів.
        </h4>
        <h4 class="info-row-service">
        <span style={{color:"green", marginRight: "5px"}}>&#128667;</span> Вантажопідйомність до 1,5 тонн.
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