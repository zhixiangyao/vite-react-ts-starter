import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, setLocalStorage } from '/@/utils'

const initialState = {
  value: getLocalStorage('value') ? Number(getLocalStorage('value')) : 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      setLocalStorage('value', state.value)
    },
    decrement: (state) => {
      state.value -= 1
      setLocalStorage('value', state.value)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      setLocalStorage('value', state.value)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
