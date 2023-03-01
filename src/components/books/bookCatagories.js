import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './book.css';

function Catagories() {
  const { categories } = useSelector((state) => state.categories);
  const [searchField, setSearchField] = useState('');
  const [filterResult, setFilterResult] = useState(categories);

  const filterHandler = () => {
    setFilterResult(filterResult.map((item) => item.country.includes(searchField)));
  };
  return (
    <div>
      <input type="text" value={searchField} onChange={(e) => setSearchField(e.target.value)} />
      <button type="button" onClick={filterHandler}>Filter</button>
    </div>
  );
}

export default Catagories;
