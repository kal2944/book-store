/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listBooks: [
    {
      item_id: 'item1',
      title: 'Afterlives',
      author: 'Abdulrazak Gurnah',

    },
    {
      item_id: 'item2',
      title: 'An Immense World',
      author: 'Ed Yong',

    },
    {
      item_id: 'item3',
      title: 'Bad Mexicans',
      author: 'Kelly Lytle Hernández ',

    },
    {
      item_id: 'item 4',
      title: 'The Book of Goose',
      author: 'Yiyun Li',

    },
  ],
};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.listBooks = [...state.listBooks, action.payload];
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      const result = state.listBooks.filter((book) => book.item_id !== bookId);

      return {
        listBooks: result,
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
