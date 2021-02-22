import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const searchShowsByName = async searchTerm => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/search/shows`, {
      params: { q: searchTerm }
    })
    return Promise.resolve(response.data)
  } catch (e) {
    return Promise.reject(e.message)
  }
}

export const fetchShowsByName = createAsyncThunk(
  'shows/fetchByName',
  async (searchTerm, thunkAPI) => {
    return searchShowsByName(searchTerm)
  }
)

const showListSlice = createSlice({
  name: 'shows',
  initialState: {
    results: [],
    loading: false,
    error: null,
    errorMessage: null
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setSearchTerm: (state, { payload }) => {
      return { ...state, searchTerm: payload }
    }
  },
  extraReducers: {
    [fetchShowsByName.pending]: (state, action) => {
      state.error = false
      state.loading = true
    },
    [fetchShowsByName.rejected]: (state, { error }) => {
      state.error = true
      state.errorMessage = error.message
      state.loading = false
    },
    [fetchShowsByName.fulfilled]: (state, { payload }) => {
      state.results = payload
      state.error = false
      state.loading = false
    }
  }
})
export const setSearchTerm = showListSlice.actions.setSearchTerm
export default showListSlice.reducer
