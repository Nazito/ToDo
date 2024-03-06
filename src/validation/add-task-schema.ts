import * as yup from 'yup'
import { MIN_2, REQUIRED } from './messages/messages'

export const addTaskSchema = yup.object().shape({
  'taskInput': yup.string().min(2, MIN_2).required(REQUIRED),
})
