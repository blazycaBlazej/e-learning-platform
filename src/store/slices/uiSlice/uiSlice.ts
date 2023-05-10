import { createSlice } from '@reduxjs/toolkit'

const initialState = { menuIsOpen: false }

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleMenu(state) {
			state.menuIsOpen = !state.menuIsOpen
		},
	},
})

export const uiAction = uiSlice.actions
