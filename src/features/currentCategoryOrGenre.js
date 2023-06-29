import { createSlice } from '@reduxjs/toolkit';

export const categoryOrGenre = createSlice({
  name: 'categoryOrGenre',
  initialState: {
    categoryOrGenreName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectCategoryOrGenre: (state, action) => {
      console.log(action.payload);
      // state.categoryOrGenreName =
    },
  },
});

export const { selectCategoryOrGenre } = categoryOrGenre.actions;
export default categoryOrGenre.reducer;
