/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],

};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (state, actions) => {
      const bookId = actions.payload;
      state.bookList = [...state.bookList, bookId];
    },

    removeBook: (state, actions) => {
      const bookId = actions.payload;
      state.bookList = state.bookList.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
