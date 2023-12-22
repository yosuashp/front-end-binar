import { configureStore } from '@reduxjs/toolkit'
import carFormReducer from './components/Search/carFormSlice'

export default configureStore({
    reducer: {
        carForm: carFormReducer
    }
})