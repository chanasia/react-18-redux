import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState{
  value:number,
}

const initalState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState:initalState,
  reducers: {
    incremented: state => {
      return { value: state.value + 1 };
    },
    amountAdded: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { incremented, amountAdded } = counterSlice.actions
export default counterSlice;