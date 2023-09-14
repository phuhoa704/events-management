import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  typeToken: '',
  user: {},
  userDashboard: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveTypeToken: (state, action) => {
      state.typeToken = action.payload;
    },
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    saveUserDashboard: (state, action) => {
      state.userDashboard = action.payload;
    }
  },
})

export const { saveToken, saveUser, saveTypeToken, saveUserDashboard } = authSlice.actions

export default authSlice.reducer