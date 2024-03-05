import { Reducer, Tuple, UnknownAction, configureStore } from '@reduxjs/toolkit'
import { load } from 'redux-localstorage-simple'
import { IToDoState } from './to-do/types'
import { toDoReducer } from './to-do/to-do'
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { Middlewares } from '@reduxjs/toolkit/dist/configureStore'

type MergedState = {
  todo: IToDoState
}

const PERSISTED_KEYS: string[] = ['']
const loadedState = load({ 'states': PERSISTED_KEYS }) as MergedState
export const store = configureStore({
  'reducer': {
    'todo': toDoReducer as Reducer<unknown, UnknownAction, IToDoState>,
  },
  'preloadedState': loadedState,
  'devTools': true,
  'middleware': (
    getDefaultMiddleware: GetDefaultMiddleware<{
      todo: unknown
    }>,
  ): Tuple<Middlewares<{ todo: unknown }>> => {
    const middleware = getDefaultMiddleware({
      'serializableCheck': false,
      'thunk': true,
    })

    return middleware as Tuple<Middlewares<{ todo: unknown }>>
  },
})

export interface RootState {
  todo: IToDoState
}
export type AppDispatch = typeof store.dispatch
