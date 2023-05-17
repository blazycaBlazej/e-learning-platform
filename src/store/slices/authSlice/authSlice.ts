import { createSlice } from '@reduxjs/toolkit'
const initialState = { isLogin: false }

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state) {
			state.isLogin = false
		},
		login(state) {
			state.isLogin = true
		},
	},
})

export default authSlice

export const authAction = authSlice.actions
