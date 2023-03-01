import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';
import './book.css';

function Catagories() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(checkStatus());
  return (
    <div className="categories-wrapper">
      <p>{categories}</p>
      <button type="button" onClick={handleClick}>Check Status</button>
    </div>
  );
}

export default Catagories;
