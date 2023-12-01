import {createSlice} from "@reduxjs/toolkit";

const auth = createSlice( {
    name: 'auth',
    initialState: {
        user: {
            id:1,
            username: 'admin',
            fullname: 'Admin',
            avatar: 'https://i.pravatar.cc/150?img=7',
        }
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})


export const {login, logout} = auth.actions;
export default auth.reducer;