import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const defaultValues = {
  title: '',
  description: '',
}

const TodoItemForm = (props) => {
  const { handleSubmit, control, reset, watch } = useForm(defaultValues)

  const onSubmit = (data) => {
    const id = Date.now() + Math.random() * 100

    const nextData = {
      id,
      title: data.title,
      description: data.description,
    }
    props.addItem(nextData)
    reset(defaultValues)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <MyTextField
            label="TODO"
            fullWidth={true}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <MyTextField
            label="Details"
            fullWidth={true}
            multiline={true}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      />
      <MyButton
        variant="contained"
        color="primary"
        type="submit"
        disabled={!watch('title')}
      >
        Add
      </MyButton>
    </form>
  )
}
export default TodoItemForm

const MyTextField = styled(TextField)({
  marginBottom: '24px',
})
const MyButton = styled(Button)({
  marginTop: '16px !important',
  marginBottom: '16px !important',
})
