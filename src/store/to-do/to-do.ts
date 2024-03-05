import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IToDoState } from './types'

const initialState: IToDoState = {
  'toDoList': [],
}

export const toDoSlice = createSlice({
  'name': 'todo',
  initialState,
  'reducers': {
    'addToDoItem': (state, action: PayloadAction<Partial<any>>) => {
      state.toDoList = [...state.toDoList, action.payload]
    },
  },
})

export const { addToDoItem } = toDoSlice.actions
export const toDoReducer = toDoSlice.reducer
