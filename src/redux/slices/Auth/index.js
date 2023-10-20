import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  typeToken: '',
  user: {},
  userDashboard: '',
  permissionKeys: [],
  permissionKeysParent: []
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
    },
    savePermissionKeys: (state, action) => {
      state.permissionKeys = action.payload;
    },
    savePermissionKeysParent: (state, action) => {
      state.permissionKeysParent = action.payload;
    }
  },
})

export const { saveToken, saveUser, saveTypeToken, saveUserDashboard, savePermissionKeys, savePermissionKeysParent } = authSlice.actions

export default authSlice.reducer