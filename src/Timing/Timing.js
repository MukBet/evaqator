import Card from 'react-bootstrap/Card';

const timingStyles = {
    container: {
      display: 'flex',
      justifyContent: 'left',
      padding: '15px', // Отступы для контейнера, чтобы картинки не касались краев экрана
      paddingTop: '10px', // Добавляем прокрутку, если картинки не помещаются
      overflow: 'hidden', /* Скрываем всё, что выходит за пределы блока */
      borderRadius: '15px', /* Скругленные углы для контейнера галереи */
    }
  };

function Timing() {
  return (
    
    <div style={timingStyles.container}>
     <Card
          bg="info"
          key="Info"
          text='white'
          style={{ width: '30rem' }}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title> Час подачі авто по місту до 30 хв,</Card.Title>
            <Card.Text>
            за відсутності заторів
            </Card.Text>
          </Card.Body>
        </Card>
    </div>

  );
}

export default Timing;