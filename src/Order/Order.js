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
      width: '25rem',
      backgroundColor: '#a5e1e1',
    },
    textSise: {
      fontSize: '1.5rem', /* Большой размер шрифта для заголовка */
    },
    header: {
      background: 'linear-gradient(145deg, #2c3e50, #34495e)',
      fontSize: '2.0rem',
      fontWeight: 'bold',
      color: '#b4e7be',
    },
    contentRow: {
      border: '1px solid #a5e1e1',
      background: 'linear-gradient(145deg, #2c3e50, #34495e)',
      color: 'white',
      textAlign:'left',
    },
    content: {
    }
  };
  
function Order() {
  return (
    
    <div style={orderStyles.container}>
    <Card style={orderStyles.textSise}>
      <Card.Header style={orderStyles.header}>Як замовити евакуатор !?</Card.Header>
      <ListGroup variant="flush" style={orderStyles.content}>
        <ListGroup.Item style={orderStyles.contentRow}>1. Зателефонувати за номером +380508518834</ListGroup.Item>
        <ListGroup.Item style={orderStyles.contentRow}>2. Вказати точну адресу куди потрібен евакуатор</ListGroup.Item>
        <ListGroup.Item style={orderStyles.contentRow}>3. Назвати марку авто ( до 2,5 тонн )</ListGroup.Item>
        <ListGroup.Item style={orderStyles.contentRow}>4. Вказати чи є складність завантаження</ListGroup.Item>
        <ListGroup.Item style={orderStyles.contentRow}>5. Назвати адресу куди потрібно доставити</ListGroup.Item>
        <ListGroup.Item style={orderStyles.contentRow}>6. Очікувати на евакуатор</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default Order;