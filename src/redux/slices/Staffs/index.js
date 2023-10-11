import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  staffs: [],
  staffById: {}
}

export const staffsSlice = createSlice({
  name: 'staffs',
  initialState,
  reducers: {
    saveStaffs: (state, action) => {
        state.staffs = action.payload;
    },
    saveStaffById: (state, action) => {
      state.staffById = action.payload;
    }
  },
})

export const { saveStaffs, saveStaffById } = staffsSlice.actions

export default staffsSlice.reducer