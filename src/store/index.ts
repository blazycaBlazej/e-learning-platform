import { configureStore } from '@reduxjs/toolkit'

//slices
import { uiSlice } from './slices/uiSlice/uiSlice'

const store = configureStore({
	reducer: uiSlice.reducer,
})

export default store
