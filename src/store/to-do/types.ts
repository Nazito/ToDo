export enum ETaskStatus {
  all = 'ALL',
  current = 'CURRENT',
  completed = 'COMPLETED',
}

export interface ITask {
  id: number
  name: string
  completed: boolean
}

export interface IToDoState {
  toDoList: ITask[]
  filter: ETaskStatus
}
