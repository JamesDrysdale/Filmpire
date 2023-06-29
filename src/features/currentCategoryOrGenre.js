import { createSlice } from '@reduxjs/toolkit';

export const categoryOrGenre = createSlice({
  name: 'categoryOrGenre',
  initialState: {
    categoryNameOrGenreId: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectCategoryOrGenre: (state, action) => {
      console.log(action.payload);
      state.categoryNameOrGenreId = action.payload;
    },
  },
});

export const { selectCategoryOrGenre } = categoryOrGenre.actions;
export default categoryOrGenre.reducer;
