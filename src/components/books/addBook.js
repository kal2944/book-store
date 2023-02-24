import React from 'react';
import './book.css';

function AddBook() {
  return (
    <div className="addBook">
      <h1 className="formheading">ADD NEW BOOK</h1>
      <form className="form">
        <input className="inpField" type="text" placeholder="Book title" name="title" />
        <input className="inpField" type="text" placeholder=" Auther" name="Auther" />
        <button className="btn" type="submit">Add Book</button>
      </form>
    </div>

  );
}

export default AddBook;
