import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {}
}

export const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {
    saveProfile: (state, action) => {
        state.profile = action.payload;
    }
  },
})

export const { saveProfile } = myProfileSlice.actions

export default myProfileSlice.reducer