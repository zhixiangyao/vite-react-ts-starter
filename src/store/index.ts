import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '/@/store/counter/counterSlice'

const store = configureStore({
  reducer: { counterReducer },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof store.dispatch>
