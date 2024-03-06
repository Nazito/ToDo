import * as yup from 'yup'

export const addTaskSchema = yup.object().shape({
  'taskInput': yup.string().min(2, 'validation.field_min_2').required('validation.field_required'),
})
