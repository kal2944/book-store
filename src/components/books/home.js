import React from 'react';
import AddBook from './addBook';
import BookList from './bookList';

function Home() {
  const listBooks = [
    {
      title: 'Afterlives',
      author: 'Abdulrazak Gurnah',
      id: 1,
    },
    {
      title: 'An Immense World',
      author: 'Ed Yong',
      id: 2,
    },
    {
      title: 'Bad Mexicans',
      author: 'Kelly Lytle Hernández ',
      id: 3,
    },
    {
      title: 'The Book of Goose',
      author: 'Yiyun Li',
      id: 4,
    },
  ];

  return (
    <div className="parent">
      {listBooks.map((item) => (
        <BookList key={item.id} List={item} />
      ))}
      <hr className="hr" />
      <AddBook />
    </div>
  );
}

export default Home;
