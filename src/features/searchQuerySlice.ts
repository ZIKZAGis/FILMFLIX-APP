import { createSlice } from '@reduxjs/toolkit'
import { SearchState } from './types'

const initialState: SearchState = {
  countries: [],
  genre: [],
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: 1,
  keyword: '',
}

export const searchQuerySlice = createSlice({
  name: 'searchQuerySlice',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => ({
      ...state,
      ...action.payload
    }),
  },
})

export const {setSearchQuery} = searchQuerySlice.actions
export default searchQuerySlice.reducer