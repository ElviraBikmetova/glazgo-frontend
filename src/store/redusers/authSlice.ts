import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
    },
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        logout(state) {
            localStorage.removeItem('accessToken')
            // localStorage.removeItem('role')
            state.isAuth = false
        }
    }
})

export const {setAuth, logout} = authSlice.actions
export const auth = (state: RootState) => state.auth

export default authSlice.reducer