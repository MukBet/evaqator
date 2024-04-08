import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const orderStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '15px', // Отступы для контейнера, чтобы картинки не касались краев экрана
      paddingTop: '10px', // Добавляем прокрутку, если картинки не помещаются
      overflow: 'hidden', /* Скрываем всё, что выходит за пределы блока */
      borderRadius: '15px', /* Скругленные углы для контейнера галереи */
    },
    textSise: {
      fontSize: '1.5rem', /* Большой размер шрифта для заголовка */
    }
  };
  
function Order() {
  return (
    
    <div style={orderStyles.container}>
    <Card style={orderStyles.textSise}>
      <Card.Header>Як замовити евакуатор !?</Card.Header>
      <ListGroup variant="flush" style={{textAlign:'left'}}>
        <ListGroup.Item>1. Зателефонувати за номером +380508518834</ListGroup.Item>
        <ListGroup.Item>2. Вказати точну адресу куди потрібен евакуатор</ListGroup.Item>
        <ListGroup.Item>3. Назвати марку авто ( до 2,5 тонн )</ListGroup.Item>
        <ListGroup.Item>4. Вказати чи є складність завантаження</ListGroup.Item>
        <ListGroup.Item>5. Назвати адресу куди потрібно доставити</ListGroup.Item>
        <ListGroup.Item>6. Назвати марку авто ( до 2,5 тонн )</ListGroup.Item>
        <ListGroup.Item>7. Очікувати на евакуатор</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default Order;