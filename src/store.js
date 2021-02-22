import { configureStore } from '@reduxjs/toolkit'
import showsReducer from './reducers/shows'

export default configureStore({
  reducer: {
    searchResults: showsReducer
  }
})
