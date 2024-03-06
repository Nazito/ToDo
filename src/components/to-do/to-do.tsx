import { FC } from 'react'
import { useToDoState } from 'src/store/to-do/hooks'

import { ToDoAddForm } from '../to-do-add-form/to-do-add-form'
import { ToDoList } from '../to-do-list/to-do-list'
import { Heading, PageWrapStyled, Wrapper } from './styled'
import { ToDoFilters } from '../to-do-filters/to-do-filters'

export const ToDo: FC = () => {
  const { toDoList } = useToDoState()

  return (
    <PageWrapStyled>
      <Wrapper>
        <Heading>To Do List</Heading>
        <ToDoAddForm />
        {toDoList.length > 0 && <ToDoFilters />}
        <ToDoList />
      </Wrapper>
    </PageWrapStyled>
  )
}
