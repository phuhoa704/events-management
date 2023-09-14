import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listPermissions: []
}

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    saveListPermissions: (state, action) => {
        state.listPermissions = action.payload;
    }
  },
})

export const { saveListPermissions } = permissionsSlice.actions

export default permissionsSlice.reducer