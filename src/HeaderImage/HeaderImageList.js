import HeaderImageItem from "./HeaderImageItem";

// Стили для галереи и картинок
const galleryStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px', // Промежуток между картинками
      overflow: 'hidden', /* Скрываем всё, что выходит за пределы блока */
      borderRadius: '15px', /* Скругленные углы для контейнера галереи */
    },
    image: {
      width: 'calc(33%)', // Ширина каждой картинки с учетом промежутка
      height: '300px', // Высота картинки
      objectFit: 'cover', // Этот стиль гарантирует, что картинки будут полностью покрывать блок без искажений
      borderRadius: '15px', /* Скругленные углы для каждой картинки */
    }
  };

function HeaderImageList({ images }) {
    return (
        <div style={galleryStyles.container}>
            {images.map(image => (
            <HeaderImageItem key={image.id} src={image.src} alt={image.alt} style={galleryStyles.image} loading="lazy" />
        ))}
    </div>
    );
  }

// function HeaderImageList(props){
//     return (
//         <ul style={styles.ul}>
//             {props.todos.map((todo,index)=> {
//                 return <ImageItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}></ImageItem>
//             })}
//         </ul>
//     )
// }


export default HeaderImageList;