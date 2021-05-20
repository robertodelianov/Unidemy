
import classes from '../../styles/css/book.module.css';

import PreviewButton from '../UI/PreviewButton';

const Book = (props) => {
  const { title, description, price, issued, } = props.item.fields;
  const imageFile = props.item.fields.imageFile.fields.file.url;
  const id = props.item.sys.id;

  return (
    <div className={classes['course-container']}>
      <h2>Issued: {issued}</h2>
      <h1>{title}</h1>
      <img src={imageFile} alt="bookOriginImage" />
      <p>{description.substring(0,50)} ...</p>
      <PreviewButton id={id} />
    </div>
  );
};

export default Book;
