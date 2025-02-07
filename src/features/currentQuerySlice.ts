import { createSlice } from '@reduxjs/toolkit'
import { CurrentState } from './types'

const initialState: CurrentState = {
  countries: [],
  genre: [],
  order: 'NUM_VOTE',
  type: '',
  year: 0,
  page: 1,
}

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {
    //TODO ADD
  },
})

export default currentQuerySlice.reducer