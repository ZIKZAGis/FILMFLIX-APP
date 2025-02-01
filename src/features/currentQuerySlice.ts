import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

interface Countries {
  countries: string
}

interface Genders {
  genders: string
}

export interface CurrentState {
  countries: Countries[] | null,
  genres: Genders[] | null,
  order: string,
  type: string,
  year: number | null,
  page: number,
}

const initialState: CurrentState = {
  countries: null,
  genres: null,
  order: 'NUM_VOTE',
  type: '',
  year: null,
  page: 1,
}

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {
    // increment: (state) => {

    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// export const { increment, decrement, incrementByAmount } = currentQuerySlice.actions

export default currentQuerySlice.reducer