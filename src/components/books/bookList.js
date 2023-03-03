import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBook } from '../../redux/books/booksSlice';
import './book.css';

function BookList({ List, id }) {
  const { title, author } = List;
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <div className="bookli">
      <div className="main">
        <h2>{title}</h2>
        <p className="bookAuthor">{author}</p>
      </div>
      <div className="list">
        <button className="comment" type="button">
          Comments
        </button>
        <button className="comment" data-id={id} type="button" onClick={removeHandler}>
          Remove
        </button>
        <button className="edit" type="button">
          Edit
        </button>
      </div>
    </div>
  );
}

BookList.defaultProps = {
  List: {
    item_id: '',
    title: '',
    author: '',
  },
  id: '',
};

BookList.propTypes = {
  List: PropTypes.shape({
    item_id: PropTypes.string,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  id: PropTypes.string,
};
export default BookList;
