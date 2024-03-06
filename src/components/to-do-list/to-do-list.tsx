import { FC } from 'react'
import { useToDoAction, useToDoState } from 'src/store/to-do/hooks'
import { ETaskStatus, ITask } from 'src/store/to-do/types'
import { EmptyTextStyled, Task, Wrapper } from './styled'

export const ToDoList: FC = () => {
  const { onToggleToDoItem } = useToDoAction()
  const { toDoList, filter } = useToDoState()

  const handleToggleTask = (taskId: number): void => {
    onToggleToDoItem(taskId)
  }

  const filteredTasks = toDoList?.reduce((acc: ITask[], task: ITask) => {
    switch (filter) {
      case ETaskStatus.completed: {
        if (task.completed) {
          acc.push(task)
        }
        break
      }
      case ETaskStatus.current: {
        if (!task.completed) {
          acc.push(task)
        }
        break
      }
      default: {
        acc.push(task)
        break
      }
    }
    return acc
  }, [])

  if (toDoList.length > 0 && filteredTasks.length === 0) {
    return <EmptyTextStyled>Not found</EmptyTextStyled>
  }

  return (
    <Wrapper>
      {filteredTasks.map((task: ITask) => {
        return (
          <Task
            key={task.id}
            style={{
              'textDecoration': task.completed ? 'line-through' : 'none',
            }}
            onClick={() => handleToggleTask(task.id)}
            $isCompleted={task.completed}
          >
            {task.name}
          </Task>
        )
      })}
    </Wrapper>
  )
}
