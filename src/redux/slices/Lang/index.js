import { createSlice } from "@reduxjs/toolkit";

const localStorageLang = localStorage.getItem('LANG');

const initialState = {
    language: localStorageLang ? localStorageLang : 'VI'
}

export const LangSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state, action) => {
            localStorage.setItem('LANG', action.payload);
            state.language = action.payload;
        }
    }
})

export const { setLang } = LangSlice.actions;
export default LangSlice.reducer;
