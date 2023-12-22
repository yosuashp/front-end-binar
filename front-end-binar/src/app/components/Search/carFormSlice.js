import { createSlice } from '@reduxjs/toolkit'

export const carFormSlice = createSlice({
    name: 'carForm',
    initialState: {
        value: {
            driverType: null,
            pickupDate: null,
            pickupTime: null,
            peopleAmount: null
        }
    },
    reducers: {
        saveDriverType: (state, action) => {
            state.value = {
                ...state.value,
                driverType: action.payload
            }
        },

        savePickupDate: (state, action) => {
            state.value = {
                ...state.value,
                pickupDate: action.payload
            }
        },

        savePickupTime: (state, action) => {
            state.value = {
                ...state.value,
                pickupTime: action.payload
            }
        },

        savePeopleAmount: (state, action) => {
            state.value = {
                ...state.value,
                peopleAmount: action.payload
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { saveDriverType, savePickupDate, savePickupTime, savePeopleAmount } = carFormSlice.actions

export default carFormSlice.reducer