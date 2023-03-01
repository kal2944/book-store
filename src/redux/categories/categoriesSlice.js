/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const categoriesSlice = createSlice({
  name: 'catagorie',
  initialState,
  reducers: {
    checkStatus: () => ['Under construction'],
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
