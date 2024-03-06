import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { AppDispatch, RootState } from '../index'
import { addToDoItem, setFilter, toggleToDoItem } from './to-do'
import { ETaskStatus, ITask, IToDoState } from './types'

interface IProps {
  onAddToDoItem: (toDoItem: ITask) => void
  onToggleToDoItem: (id: number) => void
  onSetFilter: (status: ETaskStatus) => void
}

export const getToDo = (state: RootState): IToDoState => state.todo

export function useToDoAction(): IProps {
  const dispatch = useDispatch<AppDispatch>()

  const onAddToDoItem = useCallback(
    (toDoItem: ITask) => {
      dispatch(addToDoItem(toDoItem))
    },
    [dispatch],
  )

  const onToggleToDoItem = useCallback(
    (id: number) => {
      dispatch(toggleToDoItem(id))
    },
    [dispatch],
  )

  const onSetFilter = useCallback(
    (status: ETaskStatus) => {
      console.log(status, 'status')
      dispatch(setFilter(status))
    },
    [dispatch],
  )

  return useMemo(
    () => ({
      onAddToDoItem,
      onToggleToDoItem,
      onSetFilter,
    }),
    [onAddToDoItem, onToggleToDoItem, onSetFilter],
  )
}

export function useToDoState(): IToDoState {
  return useSelector(getToDo)
}
