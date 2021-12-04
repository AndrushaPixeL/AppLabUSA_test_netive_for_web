import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createReducerFunction } from 'immer-reducer'
import MyImmerReducer, { myImmerReducerInitialState } from './redux/appReducer'

const reducerFunction = createReducerFunction(
  MyImmerReducer,
  myImmerReducerInitialState
)

export const store = createStore(reducerFunction, applyMiddleware(thunk))
