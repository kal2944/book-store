import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catagories from './components/books/bookCatagories';
import Home from './components/books/home';
import Nav from './components/navBar/navBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Catagories />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
