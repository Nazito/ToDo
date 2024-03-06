import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useToDoAction, useToDoState } from 'src/store/to-do/hooks'
import { ETaskStatus, ITask } from 'src/store/to-do/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { addTaskSchema } from 'src/validation/add-task-schema'

interface FormData {
  taskInput: string
}

export const ToDo: FC = () => {
  const { onAddToDoItem, onToggleToDoItem, onSetFilter } = useToDoAction()
  const { toDoList, filter } = useToDoState()

  const handleToggleTask = (taskId: number): void => {
    onToggleToDoItem(taskId)
  }

  const handleSetFilter = (filter: ETaskStatus): void => {
    onSetFilter(filter)
  }

  const {
    register,
    handleSubmit,
    reset,
    'formState': { errors },
  } = useForm<FormData>({
    'mode': 'onChange',
    'resolver': yupResolver(addTaskSchema),
    'defaultValues': {
      'taskInput': '',
    },
  })

  const onSubmit = (data: FormData): void => {
    onAddToDoItem({
      'id': Date.now(),
      'name': data.taskInput,
      'completed': false,
    })
    reset()
  }

  const completedTasksCount = toDoList.filter((task) => task.completed).length
  const currentTasksCount = toDoList.filter((task) => !task.completed).length
  const allTasksCount = toDoList.length

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

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('taskInput')} />
        {errors?.taskInput && <span>{errors.taskInput?.message && errors.taskInput.message}</span>}

        <button type="submit">Submit</button>
      </form>

      <ul>
        {filteredTasks.map((task: ITask) => {
          return (
            <li
              key={task.id}
              style={{ 'textDecoration': task.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.name}
            </li>
          )
        })}
      </ul>
      <div>
        <div>
          <button onClick={() => handleSetFilter(ETaskStatus.all)}>
            All <span>{allTasksCount}</span>
          </button>
          <button onClick={() => handleSetFilter(ETaskStatus.completed)}>
            Completed <span>{completedTasksCount}</span>
          </button>
          <button onClick={() => handleSetFilter(ETaskStatus.current)}>
            Current <span>{currentTasksCount}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
