import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useToDoAction } from 'src/store/to-do/hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import { addTaskSchema } from 'src/validation/add-task-schema'
import { EButtonVariants } from 'src/types/types'
import { Button } from '../ui/button/button'
import { Wrap } from './styled'
import { InputRHF } from '../ui/form-components/input/input'

interface FormData {
  taskInput: string
}

export const ToDoAddForm: FC = () => {
  const { onAddToDoItem } = useToDoAction()

  const methods = useForm<FormData>({
    'mode': 'onChange',
    'resolver': yupResolver(addTaskSchema),
    'defaultValues': {
      'taskInput': '',
    },
  })

  const {
    watch,
    handleSubmit,
    reset,
    'formState': { isValid },
  } = methods

  const formData = watch()

  const onSubmit = (data: FormData): void => {
    onAddToDoItem({
      'id': Date.now(),
      'name': data.taskInput,
      'completed': false,
    })
    reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrap>
          <InputRHF
            name="taskInput"
            value={formData.taskInput}
            label="What do you want to do?"
          />
          <Button variant={EButtonVariants.Default} disabled={!isValid}>
            Add
          </Button>
        </Wrap>
      </form>
    </FormProvider>
  )
}
