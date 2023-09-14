import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  redirect: false
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state) => {
        state.loading = true;
    },
    hideLoading: (state) => {
        state.loading = false
    },
    setRedirect: (state, action) => {
      state.redirect = action.payload;
    }
  },
})

export const { showLoading, hideLoading, setRedirect } = loadingSlice.actions

export default loadingSlice.reducer