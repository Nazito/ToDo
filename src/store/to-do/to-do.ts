import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ETaskStatus, ITask, IToDoState } from './types'

const initialState: IToDoState = {
  'toDoList': [],
  'filter': ETaskStatus.all,
}

export const toDoSlice = createSlice({
  'name': 'todo',
  initialState,
  'reducers': {
    'addToDoItem': (state, action: PayloadAction<ITask>) => {
      state.toDoList = [...state.toDoList, action.payload]
    },

    'toggleToDoItem': (state, action: PayloadAction<number>) => {
      state.toDoList = state.toDoList.map((toDoItem) => {
        if (toDoItem.id === action.payload) {
          return { ...toDoItem, 'completed': !toDoItem.completed }
        }

        return toDoItem
      })
    },

    'setFilter': (state, action: PayloadAction<ETaskStatus>) => {
      state.filter = action.payload
    },
  },
})

export const { addToDoItem, toggleToDoItem, setFilter } = toDoSlice.actions
export const toDoReducer = toDoSlice.reducer
