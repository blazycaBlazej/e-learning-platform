import { createSlice } from '@reduxjs/toolkit'
const initialState = { menuIsOpen: false }

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleMenu(state) {
			state.menuIsOpen = !state.menuIsOpen
		},
		closeMenu(state) {
			state.menuIsOpen = false
		},
	},
})

export default uiSlice

export const uiAction = uiSlice.actions
