import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false, // Initialize loading to false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInAlert: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export default userSlice.reducer;
export const { signInAlert, signInSuccess, signInFailure } = userSlice.actions;
