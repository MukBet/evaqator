import Card from 'react-bootstrap/Card';

const timingStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '15px',
      borderRadius: '15px',
      // width: '25rem'
    },
    textSise: {
      fontSize: '2.5rem', /* Большой размер шрифта для заголовка */
    }
  };

function Timing() {
  return (
    
    <div style={timingStyles.container}>
     <Card
          bg="info"
          key="Info"
          text='white'
          style={{  }}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title style={timingStyles.textSise}> Час подачі авто по місту до 30 хвилин</Card.Title>
            <Card.Text>
            за відсутності заторів
            </Card.Text>
          </Card.Body>
        </Card>
    </div>

  );
}

export default Timing;