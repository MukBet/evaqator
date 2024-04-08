import Card from 'react-bootstrap/Card';
import './Lafeta.css'; // Импортируем стили

// Стили для галереи и картинок
const lafetaStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px', // Промежуток между картинками
      padding: '15px', // Отступы для контейнера, чтобы картинки не касались краев экрана
      paddingTop: '10px', // Добавляем прокрутку, если картинки не помещаются
      overflow: 'hidden', /* Скрываем всё, что выходит за пределы блока */
    },
  };

function Lafeta() {
  return (
    <div style={lafetaStyles.container}>
    <Card style={{ width: '27rem', background: '#2c3e50'  }} className="info-block">
      <Card.Body>
        <div className="lafeta-line lafeta-first" >Додаткова лафета в наявності</div>
        <div style={{textAlign:'right'}} className="lafeta-line lafeta-second">Оренда лафети</div>
        <div style={{textAlign:'right'}} className="lafeta-line lafeta-third mb-2 ">Вантажні перевезення</div>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Lafeta;