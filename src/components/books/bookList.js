import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';
import './book.css';

function BookList({ List }) {
  const { title, author } = List;
  const dispatch = useDispatch();

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
        <button className="comment" type="button" onClick={() => dispatch(removeBook(List.item_id))}>
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

};

BookList.propTypes = {
  List: PropTypes.shape({
    item_id: PropTypes.string,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
export default BookList;
