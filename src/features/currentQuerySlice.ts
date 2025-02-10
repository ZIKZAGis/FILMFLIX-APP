import { createSlice } from '@reduxjs/toolkit'
import { CurrentState } from './types'

const initialState: CurrentState = {
  countries: [],
  genre: [],
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: 1,
}

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {
    selectQuery: (state, action) => ({
      ...state,
      ...action.payload
    }),
    resetQuery: () => ({
      ...initialState
    })
  },
})

export const {selectQuery, resetQuery} = currentQuerySlice.actions
export default currentQuerySlice.reducer