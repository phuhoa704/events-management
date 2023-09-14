import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  categoryById: {},
  trashBin: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    saveCategories: (state, action) => {
        state.categories = action.payload;
    },
    saveCategoryById: (state, action) => {
        state.categoryById = action.payload;
    },
    saveTrashBin: (state, action) => {
      state.trashBin = action.payload;
    }
  },
})

export const { saveCategories, saveCategoryById, saveTrashBin } = categoriesSlice.actions

export default categoriesSlice.reducer