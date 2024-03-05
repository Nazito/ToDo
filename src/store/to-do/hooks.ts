import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { AppDispatch, RootState } from '../index'
import { addToDoItem } from './to-do'
import { IToDoState } from './types'

export const getToDo = (state: RootState): IToDoState => state.todo

export function useToDoAction(): { onAddToDoItem: (toDoItem: Partial<any>) => void } {
  const dispatch = useDispatch<AppDispatch>()

  const onAddToDoItem = useCallback(
    (toDoItem: Partial<any>) => {
      dispatch(addToDoItem(toDoItem))
    },
    [dispatch],
  )

  return useMemo(
    () => ({
      onAddToDoItem,
    }),
    [onAddToDoItem],
  )
}

export function useToDoState(): IToDoState {
  return useSelector(getToDo)
}
