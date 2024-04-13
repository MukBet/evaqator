import Card from 'react-bootstrap/Card';
import './Lafeta.css'; // Импортируем стили


function Lafeta() {
  return (
    <div className="lafeta">
    <Card style={{ width: '27rem', background: '#2c3e50'  }} className="info-block">
      <Card.Body>
        <div style={{textAlign:'center'}} className="lafeta-line lafeta-first" >Додаткова лафета в наявності</div>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '27rem', background: '#2c3e50'  }} className="info-block">
      <Card.Body>
        <div style={{textAlign:'center'}} className="lafeta-line lafeta-second">Оренда лафети</div>
      </Card.Body>
    </Card>
    <Card style={{ width: '27rem', background: '#2c3e50'  }} className="info-block">
      <Card.Body>
        <div style={{textAlign:'center'}} className="lafeta-line lafeta-third mb-2 ">Вантажні перевезення</div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Lafeta;