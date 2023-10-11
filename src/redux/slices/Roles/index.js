import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  roles: [],
  roleById: {},
  permissionsInRoleById: [],
  trashBin: []
}

export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    saveRoles: (state, action) => {
        state.roles = action.payload;
    },
    saveRoleById: (state, action) => {
      state.roleById = action.payload;
    },
    savePermissionsInRoleById: (state, action) => {
      state.permissionsInRoleById = action.payload;
    },
    saveTrashBin: (state, action) => {
        state.trashBin = action.payload;
    }
  },
})

export const { saveRoles, saveRoleById, savePermissionsInRoleById, saveTrashBin } = rolesSlice.actions

export default rolesSlice.reducer