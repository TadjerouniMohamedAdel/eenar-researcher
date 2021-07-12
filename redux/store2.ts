import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/index'


const exampleInitialState = {
  user:{},
  
}

const persistConfig = {
  key: 'primary',
  storage,
//   whitelist: ["user"], 
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(
    persistedReducer,
    exampleInitialState,
    composeWithDevTools(applyMiddleware())
)
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch