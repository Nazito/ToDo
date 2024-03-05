import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useToDoState } from 'src/store/to-do/hooks'

interface FormData {
  taskInput: string
}

// interface Task {
//   id: number
//   name: string
//   completed: boolean
// }

// interface Props {
//   tasks: Task[]
//   filter: string
//   addTask: (task: string) => void
//   toggleTask: (taskId: number) => void
//   setFilter: (filter: string) => void
// }

export const ToDo: FC = () => {
  //   const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     const taskInput = e.currentTarget.taskInput as HTMLInputElement
  //     const taskName = taskInput.value.trim()
  //     if (taskName !== '') {
  //       addTask(taskName)
  //       taskInput.value = ''
  //     }
  //   }

  //   const handleToggleTask = (taskId: number) => {
  //     toggleTask(taskId)
  //   }

  //   const handleSetFilter = (filter: string) => {
  //     setFilter(filter)
  //   }

  //   const filteredTasks = tasks.filter((task) => {
  //     switch (filter) {
  //       case 'completed':
  //         return task.completed
  //       case 'current':
  //         return !task.completed
  //       default:
  //         return true
  //     }
  //   })

  const { toDoList } = useToDoState()

  console.log(toDoList, 'toDoList')
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData): void => {
    console.log(data, 'tests')
  }

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('taskInput')} />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {/* {filteredTasks.map((task) => ( */}
        <li
        // key={task.id}
        // style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        // onClick={() => handleToggleTask(task.id)}
        >
          777
        </li>
        <li
        // key={task.id}
        // style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        // onClick={() => handleToggleTask(task.id)}
        >
          888
        </li>
        <li
        // key={task.id}
        // style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        // onClick={() => handleToggleTask(task.id)}
        >
          999
        </li>
        {/* // ))} */}
      </ul>
      <div>
        {/* <button onClick={() => handleSetFilter('all')}>All</button>
        <button onClick={() => handleSetFilter('completed')}>Completed</button>
        <button onClick={() => handleSetFilter('current')}>Current</button> */}
        <button>All</button>
        <button>Completed</button>
        <button>Current</button>
      </div>
    </div>
  )
}
