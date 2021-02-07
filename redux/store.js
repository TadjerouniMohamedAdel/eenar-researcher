import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/index'

let store

const exampleInitialState = {
  count: 0,
  user:{},
  
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

// REDUCERS
// export const reducer = (state = exampleInitialState, action) => {
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       }
//     case actionTypes.DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       }
//     case actionTypes.RESET:
//       return {
//         ...state,
//         count: exampleInitialState.count,
//       }
//     default:
//       return state
//   }
// }

// ACTIONS



export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}



const persistConfig = {
  key: 'primary',
  storage,
//   whitelist: ["user"], 
}

const persistedReducer = persistReducer(persistConfig, reducer)

function makeStore(initialState = exampleInitialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}