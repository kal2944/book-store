import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../../redux/books/booksSlice';
import './book.css';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const resetInput = () => {
    setTitle('');
    setAuthor('');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    if (title && author) {
      const bookData = {
        item_id: uuidv4(),
        title,
        author,
        category: 'fiction',
      };
      dispatch(addBook(bookData));
      dispatch(postBook(bookData));
      resetInput();
    }
  };

  return (
    <div className="addBook">
      <h1 className="formheading">ADD NEW BOOK</h1>
      <form onSubmit={submitHandler} className="form">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="inpField"
          value={title}
          type="text"
          placeholder="Book title"
          name="title"
          required
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          className="inpField"
          type="text"
          value={author}
          placeholder=" Auther"
          name="Auther"
          required
        />
        <button className="btn" type="submit">Add Book</button>
      </form>
    </div>

  );
}

export default AddBook;
