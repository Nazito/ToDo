import { FC } from 'react'
import { useToDoAction, useToDoState } from 'src/store/to-do/hooks'
import { ETaskStatus } from 'src/store/to-do/types'
import { FilterTab, WrapperFilters } from './styled'

export const ToDoFilters: FC = () => {
  const { onSetFilter } = useToDoAction()
  const { toDoList, filter } = useToDoState()

  const handleSetFilter = (filter: ETaskStatus): void => {
    onSetFilter(filter)
  }

  const completedTasksCount = toDoList.filter((task) => task.completed).length
  const currentTasksCount = toDoList.filter((task) => !task.completed).length
  const allTasksCount = toDoList.length

  return (
    <WrapperFilters>
      <FilterTab onClick={() => handleSetFilter(ETaskStatus.all)} $isActive={filter === ETaskStatus.all}>
              All <span>{allTasksCount}</span>
      </FilterTab>
      <FilterTab onClick={() => handleSetFilter(ETaskStatus.completed)} $isActive={filter === ETaskStatus.completed}>
              Completed <span>{completedTasksCount}</span>
      </FilterTab>
      <FilterTab onClick={() => handleSetFilter(ETaskStatus.current)} $isActive={filter === ETaskStatus.current}>
              Current <span>{currentTasksCount}</span>
      </FilterTab>
    </WrapperFilters>
  )
}
