import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        loggedIn: false,
        uid: "",
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },

        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        },
        setUID: (state, action) => {
            state.uid = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, setLoggedIn, setUID} = userSlice.actions;

export default userSlice.reducer;